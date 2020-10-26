/*
    Estrututa de Dados Deque
    Deque = Duble Ended Queue (fila de duas pontas)
*/
module.exports = class Deque {
    constructor(){
        this.data = []      // Armazenamento
    }

    insertFront() {         // Inserção no início
        this.data.unshift(value)
    }

    insertRear(value) {   //Inserção no final
        this.data.push(value)
    }

    removeFront(){ // Remoção do início
        return this.data.shift()
    }

    removeRear() {      // Remoção do final
        return this.data.pop()
    }

    peekFront(){     //"Olhadinha" no início
    return this.data[0]
    } 

    peekRear() {
        return this.data[this.data.length - 1]
    }

    size() {
        return this.data.length
    }
}