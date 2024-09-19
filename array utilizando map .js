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

console.log(lista.map((Objeto)=> Objeto.idade))


const converterObejto1 = (Objeto) => {
    return Objeto.idade;
}

const converterObejto2 = (Objeto) => {
    return {
        nome: Objeto.nome,
        idade: Objeto.idade,
        nomeIdade: `${Objeto.nome} + ${Objeto.idade}`
    }
}  

console.log(lista.map(converterObejto2))

console.log(lista.map(converterObejto1))


const idades = lista.map(converterObejto1);

console.log(idades)




