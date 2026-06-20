import App from './App.vue'

import getPiniaInstance from '@/stores'

import creopse from '@creopse/vue'
import type { SharedProps } from '@creopse/utils'

import { i18nVue } from 'laravel-vue-i18n'
import { router, createInertiaApp, Link } from '@inertiajs/vue3'

import { Icon } from 'vue3-icon-picker'
import 'vue3-icon-picker/dist/style.css'

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./pages/**/*.vue', { eager: true })
    const page: any = pages[`./pages/${name}.vue`]
    page.default.layout = App
    return page
  },

  progress: {
    delay: 250,
    includeCSS: false,
    showSpinner: false,
  },

  setup({ el, App, props, plugin }) {
    const sharedProps = props.initialPage.props as unknown as SharedProps

    const config = sharedProps.config

    const navigatorLanguage =
      // @ts-ignore
      window.navigator.language || window.navigator.userLanguage

    let userLanguage = navigatorLanguage.split('-')[0]
    const userData = sharedProps.userData

    if (userData?.preferences?.locale) {
      userLanguage = userData.preferences.locale
    }

    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(creopse, {
        initialProps: sharedProps,
        router,
        resolveSections: () => {
          return import.meta.glob('./components/sections/**/*.vue', {
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
      })
      .use(i18nVue, {
        lang:
          localStorage.getItem(config.frontend.langKey) ||
          userLanguage ||
          config.app.locale,
        fallbackLang: config.app.fallbackLocale,
        resolve: async (lang: string) => {
          const langs: any = import.meta.glob('../../lang/*.json')
          return await langs[`../../lang/${lang}.json`]()
        },
      })
      .use(getPiniaInstance(config.frontend.storageEncryptionKey))
      .component('ContentIcon', Icon)
      .component('Link', Link)
      .mount(el)
  },
})
