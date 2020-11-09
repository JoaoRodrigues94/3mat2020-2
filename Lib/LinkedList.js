/*
Estrutura de dados Lista Encadeada
*/

// Classe auxiliar que representa cada nodo que será inserido
// na lista encadeada
class Node {
    constructor(value) {
        this.data = value  // Armazenamento.
        this.next = null   // Ponteiro para o próximo nodo.
    }
}

module.exports = class LinkedList {
    constructor() {
        this.head = null  //Primeiro nodo
        this.count = 0
    }

    // Inserção no final da lista
    push(value) {
        let node = new Node(value)  // Cria o novo nodo

        if(this.count === 0) { // A lista ainda está vazia
            this.head = node   // O novo nodo torna-se a cabeça da lista
        } 
        else {
            // Começa a procurar a posição da cauda pela cabeça.
            let tail = this.head

            // Percurso dos nodos
            while(tail.next !== null) {
                tail = tail.next
            }
            tail.next = node  // Coloca o nodo no fim da lista
        }
        this.count++
    }
    // Gera uma exibição na lista completa
    toString(){
        let res = '{ '

        // Percurso da lista ligada
        let tail = this.head
        while(tail !== null) {
            res += tail.data  //Concatena o valor do nodo
            // Acrescenta uma vírgula caso não seja o último elemento
            if(tail.next !== null) res += ', '
            tail = tail.next // Passa ao próximo elemento
        }
        res += ' }'
        return res
    }
    //Inserção em uma posição arbitrária
    insertAt(position, value) {
        // A faixa das posições válidas para inserção vai de 0(zero)
        // até this.count (inclusive)
    
    if(position >= 0 && position <= this.count) {
           let node = new Node(value) // Novo nodo

           //Caso particular: inserção em position === this. count (última posição)
           if(position === this.count) this.push(value)

           //Caso particular: position === 0 (primeira posição)
            else if(position === 0) {
                // O novo nodo aponta para o nodo seguinte da cabeça atual
                node.next = this.head
                this.head = node  // O novo nodo passa a ser a cabeça da lista
            }

            else{ // Posições intermediárias
                let nodePos = this.head

                // Percorrer a lista até encontrar o nodo da posição de inserção
                // O for começa em 1 porque a posição 0 é o head, que já
                // foi visitado na instrução anterior
                for(let i = 1; i <= position; i++) {
                    nodePrev = nodePos
                    nodePos = nodePos.next
                }

                // O novo nodo passa a apontar para nodo da posição
                node.next = nodePos.next
                // O nodo anterior à posição passa a apontar para o novo nodo
                nodePrev.next = node
            }
       }
    }
}
