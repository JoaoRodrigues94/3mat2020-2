// Declaração e inicialização de um objeto vazio.
let pessoa1 = {}              // Forma moderna
let pessoa2 = new Object()    // Forma "tradicional"

// Inicialização de objeto já com propriedades e valores
let pessoa3 = {
    // nome: atributo ou chave
    // 'fulanilson de Souza' : valor
    // atributo + valor -> propriedade
    nome: 'Fulanilson de Souza',
    "data de nascimento": '1998-05-19',
    sexo: 'M',
    profissao: 'marceneiro'
}

// Exibir o valor de um atributo (nome do atributo SEM espaços)
console.log(pessoa3.nome)         // Sintaxe do ponto

// Exibir o valor de um atributo cujo nome contém espaços
console.log(pessoa3["data de nascimento"])      // Sintaxe do colchetes

// A sintaxe dos colchetes funciona sempre, mesmo quando o nome 
// de atributo não tem espaço
console.log(pessoa3["profissao"])
console.log("-------------------------------------------------------------------")

// Criando uma noa propriedade em um objeto
console.log(pessoa1)  // Antes
pessoa1.nome = 'Sicranilson Soares'
pessoa1["data de nascimento"] = '1988-07-31'
console.log(pessoa1)  // Depois

// A criação de novas propriedades pode ser feita inclusive em
// objetos que foram incializados com propriedades.
console.log(pessoa3)   // Antes
pessoa3.altura = 1.73
pessoa3.peso = 87
console.log(pessoa3)   // Depois

// Exclusão de propriedade
console.log("--------------------------------------------------------------------")
delete pessoa3.sexo
console.log(pessoa3)

console.log("--------------------------------------------------------------------")

// Listando os atributos (nomes de propriedades) de um objeto
for(let atributo in pessoa3) {
    console.log(atributo)
}

console.log("--------------------------------------------------------------------")

// Listar as propriedades (atributo + valor) de um objeto
for(let atributo in pessoa3) {
    console.log('Atributo: ' + atributo + '; valor: ' + pessoa3[atributo])
}