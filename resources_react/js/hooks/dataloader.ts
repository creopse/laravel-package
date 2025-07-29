/**
 * Hook to initialize the dataloader.
 *
 * The dataloader is initialized when the component is mounted and will
 * load the tags, categories, and user data.
 *
 * is a function that will be called when the component is mounted.
 */
export const useDataloader = () => {
  const { reloadUserData } = useAuth()
  const { loadTags, loadCategories } = useNews()

  const initialize = useCallback(async () => {
    loadTags()
    loadCategories()
    reloadUserData()
  }, [loadTags, loadCategories, reloadUserData])

  // Auto-initialize on mount
  useEffect(() => {
    initialize()
  }, [initialize])

  return {
    initialize,
  }
}
