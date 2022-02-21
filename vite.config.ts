import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import * as path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
// const claims = process.env.VITE_CLAIMS === 'true';
const claims = false;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            strategies: 'injectManifest',
            srcDir: 'src',
            filename: claims ? 'claims-sw.ts' : 'prompt-sw.ts',
            registerType: claims ? 'autoUpdate' : 'prompt',
            includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
            injectManifest: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}'],
                globIgnores: claims ? ['**/claims-sw*'] : ['**/prompt-sw*'],
            },
            manifest: {
                name: 'Vue Typescript Admin',
                // eslint-disable-next-line camelcase
                short_name: 'Vue Ts Admin',
                description: 'Description of your app',
                // eslint-disable-next-line camelcase
                theme_color: '#4DBA87',
                icons: [
                    {
                        src: 'icons/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'icons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'icons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
        styleImport({
            resolves: [VantResolve()],
        }),
    ],
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    base: '/vue-template/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
