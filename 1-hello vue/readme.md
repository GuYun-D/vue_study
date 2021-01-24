# vue基本使用
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vue hello world</title>
</head>

<body>
    <!-- 插值表达式，支持基本的计算 -->
    <div id="app">{{msg + '我来了'}}</div>
    <script src="./js/vue.js"></script>
    <script>
        /**
         * vue基本使用步骤
         * 1.需要标签进行填充数据
         * 2.引入vue.js文件
         * 3.使用vue语法
         * 4.把vue提供的数据填充到标签里面
        */

        // 创建vue实例
        var vm = new Vue({
            // 元素的挂载位置（值可以是css选择器也可以是dom元素）
            el: '#app',
            // 模型数据
            data: {
                msg: 'hello vue'
            }
        })
    </script>
</body>

</html>
```

- 实例参数分析
    - el： 元素的挂载位置（值可以是CSS选择器或者DOM元素）
    - data：模型数据（值是一个对象）
- 插值表达式用法
    - 将数据填充到HTML标签中
    - 插值表达式支持基本的计算操作
- Vue代码运行原理分析
    - 概述编译过程的概念（Vue语法→原生语法）

    即vue代码通过vue框架生成原生js代码


