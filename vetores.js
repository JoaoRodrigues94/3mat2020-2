// Declarar um vetor em JS.
let vetor1 = []  // Forma "Moderna".
let vetor2 = Array() // Forma "Tradicional".

// Declarando vetores já com valores.
let vetor3 = ['azul', 'vermelho', 'verde']
let vetor4 = Array(2, 3, 5, 7)

//Como adicionar novos valores a um vetor.

//Forma 1: push() -> Adiciona novos itens no final do vetor.
vetor1.push('laranja')
vetor1.push('melancia')
vetor1.push('pera')

//Forma 2: unshift() -> Adiciona novos itens no inicio do vetor.
vetor1.unshift('jabuticaba')
vetor1.unshift('acerola')

//Forma 3: splice() -> Insere itens em posições específicas.
// 1° parâmetro: posição de inserção.
// 2° parâmetro: quantidade de elementos serão apagados.
// 3° parâmetro: item a ser inserido.
vetor1.splice(3, 0, 'abacaxi') 
vetor1.splice(2, 0, 'uva')
vetor1.splice(4, 1, 'maçã')

console.log(vetor1)

// Remoção de itens de um vetor.

// Forma 1: pop() -> Remove item do FINAL do vetor.
let removido = vetor1.pop()
let removido2 = vetor1.pop()

console.log(vetor1, removido, removido2)

// Forma 2: shift() -> Remove iten do INICIO do vetor.
let removido3 = vetor1.shift()
let removido4 = vetor1.shift()

console.log(removido3, removido4)

// Acrescentando mais elementos
vetor1.push('abacate')
vetor1.push('morango')
console.log(vetor1)

// Forma 3: splice() -> Remove item em um determinado lugar.
// O splice sempre retornará um VETOR como resultado, mesmo que
// o número de elementos removidos esteja entre 0 e 1.
let removido5 = vetor1.splice(3, 1)

console.log(vetor1, removido5)