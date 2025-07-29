import type { UserModel } from '@creopse/utils'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { storage } from '.'

interface AuthState {
  userData: UserModel | null
  rememberMe: boolean
  accessToken: string | null
  accessTokenDate: number | null
  isUserConnected: () => boolean
  getUserData: () => UserModel | null
  resetAuthData: () => void
  setUserData: (data: UserModel) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // State
      userData: null,
      rememberMe: false,
      accessToken: null,
      accessTokenDate: null,

      // Getters
      isUserConnected: () => {
        const state = get()
        return state.accessToken !== null && state.userData !== null
      },
      getUserData: () => {
        const state = get()
        return state.userData || null
      },

      // Actions
      resetAuthData: () => {
        set({
          userData: null,
          rememberMe: false,
          accessToken: null,
          accessTokenDate: null,
        })
      },

      setUserData: (userData: UserModel) => set({ userData }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => storage),
    }
  )
)
