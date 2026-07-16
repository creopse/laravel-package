<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Enums\ContentType;
use Creopse\Creopse\Enums\MenuItemTargetType;
use Creopse\Creopse\Models\Menu;
use Creopse\Creopse\Models\MenuItem;
use Creopse\Creopse\Models\MenuItemGroup;
use Creopse\Creopse\Models\MenuItemType;
use Creopse\Creopse\Models\Page;

class UpdateMenuItem extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:update-menu-item
        {id : The ID of the menu item to update}
        {--menu= : Move the item to a different menu, by name}
        {--title=* : Locale:value pair for the title. Repeatable.}
        {--description=* : Locale:value pair for the description. Repeatable.}
        {--path= : Internal path for the item}
        {--url= : External URL for the item}
        {--controller= : Controller reference for the item}
        {--parent= : ID of the parent menu item. Use "none" to unset.}
        {--position= : Display position within the menu}
        {--target-type= : external-link, page-link, or content-link}
        {--is-active= : Whether the item is active (true/false)}
        {--is-visible= : Whether the item is visible (true/false)}
        {--color= : Color associated with the item}
        {--icon= : Icon reference for the item}
        {--image= : Path or URL to the item image}
        {--page= : Name of the page this item links to. Use "none" to unset.}
        {--section-key= : Section key reference within a page}
        {--menu-item-group= : Name of the menu item group. Use "none" to unset.}
        {--menu-item-type= : Name of the menu item type. Use "none" to unset.}
        {--content-type= : news-tag, news-category, news-article, or content-model}
        {--content-id= : Name of the target content (numeric ID if --content-type=content-model)}
        {--alias=creopse:edit-menu-item}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:edit-menu-item'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update a menu item.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $id = $this->argument('id');

        $menuItem = MenuItem::find($id);

        if (! $menuItem) {
            $this->error("Menu item #{$id} not found.");

            return self::FAILURE;
        }

        $payload = [];

        if ($this->option('menu') !== null) {
            $menu = Menu::where('name', $this->option('menu'))->first();

            if (! $menu) {
                $this->error("Menu '{$this->option('menu')}' not found.");

                return self::FAILURE;
            }

            $payload['menu_id'] = $menu->id;
        }

        $currentTitle = json_decode($menuItem->title ?? '{}', true) ?: [];
        $title = $this->mergeLocalizedOption($currentTitle, 'title');
        if ($title !== null) {
            $payload['title'] = $title;
        }

        $currentDescription = json_decode($menuItem->description ?? '{}', true) ?: [];
        $description = $this->mergeLocalizedOption($currentDescription, 'description');
        if ($description !== null) {
            $payload['description'] = $description;
        }

        foreach (['path', 'url', 'controller', 'color', 'icon', 'image', 'section-key'] as $option) {
            if ($this->option($option) !== null) {
                $payload[str_replace('-', '_', $option)] = $this->option($option);
            }
        }

        if ($this->option('position') !== null) {
            $payload['position'] = (int) $this->option('position');
        }

        if ($this->option('target-type') !== null) {
            $targetType = $this->resolveEnum($this->option('target-type'), MenuItemTargetType::class, '--target-type');
            if ($targetType === null) {
                return self::FAILURE;
            }
            $payload['target_type'] = $targetType->value;
        }

        if ($this->option('is-active') !== null) {
            $isActive = $this->resolveBooleanOption('is-active');
            if ($isActive === null) {
                return self::FAILURE;
            }
            $payload['is_active'] = $isActive;
        }

        if ($this->option('is-visible') !== null) {
            $isVisible = $this->resolveBooleanOption('is-visible');
            if ($isVisible === null) {
                return self::FAILURE;
            }
            $payload['is_visible'] = $isVisible;
        }

        if ($this->option('parent') !== null) {
            $payload['parent_id'] = $this->resolveNullableId($this->option('parent'), MenuItem::class, 'Parent menu item');
            if ($payload['parent_id'] === false) {
                return self::FAILURE;
            }
        }

        if ($this->option('page') !== null) {
            $rawPage = $this->option('page');

            if (strtolower($rawPage) === 'none') {
                $payload['page_id'] = null;
            } else {
                $page = Page::where('name', $rawPage)->first();

                if (! $page) {
                    $this->error("Page '{$rawPage}' not found.");

                    return self::FAILURE;
                }

                $payload['page_id'] = $page->id;
            }
        }

        if ($this->option('menu-item-group') !== null) {
            $raw = $this->option('menu-item-group');

            if (strtolower($raw) === 'none') {
                $payload['menu_item_group_id'] = null;
            } else {
                $group = MenuItemGroup::where('name', $raw)->first();

                if (! $group) {
                    $this->error("Menu item group '{$raw}' not found.");

                    return self::FAILURE;
                }

                $payload['menu_item_group_id'] = $group->id;
            }
        }

        if ($this->option('menu-item-type') !== null) {
            $raw = $this->option('menu-item-type');

            if (strtolower($raw) === 'none') {
                $payload['menu_item_type_id'] = null;
            } else {
                $type = MenuItemType::where('name', $raw)->first();

                if (! $type) {
                    $this->error("Menu item type '{$raw}' not found.");

                    return self::FAILURE;
                }

                $payload['menu_item_type_id'] = $type->id;
            }
        }

        if ($this->option('content-type') !== null) {
            $contentType = $this->resolveEnum($this->option('content-type'), ContentType::class, '--content-type');
            if ($contentType === null) {
                return self::FAILURE;
            }

            if ($this->option('content-id') === null) {
                $this->error('--content-id is required when --content-type is provided.');

                return self::FAILURE;
            }

            $contentId = $this->resolveContentId($contentType, $this->option('content-id'));
            if ($contentId === null) {
                return self::FAILURE;
            }

            $payload['content_type'] = $contentType->value;
            $payload['content_id'] = $contentId;
        }

        if (empty($payload)) {
            $this->warn('No attribute provided.');

            return self::FAILURE;
        }

        $menuItem->update($payload);

        foreach (array_keys($payload) as $attribute) {
            $this->info("[item #{$id}] '{$attribute}' updated successfully.");
        }

        return self::SUCCESS;
    }

    /**
     * Resolve an ID option that supports "none" to unset the relation.
     * Returns null for "none", the resolved int ID if valid, or false
     * (a sentinel, since null is a legitimate result) if invalid.
     */
    private function resolveNullableId(string $raw, string $modelClass, string $label): int|false|null
    {
        if (strtolower($raw) === 'none') {
            return null;
        }

        $id = (int) $raw;

        if (! $modelClass::where('id', $id)->exists()) {
            $this->error("{$label} #{$id} not found.");

            return false;
        }

        return $id;
    }

    /**
     * Resolve --content-id against the model class backing the given
     * content type. ContentModelItem has no unique identifier suitable
     * for CLI use, so it's addressed by raw numeric ID; other types
     * (News*) are resolved by slug.
     */
    private function resolveContentId(ContentType $contentType, string $rawValue): ?int
    {
        if ($contentType === ContentType::CONTENT_MODEL) {
            if (! ctype_digit($rawValue)) {
                $this->error('[--content-id] Must be a numeric ID when --content-type=content-model.');

                return null;
            }

            return (int) $rawValue;
        }

        $modelClass = $contentType->getModelClass();
        $record = $modelClass::where('slug', $rawValue)->first();

        if (! $record) {
            $this->error("[--content-id] No {$contentType->value} found with slug '{$rawValue}'.");

            return null;
        }

        return $record->id;
    }
}
