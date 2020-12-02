<h1>将 Vue 和 React 一起打包</h1>
react 分支只能支持 react
<br />
vue 分支是基于 react 分支继续开发
<br/>
<br/>
<b>
  <a href="https://github.com/vuejs/vue-loader">
    vue-loader
  </a>
  <br />
  <a href="https://github.com/vuejs/vue-loader/blob/master/docs/spec.md">
    Vue Single-File Component (SFC) Spec
  </a>
</b>
<br/>
在 webpack.config.js 设置 alias ，添加路径快捷方式，但 VScode 不提示，设置 jsconfig.json 即可
<br />
对于 babel-loader 设置 presets:
<a href="https://www.babeljs.cn/docs/babel-preset-react">@babel/preset-react</a>