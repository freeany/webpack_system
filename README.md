## 1. 安装webpack

- npm install -g webpack

- npm install -g webpack-cli

  - webpack4才有的工具
  - 在命令行中使用要依赖于这个命令行工具的库
  - -g形式的全局安装，这不是推荐的方式，因为全局安装版本就被固定了。

- webpack可以构建一个前端的项目，也可以编译文件、打包， 比如commjs，AMD，es6，css, image, json. 把js文件编译打包之后 被浏览器使用。

- webpack默认的entry入口就是src，找到src之后默认找index.js.

- 当在命令行敲 webpack的时候，就会在当前目录下找到src/index.js进行打包，打包到当前目录下的dist/main.js文件。

- webpack提供 mode属性来对文件进行不同程度的处理和优化。

  - mode:   'none' |  'development' | 'production' 
  - 可以在命令行中使用 webpack --mode=development 来设置打包的mode。
  - 也可以在webpack.config.js中配置。
  - 可以在package.json中 使用scripts脚本中进行配置。

- 为了解决全局webpack导致的版本锁定的问题

  - 我们可以找到./node_modules/webpack/bin/webpack.js 执行这个文件
  - 就可以找到webpack的最新临时版本去执行。执行完毕写在此版本。
  - npx webpack === ./node_modules/webpack/bin(可执行文件)/webpack.js

- 配置多入口文件

  ```js
  const path = require('path')
  module.exports = {
    // 设置模式
    mode: 'development',
    // 普通配置入口
    // entry: './src/index.js',
    // 配置多入口文件
    entry: {
      app: './src/index.js',
      hello: './src/hello.js'
    },
    // 配置出口
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
  
  // 打包出来的文件 也是多出口的。
  ```



- babel

  - babel是一个转es5语法的库(语法转化)
  - 但是babel要被webpack集成的话，需要webpack的一个loader babel-loader

  - babel-loader 官网

    - ```
      npm install -D babel-loader @babel/core @babel/preset-env
      ```

  - 安装bael对应的插件

    ` https://www.babeljs.cn/docs/plugins `

  - webpack.config.js中的配置

  ```js
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
                // 安装对应的插件，然后再option中配置即可。
              plugins: [
                '@babel/plugin-transform-arrow-functions', // 箭头函数
                '@babel/plugin-transform-classes',	// class语法
                ['@babel/plugin-proposal-decorators', { legacy: true }] // 装饰器语法 - babel 7.0才支持
              ]
            }
          }
        }
      ]
    }
  
  // 如果实在.babelrc中，则 把options所对应的值放到.babelrc中即可。
  ```

- 每次都要要解决一个新的问题都要使用安装不同的插件，这样是很不合理的。

  - babel为我们提供了预设的解决方案。

  ？？ 再webpack-babel的配置文件中进行debug调试

  ```js
  options: {
      presets: [['@babel/preset-env',{"debug": true}]]
  }
  // @babel/preset-env 预设的babel插件中不包含装饰器插件。
  ```

  

- devtool的属性值 可以来增强调试过程。不同的值会影响到构建和重新构建的速度。

  - ` https://www.webpackjs.com/configuration/devtool/ `

  - 设置为false  则会有更好的调试体验。

- regeneratorRuntime is not defined 的解决

  - 这个错误一般是浏览器不兼容更高版本的语法导致的。

  - Babel可以转换一些es6的语法，但是有一些api无法转换， promise，regenertator

    - 为什么？ babel将es6转换成es5，但是有些es5的方法浏览器本身就不支持。

  - polyfill 的工作原理是，将一些无法使用的api，挂载到window上面。然后重新实现一遍这个api。赋值给window挂载的属性上。

  - @babel/ployfill 是需要在生产环境中使用的。因为需要在运行环境中使用ployfill。

  - 解决： `npm i @babel/polyfil`

    - ```js
      entry: {
          app: ['@babel/polyfill', 'whatwg-fetch', './src/index.js'],
          hello: './src/hello.js'
        }
      ```

    - 问题： 打包后的代码很大 420kb

  - 解决方式二:  `npm i @babel/polyfil`

    ```js
    // 在需要的js文件上面或者最顶层js上面  引入@babel/polyfill
    import '@babel/polyfill'
    ```

    - 问题：打包后大小405kb

  - 解决方式三： `npm i @babel/polyfil`

    - ```js
      options: {
         presets: [
         		['@babel/preset-env', { debug: true, useBuiltIns: 'usage' }]
         ],
      }
        debugInfo: Added following core-js polyfills:
                   es6.object.to-string {}
                   es6.promise {}
      ```

    - 

  @babel/profile 提供了这些功能，但是会造成全局变量污染的问题， 原型的污染(比如会在数组的原型上添加方法)。

  ​	解决上述方法：

  -  使用@babel/runtime来解决上述问题，@babe/runtime采用了沙盒的机制。

  - asycn await generator 归为一类   需要regenerator runtime转换的。

  - 其他的归为一类    需要core-js来转换的。

    注意以上说的是babel不能转换的语法

