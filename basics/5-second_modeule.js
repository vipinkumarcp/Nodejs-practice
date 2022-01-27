

const names = require('./4-first_module')

const greeting = require('./3-module')
console.log(names)

const car = require('./6-module_exports')
console.log(car)



greeting(names.john)
greeting(names.mary)
greeting('ravi')

console.log(car.items[0])
console.log(car.singleperson.name)

