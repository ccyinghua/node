## module.exports 
> (相当于export default默认输出)

1. 返回一个JSON Object

```javascript
var exp = {"version": "1.0.0", "function1": null, "module1": null};
module.exports = exp;

```
2. 用于返回一些全局共享的常量或者变量

```javascript
//MATH.js
var MATH = { "pi":3.14,"e":2.72 }
module.exports = MATH;

调用方式
var MATH = require("./MATH")
console.log(MATH.pi); 

```
3. 这种方式还可以用于返回几个require的其他模块，可以实现一次require多个模块

```javascript
// module_collection.js
var module_collection = {
   "module1": require("./module1"),
   "module2": require("./module2"),
};
module.exports = module_collection;

调用方式为
var module_collection = require("./module_collection");
var module1 = module_collection.module1;
var module2 = module_collection.module2;
// Do something with module1 and module2

```
4. 通常可以返回几个函数

```javascript
// functions.js
var func1 = function() {
   console.log("func1");
};
var func2 = function() {
   console.log("func2");
}; 
exports.function1 = func1;
exports.function2 = func2;
 
调用方式为
var functions = require("./functions");
functions.function1();
functions.function2();

```
5. 返回一个构造函数，也就是一个类

```javascript
// CLASS.js
var CLASS = function(args) {
   this.args = args;
} 
CLASS.prototype.func = function() {
   console.log("CLASS.func");
   console.log(this.args);
};
module.exports = CLASS;
 
调用方法为
var CLASS = require("./CLASS")
var c = new CLASS("arguments");

```
6. 返回一个普通函数

```javascript
// func.js
var func = function() {
   console.log("this is a testing function");
}; 
module.exports = func;
 
调用方法为
var func = require("./func");
func();

```
7. 返回一个对象object

```javascript
// CLASS.js
var CLASS = function() {
   this.say_hello = "hello";
}; 
CLASS.prototype.func = function() {
   console.log("I say " + this.say_hello);
}; 
module.exports = new CLASS();
 
调用方法为
var obj = require("./CLASS");
obj.func();

```
## exports

```javascript
User.js
// 默认输出一个json对象
module.exports = {
    userName:"Jack",
    sayHello:function(){
        return 'Hello';
    }
}

// 以json对象里的key进行输出
exports.userName = "Jack";
exports.sayHello = function(){
    return 'Hello';
}

```

```javascript
Demo.js
let user = require('./User.js');

console.log(`userName:${user.userName}`);

console.log(`I am ${user.userName},I say ${user.sayHello()}`);
```

```
// 两种输出结果都是一样的
命令行输入：node Demo.js
运行结果：
    userName:Jack
    I am Jack,I say Hello
```