- 

- 

- 

- 推荐使用下面这种方式，不要@babel/profile，减小了体积，防止了变量污染。防止重复引用。

- 安装了@babel/runtime则不需要了@babe/polyfill了。同样的是@babel/runtime也是要在运行环境中使用的。

  -  @ babel / plugin-transform-runtime 插件将为将 @ babel / runtime 引入到每一个模块，防止了变量的重复。 另一个目的是为您的代码创建一个沙盒环境 

  -  https://www.babeljs.cn/docs/babel-plugin-transform-runtime 

  - 使用姿势：

    1.  npm install --save-dev @babel/plugin-transform-runtime 

    2.  npm install --save @babel/runtime 

    3.  {  "plugins": ["@babel/plugin-transform-runtime"] } 

    4. ```js
       {
         "plugins": [
           [
             "@babel/plugin-transform-runtime",
             {
               "absoluteRuntime": false,
               "corejs": 2,  // 如果需要解析Array， Object之类的方法
               "helpers": true,
               "regenerator": true,
               "useESModules": false,
               "version": "7.0.0-beta.0"
             }
           ]
         ]
       }
       ```

    5. npm i @babel/runtime-corejs2  // 生产环境需要(  如果需要解析Array， Object之类的方法) 









loader转换代码，转换文件

plugin 扩展功能

  filename: '[name]-[hash].bundle.js',

  filename: '[name].bundle.js',

- 浏览器缓存js文件。加上hash之后，就每个js发生改变，名称改变，浏览器就会重新请求最新的js文件。



- 搭建react脚手架
  - babel对react环境编写了一些preset [@babel/preset-react](https://www.babeljs.cn/docs/babel-preset-react) 
  - 1. 安装 npm install --save-dev @babel/preset-react 
    2.  {  "presets": ["@babel/preset-react"] } 







 html-webpack-plugin： 

功能： 默认给dist 文件夹中添加一个index.html文件并自动引用打包后的所有的入口js文件

 https://github.com/jantimon/html-webpack-plugin#configuration 

```js
 // 与entry、output同级的才是webpack的plugins。
  plugins: [
    new HtmlWebpackPlugin({
      title: '嘿嘿嘿',
      filename: 'index.html',
      template: 'src/public/index.html',
      hash: true
    })
  ]
```





style-loader



```js
module: {
	rules: [
        {
            // loader的处理方式
        },
        {
            // loader的处理方式
        }
    ]
}

plugins: [
    {
        // plugin的处理方式
    },
    {
        // plugin的处理方式
    }
]
```



css-loader 解析 .css文件

style-loader 将.css文件的数据放到style标签中。并放入引入的文件内。

style-loader是将css以js的形式将数据以style的标签包裹插入到head元素上。

 Automatically injects styles into the DOM using multiple `  <style></style>  `. It is **default** behaviour. 





cross-env   设置当前node环境。

```js
"prod": "cross-env NODE_ENV=development webpack"
```





devtools的值决定了构建的速度和打包的速度和重新构建的速度。

create-react-app 默认在生产环境开启了  xxx-source-map

如果需要打包的速度则 开发环境用eval， 生产环境用 none。

如果开发的时候需要源码调错，则用source-map







打包优化：

```js
// 与plugis同一层级
optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      cache: true,
      parallel: true
    })]
  },
```
