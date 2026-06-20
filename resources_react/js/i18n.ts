// resources/js/i18n.ts
import axios from 'axios'
import i18n, { type BackendModule, type ReadCallback } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

interface TranslationData {
  [key: string]: string | TranslationData
}

interface LaravelTranslationResponse {
  [namespace: string]: TranslationData
}

interface I18nConfig {
  apiUrl: string
  langKey: string
  fallbackLocale: string
  debug?: boolean
}

// Backend factory — apiUrl is now a parameter, not a module-level constant
function createLaravelBackend(apiUrl: string): BackendModule {
  return {
    type: 'backend',
    init(): void {},
    read(language: string, namespace: string, callback: ReadCallback): void {
      axios
        .get<LaravelTranslationResponse>(`${apiUrl}/translations/${language}`, {
          headers: { Authorization: `Bearer null` },
        })
        .then((response) => {
          const translations = response.data[namespace] || response.data
          callback(null, translations)
        })
        .catch((error) => {
          console.error('Error loading translations:', error)
          callback(error, false)
        })
    },
  }
}

// Explicit init, called from app.ts setup() once config is known —
// no more side-effect init at module import time
export function initI18n(config: I18nConfig) {
  i18n
    .use(createLaravelBackend(config.apiUrl))
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: config.fallbackLocale,
      debug: config.debug ?? false,
      load: 'languageOnly',
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
        lookupLocalStorage: config.langKey,
        convertDetectedLanguage: (lng: string) => lng.split('-')[0],
      },
      interpolation: {
        escapeValue: false,
      },
    })

  return i18n
}

export default i18n
