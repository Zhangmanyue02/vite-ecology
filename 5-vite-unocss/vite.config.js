import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import UnocssVitePlugin from 'unocss/vite'

export default defineConfig(() => {
    return {
        plugins: [
            vue(),
            UnocssVitePlugin()
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
        }
    }
})