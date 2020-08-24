// Caracteristica da Função abaixo
// - tem apenas um parametro
// - possui uma única linha de código com return
let quadrado = function(x) {
    return x * x
}

// Arrow function: sintaxe simplificada
// - Não usa a palavra-chave function
// - O unico argumento não precisa de parênteses
// - Entre o argumento e o corpo da função vem o sinal de =>(arrow, flecha)
// - A unica linha de código não precisa nem de {} nem de palavra-chave return
let quadrado2 = x => x * x

console.log(quadrado(7))
console.log(quadrado2(7))

let potencia = function (base, exp) {
    return base ** exp
}

// Quando o número de argumentos != 0, os parênteses da lista
// de argumentos precisam ser mantidos
let potencia2 = (base, exp) => base ** exp

console.log(potencia(2, 5))
console.log(potencia2(2, 5))