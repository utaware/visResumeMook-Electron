# 相关问题记录

## 启动报错

**描述**

```shell
# 命令
# npm run start:main
# electron ./app/main/electron.ts
```

**错误信息**

```js
throw new Error('Electron failed to install correctly, please delete node_modules/electron and try installing again');
```

**定位**

```js
// node_modules/electron/index => getElectronPath => executablePath => path.txt
// npm run postinstall => install.js => downloadArtifact => @electron/get =>
// dist/cjs/index.js => downloadArtifact
// 实际就是下载的时候没有对应的path.txt 以及对应安装包
```

**解决方式**

1. 手动下载

```js
// 前往淘宝镜像 https://npm.taobao.org/mirrors/electron/@versions
// 下载后解压到node_modules\electron\dist
// 新建并修改node_modules\electron\path.txt => electron.exe(指向解压后的可执行程序名)
```

2. 修改函数

```js
// node_modules/@electron/get/dist/cjs/index.js => 具体的下载url路径
// 再手动去对应目录(node_modules\electron) node install
```

3. 修改变量
