# React

## React 引入 js

```js
    <script src="./js/react.development.js"></script>
    <!-- 引入React-DOM, 向外暴露一个函数ReactDOM -->
    <script src="./js/react-dom.development.js"></script>
    <!-- 只引入babel并不能生效，还需要进行配置 -->
    <script src="./js/babel.min.js"></script>
```

## React 创建虚拟 Dom 对象

```js
<script type="text/babel">
  // 1. 创建虚拟DOM对象 const vDom = <h1>hello react</h1>;
  //JSX浏览器时不识别的，所以需要引入babel来编译 // const vDom1=''
  <h1>hello react</h1>'; // 过去JS中，标签字符串 // 2. 将虚拟DOM对象渲染到页面指定容器中
  ReactDOM.render(vDom, document.getElementById("root"));
</script>
```

## JSX

```js
JSX：
语法：
    1. 以<开头，如果里面是html元素，最终会被解析成html元素，如果不是，会特殊解析
    2.(SX语法内)以{开头，里面代码就会当做JS代码解析
    注意 {JS表达式}
作用：创建虚拟DOM对象
JSX语法最终都会经过babel编译，编译上面的JS语法
```

## 定义组件有哪些注意事项

```js
    1. 组件名首字母必须大写
      原因是：
        JSX一旦标签 <myComponent1 /> 首字母小写就会当做html元素解析，
        但是html中没有myComponent1这个元素就会报错
        所以首字母大写 <MyComponent1 />，就会当做组件解析
        内部会判断是工厂函数还是ES6类组件
    2. 内部返回虚拟DOM对象元素必须有结束符
        单标签自结束标签
        双标签
    3. 内部返回多个虚拟DOM对象，必须有且有一个根标签
```

## 工厂函数组件和 ES6 类组件的区别

```js
    1. this不一样
      工厂函数没有this
      ES6类组件函数中有this
    2. 功能不一样
      因为工厂函数没有this，有些功能默认实现不了
      因为ES6类组件有this，所以可以实现
  总结：
    工厂函数组件一般用来定义功能简单组件
    ES6类组件一般用来定义功能复杂组件

```

## ES6 类组件 实例对象三大属性 state 状态

```js
作用：用来更新用户界面
    使用：
      1. 初始化状态
        constructor() {
          super();
          this.state = { xxx }
        }
        --> 简写
        state = {
          xxx
        }
      2. 读取状态
        this.state.xxx
      3. 更新状态
        this.setState({ xxx })

    在React 类组件中，this指向：
      1. 如果是生命周期函数中，this指向组件实例对象 constructor / render
      2. 如果在其他自定义函数中，this默认指向undefined（严格模式）
        需求: 需要将 其他自定义函数 this 指向组件实例对象
        解决：箭头函数

```

## props

```js
    父 --> 子 通信 使用普通属性
    子 --> 父 通信 使用函数属性
    以标签属性方式（props）给子组件传递数据
```

## props 使用

```js
import PropTypes from "prop-types"; // 用来对props类型检查的库

// 对传入的props进行类型/必要性检查
static propTypes = {
    xxx: PropTypes.string.isRequired, // 必要
    xxx: PropTypes.number, // 可选
    updatePerson: PropTypes.func.isRequired,
    //函数类型 缩写（func）
  };

// 给props默认值
  static defaultProps = {
    xxx: 18,
    xxx: "女",
  };
// 读取props
    const { xxx, xxx } = this.props;
```

## 类的定义

```js
class 定义类
  extends 继承
  constructor 类的构造方法
  super() 调用父类的构造方法 / super.xxx() 调用父类的xxx方法
  static 定义类的静态方法
   （类的直接方法，只有类可以使用，实例对象不能使用）
    普通方法是实例对象可以使用，类不能使用
```

## ref 使用

```js
// 给实例对象添加属性
inputRef = React.createRef();
// console.log(this.inputRef); // 没有挂载ref {current: null}
// console.log(this.inputRef); // 挂载ref {current: input}
const value = this.inputRef.current.value.trim();

触发事件元素和要收集数据元素是同一个元素，就e.target 反之ref
```

## 受控组件 函数柯里化 提示：高阶函数（执行函数返回值是一个新函数）

```js
通过 state 和 onChange 事件来自动收集表单数据

 函数柯里化：
      function fn(a, b) { return a + b} 普通函数
        --> 经过函数柯里化处理的函数
          function fn(a) {
            return function (b) {
              return a + b;
            }
          }
      闭包的典型应用
```
