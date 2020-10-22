module.exports = class Stack {
    constructor() {
        this.data = {} // Armazenamento
        this.count = 0
    }

    // Inserção
    push(value) {
       this.count ++
       this.data[this.count] = value
    }

    // Remoção
    pop() {
        let value = this.data[this.count]
        delete this.data[this.count] // Remove o atributo do objeto
        this.count--
        return value
    }

    // Verificar o último elemento ("olhadinha")
    peek() {
        return this.data[this.count]
    }

    // Retorna o número de elementos da pilha
    size() {
        return this.count
    }
}