import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig(() => {
    return {
        plugins: [
            vue(),
            AutoImport({
                imports: ['vue']
            })
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
        }
    }
})