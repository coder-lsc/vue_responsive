
import Watcher from './Watcher'
import observe from './observe'

var obj = {
  a: {
    m: {
      n: 5
    }
  },
  b: [10, 20]
}



observe(obj)
new Watcher(obj, 'a.m.n', (val) => {
  console.log('-----aaaaaaa-----', val);
})
obj.a.m.n++