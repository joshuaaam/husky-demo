/*
 * @Author: g05047
 * @Date: 2023-04-12 16:57:36
 * @LastEditors: g05047
 * @LastEditTime: 2023-04-14 14:43:04
 * @Description: file content
 */
module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended', // 注意顺序
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        // 需要在props中定义类型
        'vue/require-prop-types': 'off',
        // 禁止使用 空格 和 tab 混合缩进
        'no-mixed-spaces-and-tabs': 0,
        // 禁止已声明未使用过的变量
        'no-unused-vars': 'off',
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
};
