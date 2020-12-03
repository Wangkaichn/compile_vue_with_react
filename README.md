<h1>将 VUE 和 React 一起打包</h1>
分支继承顺序：master => react => vue => standard ==> standard-await
<br />
vue3 分支继承顺序：vue3


<h2>Plan</h2>
Vue CLI 起一个 vue3-app ，完事修改 HtmlWebpackPlugin.template ，将挂载节点的 html 文件提到上层文件。React 思路一致。
<br />
对于 React ，使用 <a href="https://zh-hans.reactjs.org/docs/portals.html">Portals</a>
<br />
对于 Vue ，使用 <a href="https://vue3js.cn/docs/zh/guide/teleport.html#%E4%B8%8E-vue-components-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8">teleport</a>
<br />
所以，我们需要一个 dom 节点 id 管理器，以生成全局唯一 id ，以供组件挂载
