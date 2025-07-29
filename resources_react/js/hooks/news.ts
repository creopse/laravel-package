import type { NewsCategoryModel, NewsTagModel } from '@creopse/utils'

/**
 * A hook that provides functions to load news categories and tags.
 *
 * @returns An object containing the `loadCategories` and `loadTags` functions.
 *
 * @remarks
 * The `loadCategories` function fetches news categories from the API and updates the store with active categories.
 * The `loadTags` function fetches news tags from the API and updates the store with active tags.
 */
export const useNews = () => {
  const { request } = useApi()
  const { setCategories, setTags } = useNewsStore()

  const loadCategories = async () => {
    const task = await request({
      url: '/news-categories',
    })

    if (task.success && task.result.data) {
      setCategories(task.result.data.filter((p: NewsCategoryModel) => p.isActive))
    }
  }

  const loadTags = async () => {
    const task = await request({
      url: '/news-tags',
    })

    if (task.success && task.result.data) {
      setTags(task.result.data.filter((p: NewsTagModel) => p.isActive))
    }
  }

  return {
    loadCategories,
    loadTags,
  }
}
