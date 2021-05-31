var uid = 0
export default class Dep {
  constructor() {
    console.log('我是dep构造器');

    this.id = uid++
    // 订阅者subscribes
    // 这个数组里放的是watcher的实例
    this.subs = []

  }
  // 添加订阅
  addSub(sub) {
    this.subs.push(sub)
  }
  // 添加依赖
  depend() {
    // Dep.target就是一个我们自己指定的全局的位置，
    if (Dep.target) {
      this.addSub(Dep.target)
    }
  }
  // 通知更新
  notify() {
    console.log('notify');
    // 浅克隆一份
    const subs = this.subs.slice()
    // 遍历
    for (let i = 0, len = subs.length; i < len; i++) {
      subs[i].update()
    }
  }
}