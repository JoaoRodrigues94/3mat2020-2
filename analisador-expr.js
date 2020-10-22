/*
    3 * { 5 - 2 / [3 * 4 + (12 / 5)]}
    8 - { 5 * (3+7])}  
*/

const Stack = require('./Lib/Stack.js')

let analisador = new Stack()

//let expr = '3 * { 5 - 2 / [3 * 4 + (12 / 5)]}'
let expr = '8 - { 5 * (3 + 7])} + 5 * (4 - 2'  
let info

for(let i = 0; i < expr.length; i++){
    switch (expr.charAt(i)) {
        case '{':
            analisador.push({tipo: 'CH', pos: i})
            break;
        case '[':
            analisador.push({tipo: 'CO', pos: i})
            break;
        case '(':
            analisador.push({tipo: 'PA', pos: i})
            break;
        case '}':
            info = analisador.pop()  
                if(info && info.tipo == 'CH') { // Se retornou dados
                    console.log(`Chave aberta na posição ${info.pos} e fechada na posição ${i}`)
                }
                else {
                    console.log(`ERRO: Chave fechando na posição ${i} não tem a abertura correspondente`)
                }
            break; 
        
        case ')':
            info = analisador.pop()  
                if(info && info.tipo == 'PA') { // Se retornou dados
                    console.log(`Parênteses aberta na posição ${info.pos} e fechada na posição ${i}`)
                }
                else {
                    console.log(`ERRO: Parênteses fechando na posição ${i} não tem a abertura correspondente`)
                }
            break;  

        case ']':
            info = analisador.pop()  
                if(info && info.tipo == 'CO') { // Se retornou dados
                    console.log(`Colchete aberta na posição ${info.pos} e fechada na posição ${i}`)
                }
                else {
                    console.log(`ERRO: Colchete fechando na posição ${i} não tem a abertura correspondente`)
                }
            break;  
    }
}

if(analisador.size() > 0) {
    while(analisador.size() > 0) {
        info= analisador.pop()
        switch (info.tipo) {
            case 'PA':
                console.log(`ERRO: Parênteses aberto na  posição ${info.pos} não tem fechamento`)
                break;
            case 'CO':
                console.log(`ERRO: Colchete aberto na  posição ${info.pos} não tem fechamento`)
                break;

            case 'CH':
                console.log(`ERRO: Chave aberta na  posição ${info.pos} não tem fechamento`)
                break;
        }
    }
}