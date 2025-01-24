<?php

namespace Creopse\Creopse\Observers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DataChangeObserver
{
    public function handleChange(string $tableName)
    {
        DB::table('data_changes')->updateOrInsert(
            ['table_name' => $tableName],
            ['change_id' => Str::uuid(), 'updated_at' => now()]
        );

        Cache::forget("data_change_{$tableName}");
    }

    public function created($model)
    {
        $this->handleChange($model->getTable());
    }

    public function updated($model)
    {
        $this->handleChange($model->getTable());
    }

    public function deleted($model)
    {
        $this->handleChange($model->getTable());
    }
}
