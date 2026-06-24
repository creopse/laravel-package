import inertia from '@inertiajs/vite'
import { wayfinder } from '@laravel/vite-plugin-wayfinder'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import { bunny } from 'laravel-vite-plugin/fonts'
import VueI18n from 'laravel-vue-i18n/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import SvgLoader from 'vite-svg-loader'

export default defineConfig({
  envPrefix: 'APP_',
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const modulePath = id.split('node_modules/')[1]
            const topLevelFolder = modulePath.split('/')[0]
            if (topLevelFolder !== '.pnpm') {
              return topLevelFolder
            }
            const scopedPackageName = modulePath.split('/')[1]
            const chunkName = scopedPackageName.split('@')[scopedPackageName.startsWith('@') ? 1 : 0]
            return chunkName
          }
        },
      },
      onwarn(warning, warn) {
        if (warning.code === 'EMPTY_BUNDLE') return
        warn(warning)
      },
    },
  },
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.ts'],
      refresh: true,
      fonts: process.env.CI
        ? undefined
        : [
            bunny('Instrument Sans', {
              weights: [400, 500, 600],
            }),
          ],
    }),
    inertia({
      ssr: false,
    }),
    tailwindcss(),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    wayfinder({
      formVariants: true,
    }),
    VueI18n(),
    SvgLoader({
      defaultImport: 'url',
    }),
    Components({
      dts: true,
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver(),
        (name) => {
          if (name === 'Icon') {
            return { name: 'Icon', from: '@iconify/vue' }
          }
          if (name === 'Image') {
            return { name: 'Image', from: '@creopse/vue' }
          }
        },
      ],
      dirs: ['resources/js/components/sections', 'resources/js/components/widgets'],
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        'vue',
        'pinia',
        {
          'laravel-vue-i18n': [
            'trans',
            'wTrans',
            'transChoice',
            'wTransChoice',
            'loadLanguageAsync',
            'getActiveLanguage',
            'isLoaded',
          ],
          '@inertiajs/vue3': ['useForm', 'usePage', 'router'],
          '@creopse/vue': [
            'useApi',
            'useNews',
            'useMenu',
            'useProps',
            'useVideo',
            'useConfig',
            'useHelper',
            'useContent',
            'useNewsletter',
          ],
        },
      ],
      dirs: ['./resources/js/stores/**', './resources/js/composables/**'],
      vueTemplate: true,
      viteOptimizeDeps: true,
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    Icons({ compiler: 'vue3', autoInstall: true }),
  ],
})
