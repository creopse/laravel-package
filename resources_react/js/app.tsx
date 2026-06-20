import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

import { CreopseProvider, type PluginOptions } from '@creopse/react'
import type { SharedProps } from '@creopse/utils'
import { initI18n } from './i18n'

import '@arkn/react-icon-picker/dist/style.css'
import { configureEncryptedStorage } from './lib/encrypted-storage'
import { rehydrateStores } from './stores'

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
    const page: any = pages[`./pages/${name}.tsx`]
    return page
  },

  progress: {
    delay: 250,
    includeCSS: true,
    showSpinner: false,
  },

  setup({ el, App, props }) {
    const sharedProps = props.initialPage.props as unknown as SharedProps
    const config = sharedProps.config

    configureEncryptedStorage(config.frontend.storageEncryptionKey)
    rehydrateStores()

    initI18n({
      apiUrl: config.app.apiUrl,
      langKey: config.frontend.langKey,
      fallbackLocale: config.app.fallbackLocale,
      debug: import.meta.env.DEV,
    })

    const root = createRoot(el)

    root.render(
      <CreopseProvider
        options={
          {
            initialProps: sharedProps,
            router,
            resolveSections: () => {
              return import.meta.glob('./components/sections/**/*.tsx', {
                eager: true,
              })
            },
            config: {
              debug: import.meta.env.DEV,
              appUrl: config.app.url,
              locale: config.app.locale,
              fallbackLocale: config.app.fallbackLocale,
              useUserLocaleAsFallback: true,
              langKey: config.frontend.langKey,
            },
          } as PluginOptions
        }>
        <App {...props} />
      </CreopseProvider>
    )
  },
})
