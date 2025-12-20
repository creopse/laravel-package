import 'flowbite'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

import { CreopseProvider, type PluginOptions } from '@creopse/react'
import { ENCRYPTION_KEY, LANG_KEY } from './constants'
import './i18n'

createInertiaApp({
  title: (title) => (title ? `${title} - ${import.meta.env.APP_NAME}` : import.meta.env.APP_NAME),
  resolve: (name) => {
    const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
    const page: any = pages[`./pages/${name}.tsx`]
    return page
  },
  progress: {
    // The delay after which the progress bar will appear, in milliseconds...
    delay: 250,

    // The color of the progress bar...
    color: import.meta.env.APP_SECONDARY_COLOR,

    // Whether to include the default NProgress styles...
    includeCSS: true,

    // Whether the NProgress spinner will be shown...
    showSpinner: false,
  },
  setup({ el, App, props }) {
    // Create react app instance
    const root = createRoot(el)

    root.render(
      <CreopseProvider
        options={
          {
            initialProps: props.initialPage.props,
            router,
            resolveSections: () => {
              return import.meta.glob('./components/sections/**/*.tsx', {
                eager: true,
              })
            },
            config: {
              debug: import.meta.env.DEV,
              appUrl: import.meta.env.APP_URL,
              xApiKey: import.meta.env.APP_X_API_KEY,
              encryptionKey: ENCRYPTION_KEY,
              langKey: LANG_KEY,
            },
          } as PluginOptions
        }>
        <App {...props} />
      </CreopseProvider>
    )
  },
})
