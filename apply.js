// apply 是 JavaScript 中的一个方法，
// 它的主要作用是改变函数运行时的上下文，即改变函数内部 this 的指向。
// apply 方法可以让一个函数在一个特定的对象上下文中执行，
// 这个对象将会成为函数运行时的 this。

// apply 方法
//   第一个参数是要用作 this 的对象，
//   第二个参数是一个数组或类数组对象，其中的数组元素将作为单独的参数传给 func。
// 使用场景包括：
//   借用其他对象的方法：如果两个不同的对象有相同的方法，你可以使用 apply 来借用一个对象的方法给另一个对象使用。
//   在特定的上下文中调用函数：如果你有一个函数，你想在一个特定的对象上下文中调用它，你可以使用 apply。
// 参数展开：apply 方法可以接受一个参数数组，这使得它可以用于某些需要参数展开的情况。
Function.prototype.andyApply = function (context, arr) {
    if (typeof this !== 'function') {
        throw new TypeError('not a function')
    }
    context = context || window
    context.fn = this
    let ret
    if (arr) {
        ret = context.fn()
    } else {
        ret = context.fn(...arr)
    }
    delete context.fn
    return ret
}


// apply 和 call 都是 JavaScript 中的函数方法，它们的主要作用是改变函数运行时的上下文，即改变函数内部 this 的指向。
// 它们都可以让一个函数在一个特定的对象上下文中执行，这个对象将会成为函数运行时的 this。
// 它们的主要区别在于参数的传递方式：
// call 方法接受的是参数列表，它的第一个参数是要用作 this 的对象，其余参数是要传递给函数的参数。
// 例如：func.call(obj, arg1, arg2, arg3)

// apply 方法接受的是一个参数数组，它的第一个参数是要用作 this 的对象，第二个参数是一个数组或类数组对象，其中的数组元素将作为单独的参数传给 func。
// 例如：func.apply(obj, [arg1, arg2, arg3])
// 在大多数情况下，call 和 apply 可以互换使用。
// 但是，当你需要传递的参数是一个数组时，apply 就会更方便一些。
