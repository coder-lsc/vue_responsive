

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
obj.a.m.n++
obj.b.push(30, 40)
console.log(obj.b.pop());
obj.b.splice(2,1,[88,99])
