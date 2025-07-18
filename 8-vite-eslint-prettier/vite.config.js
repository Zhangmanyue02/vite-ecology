import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig(() => {
    return {
        plugins: [
            vue()
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
        }
    }
})