/*
    Aluno: João Paulo Fernandes Rodrigues
    3°ADS - Matutino

   DADOS PARA O EXERCÍCIO

   nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617

*/

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

estadosNe.push(estado1)

/*
   1) Crie objetos para os demais Estados, seguindo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/
let estado2 = {
   nome: 'Alagoas',
   sigla: 'AL',
   area: 27848.14,
   populacao: 3322820 
}

let estado3 = {
   nome: "Rio Grande do Norte",
   sigla: 'RN',
   area: 52811.05,
   populacao: 3479010
}

let estado4 = {
   nome: 'Paraíba',
   sigla: 'PB',
   area: 56469.78,
   populacao: 3996496
}

let estado5 = {
   nome: 'Pernambuco',
   sigla: 'PE',
   area: 98148.32,
   populacao: 9496294
}

let estado6 = {
   nome: 'Ceará',
   sigla: 'CE',
   area: 148920.47,
   populacao: 9075649
}

let estado7 = {
   nome: 'Piauí',
   sigla: 'PI',
   area: 251577.74,
   populacao: 3264531
}

let estado8 = {
   nome: 'Maranhão',
   sigla: 'MA',
   area: 331937.45,
   populacao: 7035055
}

let estado9 = {
   nome: 'Bahia',
   sigla: 'BA',
   area: 564733.18,
   populacao: 14812617
}
 
estadosNe.push(estado2, estado3, estado4, estado5)
estadosNe.push(estado6, estado7, estado8, estado9)

//console.log(estadosNe)
/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. 
*/
let densidadeDemografica = (x, y) => x / y

/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/
    for(let i = 0; i < 9; i++){
        estadosNe[i]['densidade demográfica'] = (densidadeDemografica(estadosNe[i].populacao,estadosNe[i].area))
        delete estadosNe[i].sigla
    }
   // console.log(estadosNe)
/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/
    let f = (objeto) => {
        for(i in objeto){
            console.log(i, objeto[i])
        }
    }

/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo.

*/ 
 for(let i of estadosNe){
     f(i)
 }
/*

   6)
      a) Declare um vetor vazio.
*/
    let vetor = []
/*
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.

*/
        vetor.push(estadosNe[0].nome)
        vetor.unshift(estadosNe[1].nome)
        vetor.splice(1, 0, estadosNe[2].nome)
        vetor.splice(1, 0, estadosNe[3].nome)
        vetor.splice(2,0, estadosNe[4].nome)
        vetor.splice(1,0,estadosNe[5].nome)
        vetor.splice(4,0,estadosNe[6].nome)
        vetor.splice(2,0,estadosNe[7].nome)
        vetor.splice(1,0,estadosNe[8].nome)
        console.log(vetor)
