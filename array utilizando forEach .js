const lista = [
    { nome: 'victor', idade: 19 },
    { nome: 'joao', idade: 19 },
    { nome: 'pedro', idade: 19 },
    { nome: 'italo', idade: 19 },
    { nome: 'mateus', idade: 19 },
    { nome: 'tiago', idade: 19 },
    { nome: 'marcelo', idade: 19 },
    { nome: 'diogo', idade: 19 },
    { nome: 'marcos', idade: 19 }
];

for ( i = 0; i < lista.length; i++){
    console.log(lista)
}

let soma = 0

const somaIdade = (objeto)=>{
    soma += objeto.idade 
}
lista.forEach((somaIdade))

console.log(`Soma ${soma}`)



