<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class TranslationController extends Controller
{
    public function getTranslations($locale)
    {
        $translationPath = base_path("lang/{$locale}");
        $mainJsonFile = base_path("lang/{$locale}.json");

        // Check if locale directory or main JSON file exists
        if (!File::exists($translationPath) && !File::exists($mainJsonFile)) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'Locale not found',
            );
        }

        $translations = [];

        try {
            // 1. Load main JSON file first (Laravel's single-file format)
            if (File::exists($mainJsonFile)) {
                $content = json_decode(File::get($mainJsonFile), true);
                if (json_last_error() === JSON_ERROR_NONE && is_array($content)) {
                    $translations = $content; // These become top-level keys
                }
            }

            // 2. Load directory-based translations if directory exists
            if (File::exists($translationPath)) {
                // Load PHP files
                $phpFiles = File::glob($translationPath . '/*.php');
                foreach ($phpFiles as $file) {
                    $filename = pathinfo($file, PATHINFO_FILENAME);
                    $content = include $file;

                    if (is_array($content)) {
                        // If key already exists from JSON, merge arrays
                        if (isset($translations[$filename]) && is_array($translations[$filename])) {
                            $translations[$filename] = array_merge($translations[$filename], $content);
                        } else {
                            $translations[$filename] = $content;
                        }
                    }
                }

                // Load JSON files in directory
                $jsonFiles = File::glob($translationPath . '/*.json');
                foreach ($jsonFiles as $file) {
                    $filename = pathinfo($file, PATHINFO_FILENAME);
                    $content = json_decode(File::get($file), true);

                    if (json_last_error() === JSON_ERROR_NONE && is_array($content)) {
                        // If key already exists, merge arrays
                        if (isset($translations[$filename]) && is_array($translations[$filename])) {
                            $translations[$filename] = array_merge($translations[$filename], $content);
                        } else {
                            $translations[$filename] = $content;
                        }
                    }
                }
            }

            // 3. Ensure we have a 'translation' namespace for i18next default
            if (empty($translations['translation'])) {
                // If no 'translation' key exists, create one with all flat keys
                $flatKeys = [];
                foreach ($translations as $key => $value) {
                    if (is_string($value)) {
                        $flatKeys[$key] = $value;
                    }
                }

                if (!empty($flatKeys)) {
                    $translations['translation'] = $flatKeys;
                    // Remove flat keys from root level to avoid duplication
                    foreach ($flatKeys as $key => $value) {
                        unset($translations[$key]);
                    }
                }
            }
        } catch (\Exception $e) {
            Log::error("Error loading translations for locale {$locale}: " . $e->getMessage());

            return $this->sendResponse(
                null,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                'Error loading translations',
            );
        }

        return $this->sendResponse($translations);
    }
}
