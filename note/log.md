# 相关问题记录

## 启动报错(1)

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

1. 手动下载(√)

```js
// 前往淘宝镜像 https://npm.taobao.org/mirrors/electron/@versions
// 下载后解压到node_modules\electron\dist (!!dist目录)
// 新建并修改node_modules\electron\path.txt => electron.exe(指向解压后的可执行程序名)
```

2. 修改函数

```js
// node_modules/@electron/get/dist/cjs/index.js => 具体的下载url路径
// 再手动去对应目录(node_modules\electron) node install
```
## 启动报错(2)

**描述**

```js
// devtool
// require is not defined
```

**原因**

```js
// Electron 12版本之后默认启用配置项
// BrowserWindow可选项webPreferences.contextIsolation默认为false

// 而如果不注入node模块，实际上通过source-map发现这部分报错在于
// webpack-dev-server打包进了一行代码
// var url = require('url')
// 因为这部分原因导致的
// 修改webpack render.dev.js中target为web，正常使用。
```

**解决方式**

```js
new BrowserWindow({
  // ...增加配置项
  webPreferences: {
    nodeIntegration: true, // 注入node模块
    contextIsolation: false // 上下文隔离
  }
})
```

## TS模块声明

> https://my.oschina.net/fenying/blog/747184

## puppeteer打印问题

> https://blog.csdn.net/zhai_865327/article/details/104792646

## webPreferences.preload

**描述**

1. 在常规使用`nodeIntegration`注入配置项的情况下`require is not defined`
2. 配置预加载脚本未运行(生效)，甚至未加载(无错误提示)
3. `puppeteer`执行路径问题
4. `devtools`加载`map.js`相关404错误
5. `puppeteer`内部模块加载问题

**原因**

1. 通常的配置下都会包含两部分，`nodeIntegration`设置为`true`即注入node模块。但这种情况下可能依旧出现报错提示`require is not defined`, 与`electron`版本有关, 因为自12版本后`contextIsolation`(上下文隔离)默认为`true`, 也需要关闭。但其实往后的版本也是基于安全性考虑，并不希望node相关模块被直接注入到`render`进程中，于是在想要以这2个默认配置去做开发，就会涉及到使用`preload`(预加载脚本)通过`exposeInMainWorld`来桥接`web`以及`node`两部分的交互。而`web`部分这种状况下通过`dev-server`启动也会遇到这个报错，可以通过修改`target`为`web`解决，也剥离了`electron-render`下混合使用的方式
2. 配置了preload选项，但却看不到执行，也不好直观确认是否被加载。通过打印路径会发现`__dirname`等并非是预想的node路径，需要修改`webpack`配置中`node`选项关于这几个变量名的设置，以及配置`preload`的打包。
3. 如果通过`webpack`打包主进程加载，会丢失`puppeteer`在`node_modules`下默认安装的`.local-chromium`准确路径。需要手动做些调整或者修改，调整相关的环境变量(`process.env.PUPPETEER_EXECUTABLE_PATH`)或者`executablePath`相关方法属性得到的路径做调整修改。
4. 如果不通过`webapck`打包主进行直接通过node的加载运行, 不会丢失`puppeteer`的路径，但是相关的`map.js`在通过`dev-server`加载的时候会丢失出现404错误(因为`preload`作用于`render`进程但注入了`node`模块)
5. 承接第4点, 仍然可能会出现`module not found`的错误，从内部代码执行看主要是在`try catch`下的尝试加载无法`resolve`对应的模块(`package.json`内存在)

**解决方式**

```js
// webpack.config.js
module.exports = {
  target: 'web',
  node: {
    global: false,
    __filename: false,
    __dirname: false
  }
}
// 4. 执行路径问题
// 1)修改puppeteer执行路径
// 2)修改为chrome相关默认路径使用core取代
// 3)手动拷贝或打包相关.local-chromium
const executablePath = puppeteer.executablePath()
// 5. 重新在puppeteer模块下执行安装相关包
```
