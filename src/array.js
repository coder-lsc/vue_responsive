import {def} from './utils'

// 得到Array.prototype
const arrayPrototype = Array.prototype

// 以Array.prototype为原型创建arrayMethods对象
export const arrayMethods = Object.create(arrayPrototype)

// 要被改写的7个数组方法
const methodsNeedChange = ['push','pop','shift','unshift','splice','sort','reserve']

methodsNeedChange.forEach(methodName => {
  // 备份原来的方法
  const original = arrayPrototype[methodName]
  // 定义新的方法
  def(arrayMethods, methodName, function() {

    const res = original.apply(this, arguments)

    // 把这个数组上的__ob__取出,__ob__已经被添加了, 因为数组肯定不是最高项
    const ob = this.__ob__
    // 有三种方法push/unshift/splice能够插入新项，现在要把插入的新项也要变为observe的
    let inserted = []
    // 将类数组对象arguments转换成数组
    const args = [...arguments]
    switch (methodName) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        // splice格式是splice(下标，数量，插入的新项)
        inserted = args.slice(2)
        break;
    }
    if (inserted) {
      ob.observeArray(inserted)
    }

    ob.dep.notify()
    
    return res
  }, false)
})