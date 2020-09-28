let comparacoes = 0, divisoes = 0, juncoes = 0
function mergeSort(vetor) {
    function mesclarVetor(vetEsq, VetDir) {
        let vetRes = [], posEsq = 0, posDir = 0, sobra

        while(posEsq < vetEsq.length && posDir < VetDir.length) {
            if (vetEsq[posEsq] < VetDir[posDir]) {
                vetRes.push(vetEsq[posEsq])
                posEsq++
            }
            else{ //vetDir[posDir] < vetEsq[posEsq]
                vetRes.push(VetDir[posDir])
                posDir++
            }
            comparacoes++
        }
        
        // Trazer para o vetor a sobra do vetor que NÃO chegou ao final.
        if(posEsq < posDir) sobra = vetEsq.slice(posEsq) // Slice = fatiar
        else sobra = VetDir.slice(posDir)

        //console.log({posEsq, posDir, sobra})

        return vetRes.concat(sobra) // Concat junta dois vetores.
    }

    if(vetor.length > 1){
        let meio = Math.floor(vetor.length / 2)
        let vetEsq = vetor.slice(0, meio)
        let VetDir = vetor.slice(meio) 
        divisoes++
        //console.log('ANTES: ', {vetor, vetEsq, VetDir})
        vetEsq = mergeSort(vetEsq)
        VetDir = mergeSort(VetDir)
        let vetFinal = mesclarVetor(vetEsq, VetDir)
        juncoes++
        //console.log('DEPOIS: ', {vetor, vetEsq, VetDir})
        return vetFinal
    }
    return vetor
}

//console.log(mergeSort([2,3,5,8,9,0,1,4,6,7]))

const nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
console.log(mergeSort(nomes))
console.timeEnd('Teste nomes')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Memória usada (MB): ', memoria)
console.log({comparacoes, divisoes, juncoes})