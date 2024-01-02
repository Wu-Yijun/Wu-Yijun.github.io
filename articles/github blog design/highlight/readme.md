# 网页中的代码高亮

先是在网页上找到了一些库。我首先尝试的是 highlight.js 很好用，但是有缺点。比如变量和类无法显示。

。。。具体描述


## 使用 ANTLR 进行语法分析

ANTLR 4: Making a compiler with the JavaScript runtime
https://www.scriptol.com/programming/antlr4-javascript.php

但是从示例可以看出，antlr 输出的js是可以在node里运行的，它使用了 require
因此，我们要使用browserify转成浏览器可用的js代码。

