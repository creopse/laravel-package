/**
 * Hook to initialize the dataloader.
 *
 * Exposes `initializeData` to load the tags and categories; the caller
 * decides when to trigger it (see Container.tsx). Does not auto-run on
 * mount itself, to match the Vue shell's behavior and avoid double-loading
 * when a consumer also triggers it in its own effect.
 */
export const useDataloader = () => {
  const { loadTags, loadCategories } = useNews()
  const { setTags, setCategories } = useNewsStore()

  const initializeData = useCallback(async () => {
    const [tags, categories] = await Promise.all([loadTags(), loadCategories()])

    setTags(tags)
    setCategories(categories)
  }, [loadTags, loadCategories, setTags, setCategories])

  return {
    initializeData,
  }
}
