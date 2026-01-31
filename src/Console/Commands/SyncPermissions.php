<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Enums\AccessGuard;
use Creopse\Creopse\Enums\PermissionList;
use Illuminate\Console\Command;
use Spatie\Permission\Models\Permission;

class SyncPermissions extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'permissions:sync
                            {--check : Check without modifying}
                            {--clean : Delete orphaned permissions}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync permissions defined in Enum with database';

    /**
     * Execute the console command
     */
    public function handle(): int
    {
        $this->info(' Syncing permissions...');
        $this->newLine();

        // Check-only mode
        if ($this->option('check')) {
            return $this->checkPermissions();
        }

        // Reset cache
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $created = 0;
        $updated = 0;

        // Sync all permissions from Enum
        foreach (PermissionList::cases() as $permEnum) {
            $permission = Permission::firstOrNew([
                'name' => $permEnum->value,
                'guard_name' => AccessGuard::WEB->value,
            ]);

            $isNew = !$permission->exists;

            $permission->fill([
                'display_name' => $permEnum->label(),
                'description' => $permEnum->description(),
            ]);

            $permission->save();

            if ($isNew) {
                $this->line("<fg=green>Created:</> {$permEnum->value}");
                $created++;
            } else {
                $this->line("<fg=yellow>Updated:</> {$permEnum->value}");
                $updated++;
            }
        }

        // Detect orphaned permissions
        $definedPermissions = collect(PermissionList::cases())->pluck('value');
        $dbPermissions = Permission::where('guard_name', AccessGuard::WEB->value)->pluck('name');
        $orphaned = $dbPermissions->diff($definedPermissions);

        $this->newLine();
        $this->info("  Summary:");
        $this->line("   • Permissions created: <fg=green>{$created}</>");
        $this->line("   • Permissions updated: <fg=yellow>{$updated}</>");

        if ($orphaned->isNotEmpty()) {
            $this->newLine();
            $this->warn("  Orphaned permissions detected (in DB but not in code):");
            foreach ($orphaned as $orphan) {
                $this->line("   • {$orphan}");
            }

            // Option to clean
            if ($this->option('clean')) {
                if ($this->confirm('Do you want to delete these orphaned permissions?', false)) {
                    Permission::whereIn('name', $orphaned)->delete();
                    $this->info("Orphaned permissions deleted.");
                }
            } else {
                $this->line("\n Use <fg=cyan>--clean</> to delete them.");
            }
        }

        // Reset cache again
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $this->newLine();
        $this->info('Synchronization complete!');

        return Command::SUCCESS;
    }

    /**
     * Check permissions status without modifying
     */
    protected function checkPermissions(): int
    {
        $definedPermissions = collect(PermissionList::cases());
        $dbPermissions = Permission::where('guard_name', AccessGuard::WEB->value)->get()->keyBy('name');

        $missing = [];
        $present = [];
        $outdated = [];

        foreach ($definedPermissions as $permEnum) {
            if (!$dbPermissions->has($permEnum->value)) {
                $missing[] = $permEnum->value;
            } else {
                $present[] = $permEnum->value;

                $dbPerm = $dbPermissions->get($permEnum->value);
                if (
                    $dbPerm->display_name !== $permEnum->label() ||
                    $dbPerm->description !== $permEnum->description()
                ) {
                    $outdated[] = $permEnum->value;
                }
            }
        }

        $orphaned = $dbPermissions->keys()->diff($definedPermissions->pluck('value'));

        // Display
        $this->info(' Permissions status:');
        $this->newLine();

        if (count($present) > 0) {
            $this->line("<fg=green>  Up to date: " . count($present) . "</>");
        }

        if (count($missing) > 0) {
            $this->line("<fg=red>  Missing: " . count($missing) . "</>");
            foreach ($missing as $perm) {
                $this->line("   • {$perm}");
            }
        }

        if (count($outdated) > 0) {
            $this->line("<fg=yellow>  Outdated metadata: " . count($outdated) . "</>");
            foreach ($outdated as $perm) {
                $this->line("   • {$perm}");
            }
        }

        if ($orphaned->isNotEmpty()) {
            $this->newLine();
            $this->line("<fg=yellow>  Orphaned: " . $orphaned->count() . "</>");
            foreach ($orphaned as $perm) {
                $this->line("   • {$perm}");
            }
        }

        $this->newLine();
        $this->line(" Run <fg=cyan>php artisan permissions:sync</> to synchronize.");

        return Command::SUCCESS;
    }
}
