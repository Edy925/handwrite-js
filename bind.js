
// this instanceof newFunc 这个表达式是在判断 this 是否是 newFunc 的实例。
// 在 JavaScript 中，instanceof 运算符用于测试构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
// 如果出现，则返回 true，否则返回 false。
// 在这个特定的代码片段中，newFunc 是一个空函数，它的作用主要是作为一个中介，
// 连接 retFunc（返回的新函数）和原始函数的原型链。
// 当 retFunc 作为构造函数被调用（即通过 new 关键字）时，
// this 就会指向新创建的实例，
// 此时 this instanceof newFunc 就会返回 true。
// 这是因为新创建的实例的原型链上包含了 newFunc.prototype。
// 如果 retFunc 作为普通函数被调用，this 就会指向全局对象（在非严格模式下）或者是 undefined（在严格模式下），
// 此时 this instanceof newFunc 就会返回 false。
// 这个判断的目的是为了在 retFunc 作为构造函数被调用时，
// 能正确地将 this 指向新创建的实例，而不是 context。
Function.prototype.andyBind = function (context) {
    if (typeof this !== "function") {
        throw new Error("Error");
    }
    let self = this;
    let args = [...arguments].slice(1);
    let newFunc = function () {};
    let retFunc = function () {
        const bindArgs = [...arguments].slice()
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        return self.apply(this instanceof newFunc ? this : context, args.concat(bindArgs))
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    newFunc.prototype = self.prototype;
    retFunc.prototype = new newFunc();
    return retFunc
}
// 测试代码
let colors = {
    color: 'red'
}

function box(width, height) {
    this.length = 20
    console.log(width)
    console.log(height)
    console.log(this.color)
}
box.prototype.price = 666

let mybox = box.andyBind(colors, 200)
mybox(300)  // 200, 300, red mybox作为普通函数，this指向了colors
let yourBox = new mybox(300) // 200, 300, undefined
// console.log(yourBox.length, yourBox.price) // 20 ,600 mybox作为构造函数，this指向了实例yourBox


// 扩展知识 原型 原型链
// 在 JavaScript 中，每个对象都有一个特殊的内部属性（[[Prototype]]），
// 它就是对于其他对象的引用。这个被引用的对象被称为原型。
// 每个对象从其原型中继承属性。这种关系形成了一种链式结构，我们称之为原型链。
// 当我们试图访问一个对象的属性时，JavaScript 会首先在该对象本身的属性中寻找。
// 如果没有找到，那么 JavaScript 会在对象的原型（即 [[Prototype]] 属性所指向的对象）中寻找，
// 如果还是没有找到，那么就会去原型的原型中寻找，
// 此类推，直到找到属性或者达到原型链的末端（null）。
// 这就是原型链的工作原理。
// 例如，当我们创建一个新的数组，它的原型就是 Array.prototype，
// 而 Array.prototype 的原型就是 Object.prototype，
// Object.prototype 的原型是 null
let arr = [1, 2, 3];
// console.log(arr.__proto__ === Array.prototype); // true
// console.log(arr.__proto__.__proto__ === Object.prototype); // true
// console.log(arr.__proto__.__proto__.__proto__ === null); // true

// 一个数组的arr 的原型就是Array.prototype
//  Array.prototype 的原型就是 Object.prototype，
// Object.prototype 的原型是 null


// 构造函数
function Person(name) {
    this.name = name;
}

let person = new Person('John');
// console.log(person.name);  // 输出：John

// 普通函数
function greet() {
    console.log('Hello, ' + this.name);
}

// greet.call(person);  // 输出：Hello, John
