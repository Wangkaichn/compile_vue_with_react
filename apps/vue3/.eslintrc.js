/*
 * @Author: your name
 * @Date: 2020-12-03 19:16:25
 * @LastEditTime: 2020-12-03 19:31:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue3/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: 'none',
        semi: false,
        printWidth: 100
      }
    ]
  }
};
