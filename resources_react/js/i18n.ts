// resources/js/i18n.ts
import i18n, { type BackendModule, type ReadCallback } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { API_REQUEST_HEADERS, API_URL, LANG_KEY } from './constants'

// Types for translation data
interface TranslationData {
  [key: string]: string | TranslationData
}

interface LaravelTranslationResponse {
  [namespace: string]: TranslationData
}

// Custom backend to load translations from Laravel
const laravelBackend: BackendModule = {
  type: 'backend',

  init(): void {
    // Initialization logic if needed
  },

  read(language: string, namespace: string, callback: ReadCallback): void {
    const headers: {
      'X-API-Key': string
      Authorization?: string
    } = API_REQUEST_HEADERS
    headers['Authorization'] = `Bearer null`

    axios
      .get<LaravelTranslationResponse>(`${API_URL}/translations/${language}`, {
        headers,
      })
      .then((response) => {
        // If namespace exists in the data, return it, otherwise return the whole data
        const translations = response.data[namespace] || response.data
        callback(null, translations)
      })
      .catch((error) => {
        console.error('Error loading translations:', error)
        callback(error, false)
      })
  },
}

i18n
  // Use the custom Laravel backend
  .use(laravelBackend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    fallbackLng: 'en',
    debug: import.meta.env.DEV,

    // Use only language codes, not full locale tags
    load: 'languageOnly',

    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],

      lookupLocalStorage: LANG_KEY,

      convertDetectedLanguage: (lng: string) => {
        return lng.split('-')[0]
      },
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },
  })

export default i18n
