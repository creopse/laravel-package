import inertia from '@inertiajs/vite'
import { wayfinder } from '@laravel/vite-plugin-wayfinder'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'
import { bunny } from 'laravel-vite-plugin/fonts'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import Svgr from 'vite-plugin-svgr'

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
                        const chunkName =
                            scopedPackageName.split('@')[
                                scopedPackageName.startsWith('@') ? 1 : 0
                            ]
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
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
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
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
        Svgr(),
        AutoImport({
            include: [/\.[tj]sx?$/, /\.md$/],
            imports: [
                'react',
                {
                    'react-i18next': ['useTranslation'],
                    '@inertiajs/react': ['useForm', 'usePage', 'router'],
                    '@creopse/react/hooks': [
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
                    axios: [['default', 'axios']],
                },
            ],
            dirs: ['./resources/js/stores/**', './resources/js/hooks/**'],
            viteOptimizeDeps: true,
            dts: true,
            eslintrc: {
                enabled: true,
                filepath: './.eslintrc-auto-import.json',
                globalsPropValue: true,
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
