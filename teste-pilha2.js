const Stack = require('./Lib/Stack.js')

let pilha = new Stack()
console.log(pilha)

pilha.push(34)
pilha.push(19)
pilha.push(48)

let x = pilha.pop()

console.log(pilha)
console.log('X: ', x)

console.log(pilha.peek())
console.log(pilha.size())