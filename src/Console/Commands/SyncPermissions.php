<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Enums\AccessGuard;
use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\PluginManager;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

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
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $created = 0;
        $updated = 0;

        // Sync all permissions from Enum
        foreach (PermissionList::cases() as $permEnum) {
            $permission = Permission::firstOrNew([
                'name' => $permEnum->value,
                'guard_name' => AccessGuard::ADMIN->value,
            ]);

            $isNew = ! $permission->exists;

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

        [$pluginPermissions, $orphaned] = $this->extraPermissions();

        $this->newLine();
        $this->info('  Summary:');
        $this->line("   • Permissions created: <fg=green>{$created}</>");
        $this->line("   • Permissions updated: <fg=yellow>{$updated}</>");

        if ($pluginPermissions->isNotEmpty()) {
            $this->line("   • Plugin permissions (kept): <fg=cyan>{$pluginPermissions->count()}</>");
        }

        if ($orphaned->isNotEmpty()) {
            $this->newLine();
            $this->warn('  Orphaned permissions detected (not defined by the core or a loaded plugin):');
            foreach ($orphaned as $orphan) {
                $this->line("   • {$orphan}");
            }

            // Option to clean
            if ($this->option('clean')) {
                $this->cleanOrphanedPermissions($orphaned);
            } else {
                $this->line("\n Use <fg=cyan>--clean</> to delete the ones no role or user holds.");
            }
        }

        // Reset cache again
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

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
        $dbPermissions = Permission::where('guard_name', AccessGuard::ADMIN->value)->get()->keyBy('name');

        $missing = [];
        $present = [];
        $outdated = [];

        foreach ($definedPermissions as $permEnum) {
            if (! $dbPermissions->has($permEnum->value)) {
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

        [$pluginPermissions, $orphaned] = $this->extraPermissions();

        // Display
        $this->info(' Permissions status:');
        $this->newLine();

        if (count($present) > 0) {
            $this->line('<fg=green>  Up to date: '.count($present).'</>');
        }

        if (count($missing) > 0) {
            $this->line('<fg=red>  Missing: '.count($missing).'</>');
            foreach ($missing as $perm) {
                $this->line("   • {$perm}");
            }
        }

        if (count($outdated) > 0) {
            $this->line('<fg=yellow>  Outdated metadata: '.count($outdated).'</>');
            foreach ($outdated as $perm) {
                $this->line("   • {$perm}");
            }
        }

        if ($pluginPermissions->isNotEmpty()) {
            $this->line('<fg=cyan>  Plugin permissions: '.$pluginPermissions->count().'</>');
        }

        if ($orphaned->isNotEmpty()) {
            $this->newLine();
            $this->line('<fg=yellow>  Orphaned: '.$orphaned->count().'</>');
            foreach ($orphaned as $perm) {
                $this->line("   • {$perm}");
            }
        }

        $this->newLine();
        $this->line(' Run <fg=cyan>php artisan permissions:sync</> to synchronize.');

        return Command::SUCCESS;
    }

    /**
     * Split the admin-guard permissions the core doesn't define into those
     * declared by a loaded plugin and the remaining orphans.
     *
     * @return array{0: Collection<int, string>, 1: Collection<int, string>}
     */
    protected function extraPermissions(): array
    {
        $extra = Permission::where('guard_name', AccessGuard::ADMIN->value)
            ->whereNotIn('name', collect(PermissionList::cases())->pluck('value'))
            ->pluck('name');

        $pluginNames = app(PluginManager::class)->getRegisteredPermissions();

        [$plugin, $orphaned] = $extra->partition(fn (string $name) => in_array($name, $pluginNames, true));

        return [$plugin->values(), $orphaned->values()];
    }

    /**
     * Delete only the orphans no role or user holds. An orphan can still be a
     * permission created from the admin panel, or one declared by a plugin
     * that is disabled (or not booted, e.g. with cached routes): deleting it
     * while granted would silently strip those grants through the pivot
     * tables' cascade.
     *
     * @param  Collection<int, string>  $orphaned
     */
    protected function cleanOrphanedPermissions(Collection $orphaned): void
    {
        $tables = config('permission.table_names');
        $pivotKey = config('permission.column_names.permission_pivot_key') ?? 'permission_id';

        $deletable = Permission::where('guard_name', AccessGuard::ADMIN->value)
            ->whereIn('name', $orphaned)
            ->whereNotIn('id', DB::table($tables['role_has_permissions'])->select($pivotKey))
            ->whereNotIn('id', DB::table($tables['model_has_permissions'])->select($pivotKey))
            ->pluck('name');

        $kept = $orphaned->diff($deletable);

        if ($kept->isNotEmpty()) {
            $this->newLine();
            $this->warn('  Kept because still granted to a role or user:');
            foreach ($kept as $name) {
                $this->line("   • {$name}");
            }
        }

        if ($deletable->isEmpty()) {
            return;
        }

        if ($this->confirm("Do you want to delete the {$deletable->count()} unassigned orphaned permission(s)?", false)) {
            Permission::where('guard_name', AccessGuard::ADMIN->value)->whereIn('name', $deletable)->delete();
            $this->info('Orphaned permissions deleted.');
        }
    }
}
