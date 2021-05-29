import {def} from './utils'
import defineReactive from './defineReactive'

export default class Observer {
  constructor(value) {
    console.log('我是Observer构造器', value);
    def(value, '__ob__', this, false)
    // 遍历
    this.walk(value)
  }

  // 遍历
  walk(value) {
    for (let key in value) {
      defineReactive(value, key)
    }
  }
}