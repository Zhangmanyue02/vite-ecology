module.exports = {
    // 指定环境
    env: {
        browser: true,
        node: true,
        es2021: true,
        node: true,
    },
    globals: {
        // defineProps: 'readonly',
        // defineEmits: 'readonly',
        // defineExpose: 'readonly',
        // $confirm: 'readonly',
        // $message: 'readonly',
        // $notify: 'readonly',
        // $refs: 'readonly',
        // $alert: 'readonly',
        // $storage: 'readonly',
        // $loading: 'readonly',
        // sessionStorage: 'off',
        // localStorage: 'off',
    },
    // vue文件解析器
    parser: "vue-eslint-parser",
    parserOptions: {
        // 代码编写环境
        ecmaVersion: 'latest',
        // 代码编写环境
        sourceType: 'module',
    },
    extends: {
        "./.eslintrc-auto-import.json",// 自动导入插件
        "eslint:recommended",
        "plugin:vue/vue3-essential",// vue3 推荐插件
        "plugin:vue/vue3-strongly-recommended", // vue3 推荐插件
        "plugin:prettier/recommended", // vue3 推荐插件
    },
    plugins: ["vue", "prettier"]
}