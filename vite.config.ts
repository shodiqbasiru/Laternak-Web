import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
            '@assets': path.resolve(__dirname, '/src/assets'),
            '@services': path.resolve(__dirname, '/src/services'),
            '@composables': path.resolve(__dirname, '/src/composables'),
            '@router': path.resolve(__dirname, '/src/router'),
            '@pages': path.resolve(__dirname, '/src/pages'),
            '@api': path.resolve(__dirname, '/src/api'),

        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace('^/api/', ''),
            }
        }
    }
})