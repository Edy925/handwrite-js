// Object.create创建一个新对象， 使用现有对象作为新创建对象的原型。
// 然后将所有的属性赋值到新对象上， 然后
Object.andyCreate = function (obj, properties) {
    let F = function () {}
    F.prototype = obj
    if (properties) {
        Object.defineProperty(F, properties)
    }
    return new F()
}

// Object.create()方法在JavaScript中有很重要的作用，主要体现在以下几个方面：
// 1.原型继承：Object.create()方法可以创建一个新对象，并将这个新对象的原型设置为传入的参数对象。这样，新对象就可以继承参数对象的所有属性和方法。这是实现原型继承的一种方式。
// 2.创建纯净的空对象：如果你想创建一个完全空的对象（即没有任何属性和方法的对象），你可以使用Object.create(null)。这个新创建的对象没有原型，因此它不继承任何属性和方法。
// 3.创建具有特定原型的新对象：如果你想创建一个新对象，并且你已经有了一个现有的对象，你希望新对象能够继承现有对象的所有属性和方法，你可以使用Object.create()方法。例如，let newObj = Object.create(existingObj)，这样newObj就会继承existingObj的所有属性和方法。
// 4.多重继承：虽然JavaScript不直接支持多重继承，但你可以通过Object.create()方法实现类似的效果。你可以创建一个新对象，然后将多个现有对象的属性和方法复制到新对象中。
// 总的来说，Object.create()方法提供了一种灵活的方式来创建新对象，并控制新对象的原型。这对于实现继承、创建纯净的空对象、创建具有特定原型的新对象等任务非常有用。

// 在JavaScript中，我们不能直接实现多重继承，但我们可以通过Object.create()和Object.assign()方法来模拟实现
// 定义两个基类
function Base1() {
    this.showBase1 = function() {
        console.log('Base1 method called');
    }
}

function Base2() {
    this.showBase2 = function() {
        console.log('Base2 method called');
    }
}

// 创建两个基类的实例
let base1 = new Base1();
let base2 = new Base2();

// 创建一个新对象，它的原型是base1，这样就继承了base1的方法
let obj = Object.create(base1);

// 使用Object.assign()方法将base2的所有属性复制到新对象中，这样就继承了base2的方法
Object.assign(obj, base2);

// 现在，新对象obj就同时继承了base1和base2的方法
obj.showBase1(); // 输出: "Base1 method called"
obj.showBase2(); // 输出: "Base2 method called"
