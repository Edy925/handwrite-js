// 对象属性迭代器
// 迭代器是帮助我们对某个数据结构进行遍历的对象。
// 在JavaScript中，迭代器也是一个具体的对象，这个对象需要符合迭代器协议（iterator protocol）。
// 迭代器协议定义了产生一系列值（无论是有限还是无限个）的标准方式。
// 在js中这个标准就是一个特定的next方法。

// next方法有如下的要求：
// 一个无参数或者一个参数的函数，返回一个应当拥有以下两个属性的对象：
// done（boolean）
// 如果迭代器可以产生序列中的下一个值，则为 false。（这等价于没有指定 done 这个属性。）
// 如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。

// value
// 迭代器返回的任何 JavaScript 值。done 为 true 时可省略。但是一般将value设置为undefined。

function createArrayIterator(arr) {
    let index = 0
    return {
        next: function() {
            return { done: index < arr.length, value: arr[index++] }
        }
    }
}

// 测试
const nums = [11, 22, 33, 44]
const numsIterator = createArrayIterator(nums)
console.log(numsIterator.next()) // { done: false, value: 11 }
console.log(numsIterator.next()) // { done: false, value: 22 }
console.log(numsIterator.next()) // { done: false, value: 33 }
console.log(numsIterator.next()) // { done: false, value: 44 }
console.log(numsIterator.next()) // { done: true, value: undefined }

function createIterator(arr) {
    let index = 0
    return {
        next: function () {
            if (index < arr.length) {
                return { done: false, value: arr[index++]}
            } else {
                return { done: true, value: undefined}
            }
        }
    }
}

// 对象属性迭代器
const obj = {
    name: 'dora',
    age: 3,
    city: 'beijing'
}
// 用Object.defineProperty
Object.defineProperty(obj, Symbol.iterator, {
    writable:false,
    enumerable: false,
    configurable: true,
    value: function () {
        const self = this
        let index = 0
        const keys = Object.keys(self)
        return {
            next: function () {
                return {
                    done: index > keys.length,
                    value: self[keys[index++]]
                }
            }
        }
    }
})

// 添加Symbol.iterator 迭代属性
obj[Symbol.iterator] = function () {
    let index = 0
    const keys = Object.keys(this)
    const self = this
    return {
        next: function () {
            return {
                done: index > keys.length,
                value: self[keys[index++]]
            }
        }
    }
}

for (const val of obj) {
    console.log(val)
}
// for (const objKey in obj) {
//     console.log(obj[objKey])
// }
