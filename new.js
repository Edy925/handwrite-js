function andyNew() {
    let obj = new Object()
    let Constructor = [].shift.call(arguments)

    let F = function () {}
    F.prototype = Constructor.prototype
    obj = new F()
    let ret  = Constructor.apply(obj, arguments)
    if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
        return ret
    }
    return obj
}

function andyNew1(Obj, ...args) {
    let obj = Object.create(Obj.prototype)
    let ret = Obj.apply(obj, args)
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }
    return obj; //确保构造器总是返回一个对象
}

function Foo(name, age) {
    this.name = name;
    this.age = age
}
let tom = new Foo('tom', 18)

