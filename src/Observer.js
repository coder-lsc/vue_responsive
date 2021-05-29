import { def } from './utils'
import defineReactive from './defineReactive'
import { arrayMethods } from './array'
import observe from './observe'

export default class Observer {
  constructor(value) {
    console.log('我是Observer构造器', value);
    def(value, '__ob__', this, false)
    if (Array.isArray(value)) {
      // 如果是数组 要劫持
      Object.setPrototypeOf(value, arrayMethods)
      // 让数组变得observe
      this.observeArray(value)
    } else {
      // 遍历
      this.walk(value)
    }
  }

  // 遍历
  walk(value) {
    for (let key in value) {
      defineReactive(value, key)
    }
  }
  observeArray(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
      // 逐项进行observe
      observe(arr[i])
    }
  }
}