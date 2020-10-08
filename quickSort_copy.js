let passadas = 0, comparacoes = 0, trocas = 0
/*
fnComp -> função de comparação
Recebe dois valores para comparação
Retorna:
    -true, se o PRIMEIRO valor for MAIOR que o segundo
    -false, caso contrario
*/
function quickSort(vetor, fnComp, inicio = 0, fim = vetor.length-1){
    console.log({vetor, inicio, fim})
    //let inicio = 0
    //let fim = vetor.length - 2 // Penultima posição
    //let posPivot = vetor.length - 1
    if(fim > inicio){
        passadas++
        let posPivot = fim //Ultima posição
        let posDiv = inicio -1
        //for(let i = inicio; i <= fim; i++){
        for(let i = inicio; i < fim; i++){  
            comparacoes++
            //if(vetor[i] < vetor[posPivot]) {
                if(fnComp(vetor[i] < vetor[posPivot])) {
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
                trocas++
            }
        }
        posDiv++ // Incremento final para encontrar a posição correta do pivô
        // Troca entre a posição da divisória e a posição do vetor.
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        trocas++
        console.log(posDiv)

        //Chamadas recursivas no Quick-Sort
        quickSort(vetor, fnComp, inicio. posDiv-1)  //Lado esquerdo
        quickSort(vetor, fnComp, posDiv+1, fim)    //Lado direito
    }
}

/*
let nums = [7, 3, 0, 8, 5, 2, 4, 9,1, 5, 6]
//quickSort(nums,0 , nums.length-1)
quickSort(nums)
console.log(nums)
console.log({passadas, comparacoes, trocas})
*/

let nomes = require('./dados/100-mil-nomes')
console.time('teste nomes')
quickSort(nomes)
console.timeEnd('teste nomes')
let memoria = process.memoryUsage().heapUsed /1024/ 1024
console.log(nomes)
console.log('Memória usada (MB): ', memoria)
console.log(passadas, comparacoes, trocas)