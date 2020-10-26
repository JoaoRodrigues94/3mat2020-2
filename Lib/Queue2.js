/*
Estrutura de Dados Fila
Inserção ocorrem ao final da estrutura a remoções, no inicio
Seu funcionamento pode ser resumido pela sigla em inglês FIFO
(First in, First Our) = o primeiro que entra é o primeiro que sai
*/
module.exports = class Queue {
    constructor(){
        this.data = {}      //Armazenamento
        this.head = 0       //Cabeça (Início da estrutura)
        this.tail = -1      // CAuda (final da estrutura)
    }

    //Inserção na fila (enfileiramento)
    enqueue(value) {
        this.tail++ // Cria uma nova posição no final da estrutura
        this.data[this.tail] = value
    }

    // Remoção da fila(desenfileiramento)
    dequeue(){
        let value = this.data[this.head]
        delete this.data[this.head]  // Apagar a posição da estrutura
        this.head++  //"Anda a fila", fazendo o próximo chegara para frente
        return value
    }

    // "Olhadinha" no próximo a ser retirado
    peek() {
        return this.data[this.head]     // Sempre o primeiro elemento
    }

    size() {
        return this.tail - this.head + 1
    }
}