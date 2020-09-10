// Busca binária só funciona com uma lista preordenada
let comp = 0
// Incio = 0
// Fim = 12

// Implementação recursiva.
// Os parâmetros inicio e fim são opcionais, assumindo valores padrão
// caso não tenham sido passados na chamada de função.
function buscaBinaria(lista, valorBusca, fnComp, inicio = 0, fim = lista.length - 1) {
     
    if(fim >= inicio){
        // Math.floor() tira as casas decimais de um número.
        let meio = Math.floor((fim + inicio)/2)

        // Chamar a função externa de comparação para
        // direcionar os próximos passos.
        let res = fnComp(lista[meio], valorBusca)

        if(res === 0) { // Achou
            comp++
            // Condição de saída: não chama recursivamente a função
            return meio
        }
        else if(res < 0) {
            // Trazendo o indicador de fim para uma posição
            // antes do meio, assim descartando todos os valores
            // que são maiores que o valor na posição média.
            comp += 2
            //fim = meio - 1
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio-1)
        }
        else { // res > 0
            comp += 2
            //inicio = meio + 1
            return buscaBinaria(lista, valorBusca, fnComp, meio+1, fim)
        }
    }
    // Condição de saída: não chama recusrivamente a função.
    return -1 // O valor não foi encontrado
}

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

console.log("posição: " + buscaBinaria(nums, 30, (elPos, busca) => {
    if(busca === elPos) return 0
    else if (busca < elPos) return -1
    else return 1
}))

// Para não executar mais daqui para baixo
//process.exit(0)

const listaNomes = require('./dados/vetor-nomes')
console.time('JOAO')
console.log(buscaBinaria(listaNomes, 'JOAO', (obj, busca) =>{
    if(obj.first_name === busca) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('JOAO')
console.log('Comparações: ', comp)

console.log('--------------------------------------------------------')

console.time('INSTAGRAMILSON')
console.log(buscaBinaria(listaNomes, 'INSTAGRAMILSON', (obj, busca) =>{
    if(obj.first_name === busca) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('INSTAGRAMILSON')
console.log('Comparações: ', comp)
