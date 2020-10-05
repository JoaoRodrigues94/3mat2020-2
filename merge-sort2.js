let comparacoes = 0, divisoes = 0, juncoes = 0

/*
fnComp() -> Função de comparação
parâmetros: dois valores para serem comparados
Retorno:
    -true, se o PRIMEIRO valor for MAIOR  que o segundo
    -false, caso contrário
*/

function mergeSort(vetor, fnComp) {
    function mesclarVetor(vetEsq, VetDir) {
        let vetRes = [], posEsq = 0, posDir = 0, sobra

        while(posEsq < vetEsq.length && posDir < VetDir.length) {
            //if (vetEsq[posEsq] < VetDir[posDir]) {
              if(fnComp(VetDir[posDir], vetEsq[posEsq])){ // Parâmetros invertidos  
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
        vetEsq = mergeSort(vetEsq, fnComp)
        VetDir = mergeSort(VetDir, fnComp)
        let vetFinal = mesclarVetor(vetEsq, VetDir)
        juncoes++
        //console.log('DEPOIS: ', {vetor, vetEsq, VetDir})
        return vetFinal
    }
    return vetor
}

//console.log(mergeSort([2,3,5,8,9,0,1,4,6,7]))

const candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
console.log(mergeSort(candidatos, (a,b) => a.NM_CANDIDATO > b.NM_CANDIDATO))
console.timeEnd('Teste candidatos')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Memória usada (MB): ', memoria)
console.log({comparacoes, divisoes, juncoes})