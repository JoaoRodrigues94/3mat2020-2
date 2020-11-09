const LinkedList = require('./Lib/LinkedList')

let lista = new LinkedList()
// console.table(lista)
console.log(lista.toString())

lista.push(19)
console.log(lista.toString())

lista.push(5)
console.log(lista.toString())

lista.push(33)
console.log(lista.toString())

// Inserção na última posição.
lista.insertAt(3,50)
console.log(lista.toString())

// Inserção na primeira posição
lista.insertAt(0,12)
console.log(lista.toString())

lista.insertAt(2, -4)
console.log(lista)