const Stack = require('./Lib/Stack')

let texto = 'SOCORRAM-ME SUBI NO ÔNIBUS EM MARROCOS'

let pilha = new Stack()

for(let i = 0; i < texto.length; i++) {
    // Inserindo na pilha SEMPRE no final, usando push()
    pilha.push(texto.charAt(i))
}

console.log(pilha)

let invertido = ''

while(pilha.size() > 0) { // Enquanto a pulha não estiver vazia.
    // Retirando da pilha: SEMPRE no final,usando pop()
    invertido += pilha.pop()
}
console.log(invertido)