import type { SharedProps } from '@/utils/types'

import type { ContentModelModel } from '@/models/content-model'
import type { ContentModelItemModel } from '@/models/content-model-item'
import type { MenuModel } from '@/models/menu'
import type { MenuItemModel } from '@/models/menu-item'
import type { MenuItemGroupModel } from '@/models/menu-item-group'
import type { NewsArticleModel } from '@/models/news-article'
import type { NewsCategoryModel } from '@/models/news-category'
import type { NewsTagModel } from '@/models/news-tag'
import type { PageModel } from '@/models/page'
import type { SectionModel } from '@/models/section'
import type { ErrorBag, Errors, PageProps } from '@inertiajs/core'

/**
 * A composable that provides a set of functions and properties for
 * easily accessing and manipulating page data, content models, menus,
 * menu items, and more.
 *
 * @returns {Object} An object containing the following properties:
 *  - page: The page props
 *  - pageData: The page data
 *  - newsArticle: The news article data
 *  - newsCategory: The news category data
 *  - newsTag: The news tag data
 *  - contentModelItem: The content model item data
 *  - getProps: A function that returns the page props
 *  - getMenu: A function that retrieves a menu by its name
 *  - getMenuByLocation: A function that retrieves a menu by its location name
 *  - getMenuItems: A function that retrieves and sorts menu items by their position for a specified menu
 *  - getMenuItemById: A function that retrieves a menu item by its ID
 *  - getMenuItemsByLocation: A function that retrieves and sorts menu items by their position for a specified menu location
 *  - getMenuGroups: A function that retrieves menu item groups from a specified menu, filtered by menu item group ID
 *  - getMenuItemsByGroup: A function that retrieves menu items from a specified menu, filtered by group ID
 *  - getMenuGroupedItems: A function that retrieves menu items from a menu by its name, grouped by their group
 *  - getMenuUngroupedItems: A function that retrieves menu items from a menu by its name, filtered to only return items that do not belong to a group
 *  - getSectionData: A function that retrieves the data of a section, given its slug
 *  - getSectionsInOrder: A function that returns the ordered list of sections that should be displayed on the page
 *  - getFinalPageSections: A function that returns the final ordered list of sections that should be displayed on the page, taking into account the `sectionsDisabled` property of the page data
 *  - getComponents: A function that loads and returns a map of Vue components from the specified directory
 *  - getContentModel: A function that retrieves a content model by its name
 *  - getContentModelItems: A function that retrieves content model items
 *  - getPaginatedContentModelItems: A function that retrieves paginated content model items
 */
