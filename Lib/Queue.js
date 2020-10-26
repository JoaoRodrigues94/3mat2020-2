/*
Estrutura de Dados Fila
Inserção ocorrem ao final da estrutura a remoções, no inicio
Seu funcionamento pode ser resumido pela sigla em inglês FIFO
(First in, First Our) = o primeiro que entra é o primeiro que sai
*/
module.exports = class Queue {
    constructor(){
        this.data = []      //Armazenamento
    }

    //Inserção na fila (enfileiramento)
    enqueue(value) {
        this.data.push(value)
    }

    // Remoção da fila(desenfileiramento)
    dequeue(){
        return this.data.shift()
    }

    // "Olhadinha" no próximo a ser retirado
    peek() {
        return this.data[0]     // Sempre o primeiro elemento
    }

    size() {
        return this.data.length
    }
}