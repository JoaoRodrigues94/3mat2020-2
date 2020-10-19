class Stack {
    constructor() {
        this.data = [] // Armazenamento
    }

    // Inserção
    push(value) {
        this.data.push(value)
    }

    // Remoção
    pop() {
        return this.data.pop()
    }

    // Verificar o último elemento ("olhadinha")
    peek() {
        return this.data[this.data.length - 1]
    }

    // Retorna o número de elementos na pilha
    size() {
        return this.data.length
    }
}

/*
let pilha = new Stack()
pilha.push(10)
pilha.push(8)
pilha.push(15)
pilha.push(2)
//pilha.unshift(4)

console.log(pilha)

console.log(pilha.pop())
console.log(pilha)

console.log(pilha.peek())
console.log(pilha)

console.log('Tamanho: ', pilha.size())
pilha.push(-9)
console.log(pilha)
console.log('Tamanho: ', pilha.size())
*/

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