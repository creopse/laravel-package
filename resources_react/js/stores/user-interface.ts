import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { storage } from '.'

interface UserInterfaceState {
  isLightTheme: boolean
  mobileMenuOpened: boolean
  newsletterModalOpened: boolean
}

export const useUserInterfaceStore = create<UserInterfaceState>()(
  persist(
    (_set, _get) => ({
      // State
      isLightTheme: true,
      mobileMenuOpened: false,
      newsletterModalOpened: false,
    }),
    {
      name: 'user-interface',
      storage: createJSONStorage(() => storage),
    }
  )
)
