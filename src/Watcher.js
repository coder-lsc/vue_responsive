import Dep from "./Dep";

var uid = 0
export default class Watcher {
  constructor(target, expression, callback) {
    console.log('我是watcher构造器');
    this.id = uid++
    this.target = target
    this.getter = parsePath(expression)
    this.callback = callback
    this.value = this.get()
  }
  update() {
    this.getAndInvoke(this.callback)
  }
  get() {
    // 进入依赖收集阶段 让全局的Dep.target设置为watcher本身，进入依赖收集阶段
    Dep.target = this

    const obj = this.target

    var value

    try {
      value = this.getter(obj)
    } finally {
      Dep.target = null
    }

    return value
  }
  getAndInvoke(cb) {
    const value = this.get()

    if(value !== this.value || typeof value == 'object') {
      const oldValue = this.value
      this.value = value
      cb.call(this.target, value, oldValue)
    }
  }
}

function parsePath(str) {
  var segments = str.split('.')

  return (obj) => {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return 
      obj = obj[segments[i]]
    }
    return obj
  }
}