/**
 * Hook to initialize the dataloader.
 *
 * The dataloader is initialized when the component is mounted and will
 * load the tags, categories, and user data.
 *
 * is a function that will be called when the component is mounted.
 */
export const useDataloader = () => {
  const { loadTags, loadCategories } = useNews()
  const { setTags, setCategories } = useNewsStore()

  const initializeData = useCallback(async () => {
    const [tags, categories] = await Promise.all([loadTags(), loadCategories()])

    setTags(tags)
    setCategories(categories)
  }, [loadTags, loadCategories, setTags, setCategories])

  // Auto-initialize on mount
  useEffect(() => {
    initializeData()
  }, [initializeData])

  return {
    initializeData,
  }
}
