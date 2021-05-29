

import observe from './observe'

var obj = {
  a: {
    m: {
      n: 5
    }
  },
  b: 10
}



observe(obj)
obj.a.m.n++
obj.b++