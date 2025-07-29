import { ENCRYPTION_KEY } from '@/constants'
import CryptoJS from 'crypto-js'
import type { StateStorage } from 'zustand/middleware'

export const storage: StateStorage = {
  getItem: (key: string) => {
    try {
      const encrypted = localStorage.getItem(key)
      if (encrypted) return CryptoJS.AES.decrypt(encrypted, ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8)
      else return encrypted
    } catch (error) {
      console.log(error)
    }

    return null
  },
  setItem: (key: string, value: any) => {
    try {
      const encrypted = CryptoJS.AES.encrypt(value, ENCRYPTION_KEY).toString()
      return localStorage.setItem(key, encrypted)
    } catch (error) {
      console.log(error)
    }
  },
  removeItem: (key: string) => {
    try {
      return localStorage.removeItem(key)
    } catch (error) {
      console.log(error)
    }
  },
}
