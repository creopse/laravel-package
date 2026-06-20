// resources/js/lib/encrypted-storage.ts
import { gcm } from '@noble/ciphers/aes.js'
import { randomBytes } from '@noble/ciphers/utils.js'
import { sha256 } from '@noble/hashes/sha2.js'
import type { StateStorage } from 'zustand/middleware'

// Set once at runtime from app.ts setup() — never a static import-time constant
let derivedKey: Uint8Array | null = null

export function configureEncryptedStorage(encryptionKey: string | null) {
  derivedKey = encryptionKey ? sha256(new TextEncoder().encode(encryptionKey)) : null
}

const encrypt = (value: string): string => {
  if (!derivedKey) return value // mirrors the Pinia plugin: no key = no encryption, not a crash

  const nonce = randomBytes(12)
  const cipher = gcm(derivedKey, nonce)
  const encrypted = cipher.encrypt(new TextEncoder().encode(value))

  const combined = new Uint8Array(nonce.length + encrypted.length)
  combined.set(nonce)
  combined.set(encrypted, nonce.length)

  return btoa(String.fromCharCode(...combined))
}

const decrypt = (value: string): string => {
  if (!derivedKey) return value

  const combined = Uint8Array.from(atob(value), (c) => c.charCodeAt(0))
  const nonce = combined.slice(0, 12)
  const ciphertext = combined.slice(12)
  const cipher = gcm(derivedKey, nonce)

  return new TextDecoder().decode(cipher.decrypt(ciphertext))
}

export const storage: StateStorage = {
  getItem: (key) => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? decrypt(raw) : raw
    } catch (error) {
      console.error(error)
    }
    return null
  },
  setItem: (key, value) => {
    try {
      return localStorage.setItem(key, encrypt(value))
    } catch (error) {
      console.error(error)
    }
  },
  removeItem: (key) => {
    try {
      return localStorage.removeItem(key)
    } catch (error) {
      console.error(error)
    }
  },
}
