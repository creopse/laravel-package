import 'flowbite'
import './bootstrap'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

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

    root.render(<App {...props} />)
  },
})
