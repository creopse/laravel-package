<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Enums\ContentType;
use Creopse\Creopse\Enums\MenuItemTargetType;
use Creopse\Creopse\Models\Menu;
use Creopse\Creopse\Models\MenuItem;
use Creopse\Creopse\Models\MenuItemGroup;
use Creopse\Creopse\Models\MenuItemType;
use Creopse\Creopse\Models\Page;

class MakeMenuItem extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-menu-item
        {menu : The name of the menu this item belongs to}
        {--title=* : Locale:value pair for the title, e.g. --title="en:Home". Repeatable, optional.}
        {--description=* : Locale:value pair for the description. Repeatable, optional.}
        {--path= : Internal path for the item}
        {--url= : External URL for the item}
        {--controller= : Controller reference for the item}
        {--parent= : ID of the parent menu item}
        {--position=0 : Display position within the menu}
        {--target-type= : external-link, page-link, or content-link}
        {--is-active=true : Whether the item is active (true/false)}
        {--is-visible=true : Whether the item is visible (true/false)}
        {--color= : Color associated with the item}
        {--icon= : Icon reference for the item}
        {--image= : Path or URL to the item image}
        {--page= : Name of the page this item links to}
        {--section-key= : Section key reference within a page}
        {--menu-item-group= : Name of the menu item group}
        {--menu-item-type= : Name of the menu item type}
        {--content-type= : news-tag, news-category, news-article, or content-model}
        {--content-id= : Name of the target content (numeric ID if --content-type=content-model)}
        {--alias=creopse:add-menu-item}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:add-menu-item'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a menu item for a given menu (by name).';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $menuName = $this->argument('menu');

        $menu = Menu::where('name', $menuName)->first();

        if (! $menu) {
            $this->error("Menu '{$menuName}' not found.");

            return self::FAILURE;
        }

        $isActive = $this->resolveBooleanOption('is-active');
        if ($isActive === null) {
            return self::FAILURE;
        }

        $isVisible = $this->resolveBooleanOption('is-visible');
        if ($isVisible === null) {
            return self::FAILURE;
        }

        $targetType = null;
        if ($this->option('target-type') !== null) {
            $targetType = $this->resolveEnum($this->option('target-type'), MenuItemTargetType::class, '--target-type');
            if ($targetType === null) {
                return self::FAILURE;
            }
        }

        $parentId = null;
        if ($this->option('parent') !== null) {
            $parentId = (int) $this->option('parent');

            if (! MenuItem::where('id', $parentId)->exists()) {
                $this->error("Parent menu item #{$parentId} not found.");

                return self::FAILURE;
            }
        }

        $pageId = null;
        if ($this->option('page') !== null) {
            $page = Page::where('name', $this->option('page'))->first();

            if (! $page) {
                $this->error("Page '{$this->option('page')}' not found.");

                return self::FAILURE;
            }

            $pageId = $page->id;
        }

        $menuItemGroupId = null;
        if ($this->option('menu-item-group') !== null) {
            $group = MenuItemGroup::where('name', $this->option('menu-item-group'))->first();

            if (! $group) {
                $this->error("Menu item group '{$this->option('menu-item-group')}' not found.");

                return self::FAILURE;
            }

            $menuItemGroupId = $group->id;
        }

        $menuItemTypeId = null;
        if ($this->option('menu-item-type') !== null) {
            $type = MenuItemType::where('name', $this->option('menu-item-type'))->first();

            if (! $type) {
                $this->error("Menu item type '{$this->option('menu-item-type')}' not found.");

                return self::FAILURE;
            }

            $menuItemTypeId = $type->id;
        }

        $contentType = null;
        $contentId = null;
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
        }

        $menuItem = MenuItem::create([
            'title' => $this->mergeLocalizedOption([], 'title'),
            'description' => $this->mergeLocalizedOption([], 'description'),
            'path' => $this->option('path'),
            'url' => $this->option('url'),
            'controller' => $this->option('controller'),
            'parent_id' => $parentId,
            'position' => (int) $this->option('position'),
            'target_type' => $targetType?->value,
            'is_active' => $isActive,
            'is_visible' => $isVisible,
            'color' => $this->option('color'),
            'icon' => $this->option('icon'),
            'image' => $this->option('image'),
            'menu_id' => $menu->id,
            'page_id' => $pageId,
            'section_key' => $this->option('section-key'),
            'menu_item_group_id' => $menuItemGroupId,
            'menu_item_type_id' => $menuItemTypeId,
            'content_type' => $contentType?->value,
            'content_id' => $contentId,
        ]);

        $this->info("[{$menuName}] Menu item created successfully (id: {$menuItem->id}).");

        return self::SUCCESS;
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
