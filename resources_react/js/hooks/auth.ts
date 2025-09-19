/**
 * This hook is used to manage user authentication.
 *
 *   - `reloadUserData`: Reloads the user data from the API.
 *   - `logout`: Logs out the user and redirects to the login page.
 */
export const useAuth = () => {
  const { request } = useApi()
  const { updateLang } = useHelper()
  const { isUserConnected, userData, setUserData, resetAuthData } = useAuthStore()

  const reloadUserData = async () => {
    if (isUserConnected()) {
      const task = await request({
        url: `/users/${userData?.id}`,
      })

      if (task.success && task.result.data) {
        setUserData(task.result.data)

        const updatedUserData = task.result.data
        if (updatedUserData?.preferences?.locale) {
          updateLang(updatedUserData.preferences.locale, false, false)
        }
      }
    }
  }

  const logout = async () => {
    const task = await request({
      url: '/auth/logout',
    })

    if (task.success) {
      resetAuthData()
      router.get('/login', {}, { replace: true })
    }
  }

  return {
    reloadUserData,
    logout,
  }
}
