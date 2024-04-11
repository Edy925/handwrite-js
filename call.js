// call 是 JavaScript 中的一个方法，
// 它的主要作用是改变函数运行时的上下文 <==> 即改变函数内部 this 的指向。
// call 方法可以让一个函数在一个特定的对象上下文中执行，
// 这个对象将会成为函数运行时的 this。

// call 方法的第一个参数是要用作 this 的对象，
// 其余参数是要传递给函数的参数。
// 使用场景包括：
// 1，借用其他对象的方法：如果两个不同的对象有相同的方法，你可以使用 call 来借用一个对象的方法给另一个对象使用。
// 在特定的上下文中调用函数：如果你有一个函数，你想在一个特定的对象上下文中调用它，你可以使用 call。
// 参数展开：call 方法可以接受一个参数列表，这使得它可以用于某些需要参数展开的情况。
Function.prototype.andyCall = function (context) {
    if (typeof this !== "function") {
        throw new Error("not a function");
    }
    context = context || window // context是第一个参数，作为this将要指向的对象，当传入null或者undefined时指向window
    context.fn = this
    const args = []
    for (let i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments['+i+']')
    }
    const result = eval('context.fn(' + args +')')
    delete context.fn
    return result
}

// eval 是 JavaScript 中的一个全局函数，
// 它的主要作用是执行一段 JavaScript 代码字符串。
// eval 函数接受一个参数，这个参数是一个包含 JavaScript 代码的字符串。
// eval 会执行这个字符串中的代码，并返回最后一个表达式的结果。
// 以下是一个简单的 eval 的使用示例：
let x = 10;
let y = 20;
let code = 'x + y + 100';
console.log(eval(code));  // 输出：130

Function.prototype.yourCall = function (context) {
    if (typeof this !== "function") {
        throw new Error("Error");
    }
    context = context || window;
    context.fn = this;
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn
    return result;
}

var color = 'blue'
let colorObj = {
    color: 'red'
}
function box(width, height) {
    console.log(width)
    console.log(height)
    console.log(this.color)
}
box.andyCall(colorObj, 200, 300)   // 200, 300, red
box.yourCall(colorObj, 200, 300) // 200, 300, red
box.andyCall(null, 200, 300)     // 200, 300, blue
box.yourCall(null, 200, 300)   // 200, 300, blue

// 在JavaScript中，几乎所有的东西都是对象。
// 除了基本数据类型
// （如：Number, String, Boolean, Null, Undefined, Symbol）之外，
// 其他的都可以被视为对象。这包括：
// 函数（Function）
// 数组（Array）
// 日期（Date）
// 正则表达式（RegExp）
// 错误（Error）
// 对象字面量（{}）
// JSON
// Math
// Promise
// Set, Map
// 等等

// 这些都是对象，它们都可以拥有属性和方法。
// 例如，函数可以有自己的属性和方法，
// 数组也可以有自己的属性和方法。
// 这是因为在JavaScript中，
// 对象是一种复合数据类型，它可以包含多个值（属性）和函数（方法）。
