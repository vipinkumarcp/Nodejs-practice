// CommonJS ..every file in node is  module(by default)
// Modules Enscapsulate code


const john = 'John'
const mary = 'Mary'

const greeting = (name) => {

    console.log(`Hello ${name}`)
}
module.exports = greeting

// greeting(john)
// greeting(mary)
// greeting('ravi')