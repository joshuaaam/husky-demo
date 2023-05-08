# 关于 husky、commitlint、eslint、lint-staged 使用

## husky

husky是一个Git hooks工具，能够在项目中配置hooks脚本；当我们执行git操作时，自动触发配置的脚本；并且在指定git hook 钩子去配置要执行的脚本

### 安装
`npm install -D husky`

### 创建.husky文件
`npx husky install`

### 添加脚本
`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`

运行完该命令后.husky目录下新增了一个名为commit-msg的shell脚本

### 安装插件
`pnpm add @commitlint/cli @commitlint/config-conventional -D`


## lint-staged
在代码提交之前，进行代码规则检查能够确保代码都是符合代码规则的。但是整个项目上运行lint速度会很慢，lint-staged能让lint只扫描暂存区的文件而不是全盘扫描

### 安装
`npm i lint-staged -D`

### 配置

` "scripts": {
    ...
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "eslint --fix"
    ]
  },
`

### 在pre-commit新增命令

`#!/usr/bin/env sh . "$(dirname -- "$0")/_/husky.sh"

npx --no-install lint-staged`
