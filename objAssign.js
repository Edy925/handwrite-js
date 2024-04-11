Object.andyAssign = function (target) {
    const argLen = arguments.length
    if (target === null || target === undefined || argLen === 0) {
        throw new TypeError('Cannot convert undefined or null to object')
    }
    // 如果参数的个数是1，直接返回target
    if (argLen === 1) {
        if (target instanceof Object) {
            return target
        } else {
            if (typeof target === 'Number') {
                return new Number(target)
            } else if (typeof target === 'boolean') {
                return new Boolean(target)
            } else if (typeof target === 'string') {
                return new String(target)
            }
        }

    } else {
        let ret = Object(target)
        for (let i = 1; i < argLen; i++) {
            const param = arguments[i] // param是个对象
            if (param === null || param === undefined) {
                continue
            }
            for (const paramKey in param) {
                if (param.hasOwnProperty(paramKey)) {
                    ret[paramKey] = param[paramKey]
                }
            }
        }
        return ret
    }
}

let box = {
    color: 'blue',
    width: 200,
    height: 300
}
let obj1 = Object.assign({}, box) // {color: "blue", width: 200, height: 300}
let obj2 = Object.andyAssign({gender: 'nv'}, box)
console.log(obj1)
console.log(obj2)

// param.hasOwnProperty(paramKey)用于检查param对象是否具有paramKey作为自身属性。
// 如果去掉这个判断条件，
// 那么在执行for...in循环时，不仅param对象的自身属性会被复制到ret对象，
// param对象从其原型链上继承的属性也会被复制到ret对象。
// 这可能会导致不期望的结果，因为通常我们只希望复制对象的自身属性，而不是它继承的属性。
// 所以，如果你确定只需要复制对象的自身属性，
// 那么应该保留param.hasOwnProperty(paramKey)这个判断条件。

