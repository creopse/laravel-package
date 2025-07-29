import type { NewsCategoryModel, NewsTagModel } from '@creopse/utils'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { storage } from '.'

interface CatalogState {
  categories: NewsCategoryModel[]
  tags: NewsTagModel[]
  mainCategories: () => NewsCategoryModel[]
  subCategories: (id: number) => NewsCategoryModel[]
  orderedCategories: () => NewsCategoryModel[]
  tagsByArticlesCount: () => NewsTagModel[]
  setCategories: (data: NewsCategoryModel[]) => void
  setTags: (data: NewsTagModel[]) => void
}

export const useNewsStore = create<CatalogState>()(
  persist(
    (set, get) => ({
      // State
      categories: [],
      tags: [],

      // Getters
      mainCategories: () => {
        const { categories } = get()
        return categories.filter((category) => category.parentId === null)
      },

      subCategories: (id: number) => {
        const { categories } = get()
        return categories.filter((category) => category.parentId === id)
      },

      orderedCategories: () => {
        const { categories } = get()
        const orderedCategories: NewsCategoryModel[] = []
        const sortedCategories = [...categories].sort((a, b) => a.name.localeCompare(b.name))

        for (const category of sortedCategories) {
          if (!category.parentId) {
            orderedCategories.push(category)
            const childrenCategories = sortedCategories.filter((c) => c.parentId === category.id).sort((a, b) => a.name.localeCompare(b.name))
            orderedCategories.push(...childrenCategories)
          }
        }

        return orderedCategories
      },

      tagsByArticlesCount: () => {
        const { tags } = get()
        return [...tags].sort((a, b) => {
          if (a.articlesCount == null || b.articlesCount == null) return 0
          return (b.articlesCount ?? 0) - (a.articlesCount ?? 0)
        })
      },

      // Actions
      setCategories: (categories) => set({ categories }),
      setTags: (tags) => set({ tags }),
    }),
    {
      name: 'news',
      storage: createJSONStorage(() => storage),
    }
  )
)
