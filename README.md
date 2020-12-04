<h1>将 Vue 和 React 一起打包</h1>

<h2>await</h1>

```json
"scripts": {
  "buildreact": "./apps/react17/node_modules/.bin/webpack --config ./apps/react17/webpack.config.js"
}

```
vue 是用脚手架起的，所以无法固定 loader 的路径，又一次失败

<h2>Plan</h2>
Vue CLI 起一个 vue3-app ，完事修改 HtmlWebpackPlugin.template ，将挂载节点的 html 文件提到上层文件。React 思路一致。
<br />
对于 React ，使用 <a href="https://zh-hans.reactjs.org/docs/portals.html">Portals</a>
<br />
对于 Vue ，使用 <a href="https://vue3js.cn/docs/zh/guide/teleport.html#%E4%B8%8E-vue-components-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8">teleport</a>
<br />
所以，我们需要一个 dom 节点 id 管理器，以生成全局唯一 id ，以供组件挂载

<h2>Question</h2>
1.如何解析 tsx 文件中的 class 组件, function 组件是可以编译的
<br />
2.在根目录启动时，可以启动两个项目。两个项目向根目录注入打包后文件，在根目录 start http-serve
<br />