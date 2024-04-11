// 1.forEach
let arr = ['jim', 'tom', 'jack', 'kim']
Array.prototype.andyForEach = function (func) {
    if (this === null) {
        throw new TypeError(`Cannot read properties of null (reading 'forEach')`)
    }
    if (typeof func !== 'function') {
        throw new TypeError(func + ' is not a function')
    }
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr)
    }
}
// arr.andyForEach((item, index) => {
//     console.log(item)
//     console.log(index)
// })

// 2.map
Array.prototype.andyMap = function (func) {
    if (this === null) {
        throw new TypeError(`Cannot read properties of null (reading 'map')`)
    }
    if (typeof func !== 'function') {
        throw new TypeError(func + ' is not a function')
    }
    let arr = this
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i], i, arr))
    }
    return newArr
}
// const arrMap = arr.andyMap((item, index) => {
//     return `${index}-${item}`
// })
// console.log(arrMap)

// 3.filter
Array.prototype.andyFilter = function (func) {
    if (this === null) {
        throw new TypeError(`Cannot read properties of null (reading 'filter')`)
    }
    if (typeof func !== 'function') {
        throw new TypeError(func + ' is not a function')
    }
    let arr = this
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
// const arrFilter = arr.andyFilter((item) => {
//     return item !== 'kim'
// })
// console.log(arrFilter)

// 4.some
Array.prototype.andySome = function (func) {
    if (this === null) {
        throw new TypeError(`Cannot read properties of null (reading 'some')`)
    }
    if (typeof func !== 'function') {
        throw new TypeError(func + ' is not a function')
    }
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
           return true
        }
    }
    return false
}
// const ret = arr.andySome((item, index, arr) => { return item === 'bim'})
// console.log(ret)

// 5.every
Array.prototype.andyEvery = function (func) {
    if (this === null) {
        throw new TypeError(`Cannot read properties of null (reading 'every')`)
    }
    if (typeof func !== 'function') {
        throw new TypeError(func + ' is not a function')
    }
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            return false
        }
    }
    return true
}
// const ret = arr.andyEvery((item, index, arr) => { return item.length > 4})
// console.log(ret)

// 6.find
Array.prototype.andyFind = function (func) {
    if (this === null) {
        throw new TypeError(`Cannot read properties of null (reading 'find')`)
    }
    if (typeof func !== 'function') {
        throw new TypeError(func + ' is not a function')
    }
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return arr[i]
        }
    }
    return undefined
}

// 7.findIndex
Array.prototype.andyFindIndex = function (func) {
    if (this === null) {
        throw new TypeError(`Cannot read properties of null (reading 'findIndex')`)
    }
    if (typeof func !== 'function') {
        throw new TypeError(func + ' is not a function')
    }
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return i
        }
    }
    return -1
}

// 8.reduce
Array.prototype.andyReduce = function (func, initialValue) {
    if (this === null) {
        throw new TypeError(`Cannot read properties of null (reading 'reduce')`)
    }
    if (typeof func !== 'function') {
        throw new TypeError(func + ' is not a function')
    }
    let arr = this
    let prev = initialValue ? initialValue : arr[0]
    let len = initialValue ? arr.length : arr.length - 1
    for (let i = 0; i < len; i++) {
        let cur = initialValue ? arr[i] : arr[i + 1]
        prev = func(prev, cur, i, arr)
    }
    return prev
}

// 9.reduceRight
Array.prototype.andyReduceRight = function (func, initialValue) {
    if (this === null) {
        throw new TypeError(`Cannot read properties of null (reading 'reduceRight')`)
    }
    if (typeof func !== 'function') {
        throw new TypeError(func + ' is not a function')
    }
    let arr = this
    let prev = initialValue ? initialValue : arr[arr.length - 1]
    let len = arr.length - 1
    const num = initialValue ? -1 : 0
    for (let i = len; i > num; i--) {
        let cur = initialValue ? arr[i] : arr[i - 1]
        prev = func(prev, cur, i, arr)
    }
    return prev
}
// let arr3 = arr.andyReduce((prev, cur, index, arr) => { return `${prev}-${cur}`}, 'sum')
// let arr4 = arr.andyReduceRight((prev, cur, index, arr) => { return `${prev}-${cur}`})
// console.log(arr3)
// console.log(arr4)


