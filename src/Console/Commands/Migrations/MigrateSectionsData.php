<?php

namespace Creopse\Creopse\Console\Commands\Migrations;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Illuminate\Support\Facades\DB;

class MigrateSectionsData extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:migrate-sections-data
                            {old_database : The name of the old database}
                            {--host= : Old database host (default: current DB host)}
                            {--port= : Old database port (default: current DB port)}
                            {--username= : Old database username (default: current DB username)}
                            {--password= : Old database password (default: current DB password)}
                            {--chunk=1000 : Number of records to process at a time}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Migrate pre v0.5.0 database sections data';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try {
            $this->info('Starting database sections data migration...');

            // Get old database connection parameters
            $oldDbName = $this->argument('old_database');
            $oldDbHost = $this->option('host') ?? env('DB_HOST', 'localhost');
            $oldDbPort = $this->option('port') ?? env('DB_PORT', '3306');
            $oldDbUser = $this->option('username') ?? env('DB_USERNAME', 'root');
            $oldDbPass = $this->option('password') ?? env('DB_PASSWORD', '');

            // Configure old database connection
            config(['database.connections.old_db' => [
                'driver' => env('DB_CONNECTION', 'mysql'),
                'host' => $oldDbHost,
                'port' => $oldDbPort,
                'database' => $oldDbName,
                'username' => $oldDbUser,
                'password' => $oldDbPass,
                'charset' => 'utf8mb4',
                'collation' => 'utf8mb4_unicode_ci',
            ]]);

            $this->info("Connected to old database: {$oldDbName}");

            // Test the connection
            $this->testOldDatabaseConnection();

            // Fetch and process sections data
            $this->migrateSectionsData();

            $this->info('Database sections data migration completed...');
        } catch (\Exception $e) {
            $this->error('Migration failed: ' . $e->getMessage());
            return 1;
        }

        return 0;
    }

    /**
     * Test the old database connection
     */
    protected function testOldDatabaseConnection()
    {
        try {
            DB::connection('old_db')->getPdo();
            $this->info('✓ Successfully connected to old database');
        } catch (\Exception $e) {
            throw new \Exception("Failed to connect to old database: " . $e->getMessage());
        }
    }

    /**
     * Migrate pages data from old database
     */
    protected function migrateSectionsData()
    {
        // Check if pages table exists in old database
        if (!$this->tableExists('old_db', 'pages')) {
            $this->warn('Pages table does not exist in old database. Skipping.');
            return;
        }

        // Check if sections table exists in current database
        if (!$this->tableExists(null, 'sections')) {
            $this->warn('Sections table does not exist in current database. Skipping.');
            return;
        }

        // Check if page_section pivot table exists in current database
        if (!$this->tableExists(null, 'page_section')) {
            $this->warn('Page_Section pivot table does not exist in current database. Skipping.');
            return;
        }

        // Get total count of pages with sections_data
        $totalPages = DB::connection('old_db')
            ->table('pages')
            ->whereNotNull('sections_data')
            ->where('sections_data', '!=', '')
            ->count();

        $this->info("Total pages to migrate: {$totalPages}");

        if ($totalPages === 0) {
            $this->info('No pages found in old database.');
            return;
        }

        $chunkSize = (int)$this->option('chunk');
        $offset = 0;
        $processedCount = 0;
        $totalSectionsMigrated = 0;

        $progressBar = $this->output->createProgressBar($totalPages);
        $progressBar->start();

        do {
            // Fetch chunk of pages from old database
            $pages = DB::connection('old_db')
                ->table('pages')
                ->whereNotNull('sections_data')
                ->where('sections_data', '!=', '')
                ->offset($offset)
                ->limit($chunkSize)
                ->get();

            if ($pages->isEmpty()) {
                break;
            }

            // Process each page
            foreach ($pages as $page) {
                $sectionsCount = $this->processPage($page);
                $totalSectionsMigrated += $sectionsCount;
                $processedCount++;
                $progressBar->advance();
            }

            $offset += $chunkSize;
        } while ($pages->count() === $chunkSize);

        $progressBar->finish();
        $this->info("\n✓ Processed {$processedCount} pages");
        $this->info("✓ Migrated {$totalSectionsMigrated} section relationships");
    }

    /**
     * Process a single page record
     */
    protected function processPage($page)
    {
        $sectionsMigrated = 0;

        try {
            // Convert to array for easier manipulation
            $pageData = (array)$page;

            $pageId = $pageData['id'] ?? null;
            $pageTitle = $pageData['title'] ?? 'No title';

            $this->info("\nProcessing page ID: {$pageId}");
            $this->info("Page title: {$pageTitle}");

            // Decode the sections_data JSON
            $sectionsData = json_decode($pageData['sections_data'], true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                $this->warn("Invalid JSON in sections_data for page ID: {$pageId}");
                return 0;
            }

            if (empty($sectionsData)) {
                $this->info("No sections data found for page ID: {$pageId}");
                return 0;
            }

            $this->info("Found " . count($sectionsData) . " sections for this page");

            // Check if page exists in new database
            $newPage = DB::table('pages')->where('id', $pageId)->first();

            if (!$newPage) {
                $this->warn("Page ID {$pageId} does not exist in new database. Skipping sections.");
                return 0;
            }

            // Process each section
            foreach ($sectionsData as $sectionSlug => $sectionData) {
                if ($this->processSection($pageId, $sectionSlug, $sectionData)) {
                    $sectionsMigrated++;
                }
            }

            $this->info("Successfully migrated {$sectionsMigrated} sections for page ID: {$pageId}");
        } catch (\Exception $e) {
            $this->error("Error processing page ID {$pageId}: " . $e->getMessage());
        }

        return $sectionsMigrated;
    }

    /**
     * Process a single section for a page
     */
    protected function processSection($pageId, $sectionSlug, $sectionData)
    {
        try {
            $this->info("  Processing section: {$sectionSlug}");

            // Find the section in the new database by slug
            $section = DB::table('sections')
                ->where('slug', $sectionSlug)
                ->first();

            if (!$section) {
                $this->warn("    Section '{$sectionSlug}' not found in new database. Skipping.");
                return false;
            }

            $sectionId = $section->id;

            // Check if this relationship already exists
            $existingRelationship = DB::table('page_section')
                ->where('page_id', $pageId)
                ->where('section_id', $sectionId)
                ->first();

            if ($existingRelationship) {
                $this->info("    Relationship already exists for page {$pageId} and section {$sectionId}. Updating data.");

                // Update existing pivot data
                DB::table('page_section')
                    ->where('page_id', $pageId)
                    ->where('section_id', $sectionId)
                    ->update([
                        'data' => json_encode($sectionData),
                        'updated_at' => now()
                    ]);
            } else {
                $this->info("    Creating new relationship for page {$pageId} and section {$sectionId}");

                // Create new pivot record
                DB::table('page_section')->insert([
                    'page_id' => $pageId,
                    'section_id' => $sectionId,
                    'data' => json_encode($sectionData),
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }

            return true;
        } catch (\Exception $e) {
            $this->error("    Error processing section '{$sectionSlug}': " . $e->getMessage());
            return false;
        }
    }

    /**
     * Check if table exists in database
     */
    protected function tableExists($connection, $table)
    {
        try {
            if ($connection) {
                return DB::connection($connection)->getSchemaBuilder()->hasTable($table);
            }
            return DB::getSchemaBuilder()->hasTable($table);
        } catch (\Exception $e) {
            return false;
        }
    }
}
