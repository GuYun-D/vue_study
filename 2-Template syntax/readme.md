# 一、vue模板语法
### 1模板概述
##### （1）前端渲染
就是把数据填充到HTML标签中，模板就是HTML标签与数据进行结合的过程程直为前端渲染，产物就是静态的HTML内容
##### （2） 前端渲染方式
- 原生js拼接字符串
  基本上就是将数据以字符串的方式拼接到HTML标签中
  如：
  ```js
    var d = data.weather;
    var info = document.getElementById('info');
    info.innerHTML = '';
    for(var i=0;i<d.length;i++){
    var date = d[i].date;
    var day = d[i].info.day;
    var night = d[i].info.night;
    var tag = '';
    tag += '<span>日期：'+date+'</sapn><ul>';
    tag += '<li>白天天气：'+day[1]+'</li>'
    tag += '<li>白天温度：'+day[2]+'</li>'
    tag += '<li>白天风向：'+day[3]+'</li>'
    tag += '<li>白天风速：'+day[4]+'</li>'
    tag += '</ul>';
    var div = document.createElement('div');
    div.innerHTML = tag;
    info.appendChild(div);
    }
  ```
  缺点: 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不同开发人员的代码风格差别很大，随着业务的复杂，后期的维护变得逐渐困难起来。

<br>

- 使用前端模板引擎

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是基于模板引擎art-template的一段代码，与拼接字符串相比，代码明显规范了很多，它拥有自己的一套模板语法规则。
```js
<script id="abc" type="text/html">
    {{if isAdmin}}
        <h1>{{title}}</h1>
        <ul>
    {{each list as value i}}
        <li>索引 {{i + 1}} ：{{value}}</li>
    {{/each}}
        </ul>
    {{/if}}
</script>

```
<mark>优点</mark>:大家都遵循同样的规则写代码，代码可读性明显提高了，方便后期的维护。

<mark>缺点</mark>：没有专门提供事件机制


- 使用vue特有的模板语法
    - 差值表达式
    - 指令
    - 事件绑定
    - 属性绑定
    - 样式绑定
    - 分支循环结构

### 2 指令

##### （1）什么是指令
- 什么是自定义属性
- 指令的本质就是自定义属性
- 指令的格式：以v-开始（比如：v-cloak）

##### v-cloak
- 插值表达式存在的问题：“闪动”
<mark>也就是页面在现实的瞬间模板并没有进行替换，而是显示的是本来的内容包括花括号，之后才进行渲染</mark>
- 如何解决该问题：使用v-cloak指令
- 解决该问题的原理：先隐藏，替换好值之后再显示最终的值

<strong>使用指令：https://cn.vuejs.org/v2/api/</strong>

##### 数据绑定指令
- v-text
更新元素的 textContent。如果要更新部分的 textContent，需要使用 {{ Mustache }} 插值。
- v-html
值为HTML结构，更新元素的 innerHTML。注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译。如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代。
<strong>注意</strong>
在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。只在可信内容上使用 v-html，永不用在用户提交的内容上。
- v-pre
显示原始信息，跳过编译过程（分析编译过程）

