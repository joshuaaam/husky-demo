# 关于 husky、commitlint、eslint、prettier 使用

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


