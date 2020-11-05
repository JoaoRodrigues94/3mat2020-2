const Deque = require('./Lib/Deque2')

let fila = new Deque()

//Inserção ao final da fila (como uma fila tradicional)
fila.insertRear('Jurema')
fila.insertRear('Basílio')
fila.insertRear('Ricardo')
fila.insertRear('Fudencio')

console.log(fila)

// Fura-fila: iinserção no início.
fila.insertFront('Marizete')

console.log(fila)

// Desistência: remoção do final da fila
let desistente = fila.removeRear()

console.log({desistente})
console.log(fila)

// Fura-fila
fila.insertFront('Alipio')
console.log(fila)

// Inserindo no final da fila
fila.insertRear('Otila')
console.log(fila)

// Removendo do Início da fila
let removido = fila.removeFront()
console.log({removido})
console.log(fila)