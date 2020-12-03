<h1>将 Vue 和 React 一起打包</h1>
代码检查工具: <a href="https://eslint.org/">eslint</a>
<br />
代码格式化工具: <a href="https://prettier.io/">prettier</a>
<br />
Sass/Scss
<br />
TypeScript：如果您不使用JavaScript，则无需担心jsconfig.json。jsconfig.json源于tsconfig.json，是TypeScript的配置文件。jsconfig.json相当于tsconfig.json的“allowJs”属性设置为true。
<br />
<a href="https://webpack.docschina.org/guides/lazy-loading/">代码懒加载</a>

<h2>await</h2>
当前未能实现 eslint 对 vue，ts，tsx，scss 文件的校验。可以对 js，jsx 进行校验
<br />
需要换一种思路使用 vue-cli 起一个 vue3 项目，作为一个子项目，再启一个 react 项目，各有一个 package.json。父级也包含 package.json。各自校验各自的。
<br />
<br />
<h2>Task</h2>
1. .vue 文件中，无法使用 alias
<br />
2. 对于 .scss 文件，import 时没有路径提示
<br />
3. 梳理 eslint plugin
