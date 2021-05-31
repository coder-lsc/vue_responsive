import Dep from './Dep'
import observe from './observe'

export default function defineReactive(data, key, val) {
  const dep = new Dep()

  if(arguments.length == 2) {
    val = data[key]
  }
 
  let childOb = observe(val)

  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('你试图访问的' + key + '属性');
      // 如果现在处于依赖收集阶段
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
        }
      }
      return val
    },
    set(newValue) {
      console.log('你试图改变的' + key + '属性', newValue);
      if (val === newValue) return
      val = newValue
      childOb = observe(val)

      // 发布订阅模式 通知Dep
      dep.notify()
    }
  })
}