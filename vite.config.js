import vituum from 'vituum'
import { fileURLToPath, URL } from 'node:url'
import pug from '@vituum/vite-plugin-pug'
import pages from 'vituum/plugins/pages.js'
import imports from "vituum/plugins/imports.js";
// import concat from '@vituum/vite-plugin-concat'

export default {
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    },
    base: './',
    plugins: [
        vituum(),
        pug({root: '/src',}),
        imports({
            filenamePattern: {
                'src/styles': '+.sass',
            },
            paths: [
                '/src/styles/*/**',
                '/src/scripts/*/**',
                '/src/assets/*/**'
            ],
        }),
        pages({
            dir: './src/templates/pages',
            root: './src',
            normalizeBasePath: true
        },),
    ],
    assets: {
        fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'ico', 'webp', 'mp4', 'webm', 'ogg', 'mp3', 'wav', 'flac', 'aac', 'woff', 'woff2', 'eot', 'ttf'],
    },
    build: {
        outDir: 'build',
        emptyOutDir: true,
        minify: false,
        terserOptions: {
            compress: false,
            mangle: false,
        },
        rollupOptions: {
            input: [
                './src/templates/pages/*.{pug,html}',
                './src/styles/*.{css,scss,sass}',
                './src/scripts/**/*.{js,ts}',
                './src/assets/**/*.{svg,png,jpeg,jpg,webp,webm,mp4,mp3,webp,webm,woff,woff2,ttf}',
            ],
            output: {
                chunkFileNames: 'assets/scripts/[name].js',
                entryFileNames: 'assets/scripts/[name].js',
                assetFileNames: ({name}) => {
                    if (/\.css$/.test(name ?? '')) {
                        return 'assets/css/[name][extname]';
                    }
                    if (/\.(webm|mp4)$/.test(name ?? '')) {
                        return 'assets/video/[name][extname]';
                    }
                    if (/\.(webp|png|jpg|jpeg|gif|svg)$/.test(name ?? '')) {
                        return 'assets/img/[name][extname]';
                    }
                    if (/\.(woff|woff2|ttf)$/.test(name ?? '')) {
                        return 'assets/fonts/[name][extname]';
                    }
                    return 'assets/[name][extname]'
                },
                manualChunks: (id)=> {
                    if (
                        id.includes('node_modules') ||
                        id.includes('libs')
                    ) {
                        return 'libs';
                    }
                }
            }

        }
    },

}
