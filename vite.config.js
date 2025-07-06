import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { compression } from 'vite-plugin-compression2'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        compression(),
        imagetools()
    ],
    resolve: {
        alias: [
            { find: '~', replacement: path.resolve(__dirname, 'src') },
        ],
        extensions: ['.js', '.jsx', '.json', '.svg', '.scss'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "~/styles/colors.scss" as *;
                    @use '~/styles/breakpoints' as bp;
                    @use '~/styles/global' as *;
                `, // Optional
            },
        },
    },
    build: {
        sourcemap: true, // This enables source map generation
    },
    server: {
        headers: {
            "cache-control": "max-age=86400"
        }
    }
})
