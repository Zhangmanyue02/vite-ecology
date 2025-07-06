import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
    console.log("mode=>", mode)
    console.log("command=>>", command)
    console.log("process.cwd()=>>>", process.cwd());
    const env = loadEnv(mode, process.cwd())
    console.log("env=>>>>", env);
    return {
        plugins: [
            vue()
        ]
    }
})