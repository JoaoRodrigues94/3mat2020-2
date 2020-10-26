/*
    Estrutura de dados pilha
    Inserção e remoções sempre no final da estrutura
    seu funcionamento pode ser resultado pela seigla LIFO
    (Last In, First Out) = Último a entrar, primeiro a sair
*/


module.exports = class Stack {
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

    // Retorna o número de elementos da pilha
    size() {
        return this.data.length
    }
}