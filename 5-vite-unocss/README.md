# 1-vite-start 0 到 1

# 坑点

Uncaught SyntaxError: Cannot use import statement outside a module (at main.js:1:1)

## 解决

在 index.html 引入 main.js 时必须声明 type=module

```js
<script type="module" src="src/main.js"></script>
```

在 HTML 的 <script> 标签中声明 type="module" 是为了告知浏览器将引入的文件作为 ES 模块处理，而非普通脚本。以下是声明和不声明的区别：

1. 声明 type="module" 的作用 ：

- 支持模块化 ：浏览器会将文件视为 ES 模块，支持使用 export 和 import 语法进行模块化开发，解决代码可重用性、可读性和可维护性问题 1
- 与常规 JS 区分 ：浏览器会以不同的方式处理模块，启用严格模式等特性

2. 不声明 type="module" 的影响 ：

- 不支持模块语法 ：浏览器默认将文件视为普通脚本，若在其中使用 export 或 import 语法会报错
- 作用域问题 ：普通脚本中的变量会挂载到全局作用域，可能引发命名冲突和安全问题

综上所述，若要在浏览器中使用 ES 模块的特性，必须在 <script> 标签中声明 type="module" 。

本项目依赖：
vue3 vite
