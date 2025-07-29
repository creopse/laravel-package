import React from '@vitejs/plugin-react'
import Laravel from 'laravel-vite-plugin'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import Svgr from 'vite-plugin-svgr'

export default defineConfig({
  envPrefix: 'APP_',
  resolve: {
    alias: {
      'ziggy-js': path.resolve('vendor/tightenco/ziggy/dist/index.esm.js'),
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
  build: {
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
        if (warning.code === 'EMPTY_BUNDLE') return // Ignore empty bundle warnings
        warn(warning)
      },
    },
    chunkSizeWarningLimit: 500,
  },
  plugins: [
    React(),
    Laravel({
      input: ['resources/css/app.css', 'resources/js/app.tsx'],
      refresh: true,
    }),
    Svgr(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/, // .md
      ],

      // global imports to register
      imports: [
        // presets
        'react',
        // custom
        {
          'react-i18next': ['useTranslation'],
          '@inertiajs/react': ['useForm', 'usePage', 'router'],
          axios: [['default', 'axios']],
        },
      ],

      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: ['./resources/js/stores/**', './resources/js/hooks/**'],

      // Include auto-imported packages in Vite's `optimizeDeps` options
      // Recommend to enable
      viteOptimizeDeps: true,

      dts: true,

      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Icons({ compiler: 'jsx', autoInstall: true }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
})
