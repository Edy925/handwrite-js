// 在 JavaScript 中，instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。如果出现，则返回 true，否则返回 false。

// instanceof 运算符的语法如下： object instanceof constructor
// 其中，object 是要检测的对象，constructor 是某个构造函数。  以下是一个使用 instanceof 的例子：

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);
console.log(auto instanceof Car);
// expected output: true
console.log(auto instanceof Object);

console.log(auto.__proto__ === Car.prototype)
console.log(auto.__proto__.__proto__ === Object.prototype)
// expected output: true
// auto 是 Car 和 Object 的实例，因此 auto instanceof Car 和 auto instanceof Object 都返回 true。

function andyInstanceof(left, right) {
    let prototype = right.prototype
    left = left.__proto__
    while (true) {
        if (left === null || left === undefined) {
            return false
        }
        if (prototype === left) {
            return true
        }
        left = left.__proto__
    }
}


// Promise.resolve().then(() => {
//     console.log(0);
//     return Promise.resolve(4);
// }).then(() => {
//     console.log(9)
// }).then((res) => {
//     console.log(res)
// })
//
// Promise.resolve().then(() => {
//     console.log(1);
// }).then(() => {
//     console.log(2);
// }).then(() => {
//     console.log(3);
// }).then(() => {
//     console.log(5);
// }).then(() =>{
//     console.log(6);
// })
//
// Promise.resolve().then(() => {
//     console.log(7);
// }).then(() => {
//     console.log(8);
// })


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
