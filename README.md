# 关于 husky、commitlint、eslint、lint-staged 使用

## husky

`husky`是一个Git hooks工具，当你提交或推送时，可以使用它来整理你的提交消息、运行测试、lint 代码等。Husky 支持所有 Git 钩子


### 初始化husky
```
npx husky-init && npm install
```
执行这个命令，他会：

### 添加hook

```
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```


## lint-staged
在代码提交之前，进行代码规则检查能够确保代码都是符合代码规则的。但是整个项目上运行lint速度会很慢，`lint-staged`能让lint只扫描暂存区的文件而不是全盘扫描

### 安装
```
npm i lint-staged -D
```

### 配置

```
"scripts": {
    ...
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "eslint --fix"
    ]
  },
```

### 在pre-commit新增命令

```
#!/usr/bin/env sh . "$(dirname -- "$0")/_/husky.sh"

npx --no-install lint-staged
```

## commitlint

### 什么是commitlint?
`commitlint`是一个提交验证工具。原理是可以在实际的 git commit 提交到远程仓库之前使用 git 钩子来验证信息。提交不符合规则的信息将会被阻止提交到远程仓库。

### 为什么要使用commitlint？
在任何的工程化的项目中都是不可或缺的部分啦，规范的 commit 不仅有助于他人 review, 还可以有效的输出 CHANGELOG
甚至对于项目的研发质量都有很大的提升

### 安装
```
pnpm add @commitlint/cli @commitlint/config-conventional -D
```

### 添加脚本
```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

运行完该命令后.husky目录下新增了一个名为`commit-msg`的shell脚本