export const useContent = () => {
  const { request } = useApi()

  const page = usePage<SharedProps>()

  const getProps = (): PageProps &
    SharedProps & {
      errors: Errors & ErrorBag
    } => page.props

  const pageData: PageModel | null = page.props.pageData

  const newsArticle: NewsArticleModel | undefined | null = page.props.article

  const newsCategory: NewsCategoryModel | undefined | null = page.props.category

  const newsTag: NewsTagModel | undefined | null = page.props.tag

  const contentModelItem: ContentModelItemModel | undefined | null =
    page.props.contentModelItem

  /**
   * Retrieve the data of a section, given its slug.
   * It returns `null` if the section is not found.
   *
   * @param {string} slug - The slug of the section.
   * @returns {object | any | null} - The data of the section, or `null`.
   */
  const getSectionData = (slug: string): object | any | null => {
    return (
      page.props.pageData?.sections?.find((section) => section.slug === slug)
        ?.dataSourcePageSectionsData || null
    )
  }

  const getSectionRootData = (slug: string) => getSectionData(slug)?.index

  /**
   * Returns the ordered list of sections that should be displayed on the page,
   * based on the `sectionsOrder` property of the page data.
   *
   * If `sectionsOrder` is not defined, returns the original list of sections.
   *
   * @returns {SectionModel[]} The ordered list of sections.
   */
  const getSectionsInOrder = (): SectionModel[] => {
    const sections = pageData?.sections
    const sectionsOrder = pageData?.sectionsOrder

    const sectionsOrdered: SectionModel[] = []

    if (Array.isArray(sections) && Array.isArray(sectionsOrder)) {
      for (const section of sectionsOrder) {
        if (section) {
          const item = sections.find((value) => value.slug === section)
          if (item) {
            sectionsOrdered.push(item)
          }
        }
      }
    }

    return sectionsOrdered.length ? sectionsOrdered : sections || []
  }

  /**
   * Returns the final ordered list of sections that should be displayed on the page,
   * taking into account the `sectionsDisabled` property of the page data.
   *
   * @returns {SectionModel[]} The final ordered list of sections.
   */
  const getFinalPageSections = (): SectionModel[] => {
    const sections = getSectionsInOrder()
    const sectionsDisabled = pageData?.sectionsDisabled

    return sections.filter((section) => {
      return !sectionsDisabled?.includes(section.slug)
    })
  }

  /**
   * Loads and returns a map of Vue components from the specified directory.
   *
   * This function uses Vite's `import.meta.glob` to eagerly import all Vue components
   * located in the '../components/sections/' directory and its subdirectories.
   * The components are then mapped by their file names (without extensions) and returned
   * as an object where the keys are component names and the values are the component definitions.
   *
   * @returns {Record<string, any>} An object containing component names as keys and their respective
   * component definitions as values.
   */
  const getComponents = (): Record<string, any> => {
    const files = import.meta.glob('../components/sections/**/*.vue', {
      eager: true,
    })

    const components = {}

    for (const [key, value] of Object.entries(files)) {
      var componentName = key.replace(/^\.\/(.*)\.\w+$/, '$1')

      const parts = componentName.split('/')

      const name = parts[parts.length - 1]?.split('.')[0]
      components[name] = (value as any).default
    }

    return components
  }

  /**
   * Retrieves a content model by its name.
   *
   * Searches through the list of content models within the page props and
   * returns the content model that matches the specified name.
   *
   * @param {string} name - The name of the content model to retrieve.
   * @returns {ContentModelModel | undefined} The content model with the specified name, or undefined if not found.
   */
  const getContentModel = (name: string): ContentModelModel | undefined => {
    return page.props?.contentModels?.find(
      (contentModel) => contentModel.name === name
    )
  }

  /**
   * Formats the data of a content model item by restructuring its contentModelData.
   * Extracts the 'index' property from contentModelData and merges the remaining
   * properties with the 'index' data, assigning the result to the 'data' property
   * of the item.
   *
   * @param {ContentModelItemModel} item - The content model item to be formatted.
   * @returns {Object} A new object representing the formatted content model item.
   */
  const formatContentModelItemData = (item: ContentModelItemModel): object => {
    const { index: _, ...rest } = item.contentModelData
    return {
      ...item,
      data: {
        ...item.contentModelData?.index,
        ...rest,
      },
    }
  }

  /**
   * Gets content model items.
   * @param {string} name The name of the content model.
   * @returns {Promise<ContentModelItemModel[]>}
   */
  const getContentModelItems = async (
    name: string
  ): Promise<ContentModelItemModel[]> => {
    const task = await request({
      url: `content-model/items?contentModelName=${name}`,
    })

    if (task.success && task.result) {
      return (task.result.data || []).map((item: ContentModelItemModel) =>
        formatContentModelItemData(item)
      )
    }

    return []
  }

  /**
   * Gets paginated content model items.
   * @param {string} name The name of the content model.
   * @param {number} pageSize The number of items to return per page.
   * @returns {Promise<{ items: ContentModelItemModel[]; total: number; currentPage: number }>}
   */
  const getPaginatedContentModelItems = async (
    name: string,
    pageSize: number
  ): Promise<{
    items: ContentModelItemModel[]
    total: number
    currentPage: number
  }> => {
    const task = await request({
      url: `content-model/items?pageSize=${pageSize}&contentModelName=${name}`,
    })

    if (task.success && task.result) {
      const items = (task.result.data?.items || []).map(
        (item: ContentModelItemModel) => formatContentModelItemData(item)
      )

      const total = task.result.data?.meta?.total || 0
      const currentPage = task.result.data?.meta?.currentPage || 1

      return {
        items,
        total,
        currentPage,
      }
    }

    return {
      items: [],
      total: 0,
      currentPage: 1,
    }
  }

  /**
   * Retrieves a menu by its name.
   *
   * @param {string} name - The name of the menu to retrieve.
   * @returns {MenuModel | undefined} The menu found by name, or undefined if no menu is found.
   */
  const getMenu = (name: string): MenuModel | undefined => {
    return page.props?.menus?.find((menu) => menu.name === name)
  }

  /**
   * Retrieves a menu by its location name.
   *
   * @param {string} name - The name of the menu location to retrieve the menu from.
   * @returns {MenuModel | undefined} The menu found by location, or undefined if no menu is found.
   */
  const getMenuByLocation = (name: string): MenuModel | undefined => {
    return page.props?.menus?.find((menu) => menu.location?.name === name)
  }

  /**
   * Retrieves and sorts menu items by their position for a specified menu.
   *
   * @param {string} name - The name of the menu to retrieve items from.
   * @returns {MenuItemModel[] | undefined} An array of menu items sorted by their position, or undefined if no items are found.
   */
  const getMenuItems = (name: string): MenuItemModel[] | undefined => {
    return getMenu(name)?.items?.sort((a, b) => a.position - b.position)
  }

  /**
   * Retrieves a menu item by its ID.
   *
   * Searches through all menu items across all menus in the page properties
   * and returns the menu item that matches the specified ID.
   *
   * @param {number} id - The ID of the menu item to retrieve.
   * @returns {MenuItemModel | undefined} The menu item with the specified ID, or undefined if not found.
   */
  const getMenuItemById = (id: number): MenuItemModel | undefined => {
    const menuItems: MenuItemModel[] = []
    const menus = page.props?.menus || []
    menus.forEach((menu) => {
      if (Array.isArray(menu.items)) menuItems.push(...menu.items)
    })

    return menuItems.find((item) => item.id === id)
  }

  /**
   * Retrieves and sorts menu items by their position for a specified menu location.
   *
   * @param {string} name - The name of the menu location to retrieve items from.
   * @returns {MenuItemModel[] | undefined} An array of menu items sorted by their position, or undefined if no items are found.
   */
  const getMenuItemsByLocation = (
    name: string
  ): MenuItemModel[] | undefined => {
    return getMenuByLocation(name)?.items?.sort(
      (a, b) => a.position - b.position
    )
  }

  /**
   * Retrieves menu item groups from a specified menu, filtered by menu item group ID.
   * If `byLocation` is true, items are retrieved based on menu location.
   *
   * @param {string} name - The name of the menu to retrieve groups from.
   * @param {boolean} [byLocation=false] - Whether to retrieve items by location instead of menu name.
   * @returns {MenuItemGroupModel[]} An array of menu item groups that belong to the specified menu.
   */
  const getMenuGroups = (
    name: string,
    byLocation = false
  ): MenuItemGroupModel[] => {
    const groups: MenuItemGroupModel[] = []
    const items = byLocation ? getMenuItemsByLocation(name) : getMenuItems(name)

    if (items) {
      for (const item of items) {
        const groupAlreadyExists = groups.find(
          (group) => group.id === item.menuItemGroupId
        )
        if (!groupAlreadyExists) {
          const group = page.props?.menuItemGroups?.find(
            (group) => group.id === item.menuItemGroupId
          )
          if (group) groups.push(group)
        }
      }
    }

    return groups
  }

  /**
   * Retrieves menu items from a specified menu, filtered by group ID.
   * If `byLocation` is true, items are retrieved based on menu location.
   *
   * @param {string} name - The name of the menu to retrieve items from.
   * @param {number} groupId - The ID of the group to filter items by.
   * @param {boolean} [byLocation=false] - Whether to retrieve items by location instead of menu name.
   * @returns {MenuItemModel[] | undefined} An array of menu items that belong to the specified group.
   */
  const getMenuItemsByGroup = (
    name: string,
    groupId: number,
    byLocation = false
  ): MenuItemModel[] | undefined => {
    const items = byLocation ? getMenuItemsByLocation(name) : getMenuItems(name)
    return items?.filter((item) => item.menuItemGroupId === groupId)
  }

  /**
   * Retrieves menu items from a menu by its name, grouped by their group. If
   * `byLocation` is set to true, the menu items are retrieved by menu location
   * instead of menu name.
   *
   * @param {string} name - The name of the menu to retrieve items from.
   * @param {boolean} [byLocation=false] - Whether to retrieve items by location
   *  or not.
   *
   * @returns {({ group: MenuItemGroupModel; items: MenuItemModel[] | undefined }[])} An array of objects, where each object
   *  contains a group and its corresponding menu items, or null if no items were
   *  found.
   */
  const getMenuGroupedItems = (
    name: string,
    byLocation = false
  ): { group: MenuItemGroupModel; items: MenuItemModel[] | undefined }[] => {
    const groups = getMenuGroups(name, byLocation)
    return groups.map((group) => ({
      group,
      items: getMenuItemsByGroup(name, group.id || 0, byLocation),
    }))
  }

  /**
   * Retrieves menu items from a menu by its name, grouped or not, and filters
   * them to only return items that do not belong to a group.
   *
   * @param {string} name - The name of the menu to retrieve items from.
   * @param {boolean} [byLocation=false] - Whether to retrieve items by location
   *  or not.
   *
   * @returns {(MenuItemModel[] | undefined)} An array of menu items that do not
   *  belong to a group, or null if no items were found.
   */
  const getMenuUngroupedItems = (
    name: string,
    byLocation = false
  ): MenuItemModel[] | undefined => {
    const items = byLocation ? getMenuItemsByLocation(name) : getMenuItems(name)
    return items?.filter((item) => !item.menuItemGroupId)
  }

  return {
    page,
    pageData,
    newsArticle,
    newsCategory,
    newsTag,
    contentModelItem,
    getProps,
    getMenu,
    getMenuByLocation,
    getMenuItems,
    getMenuItemById,
    getMenuItemsByLocation,
    getMenuGroups,
    getMenuItemsByGroup,
    getMenuGroupedItems,
    getMenuUngroupedItems,
    getSectionData,
    getSectionsInOrder,
    getFinalPageSections,
    getSectionRootData,
    getComponents,
    getContentModel,
    getContentModelItems,
    getPaginatedContentModelItems,
  }
}
