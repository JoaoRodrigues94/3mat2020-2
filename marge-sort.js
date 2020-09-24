function mesclarVetor(vetEsq, VetDir) {
    let vetRes = [], posEsq = 0, posDir = 0

    while(posEsq < vetEsq.length && posDir < VetDir.length) {
        if (vetEsq[posEsq] < VetDir[posDir]) {
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        else{ //vetDir[posDir] < vetEsq[posEsq]
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
    // Trazer para o vetor a sobra do vetor que NÃO chegou ao final.
}