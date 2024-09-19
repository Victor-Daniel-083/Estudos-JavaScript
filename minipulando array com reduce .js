const lista = [
    { nome: 'victor', idade: 33, exibir: true},
    { nome: 'joao', idade: 72 },
    { nome: 'pedro', idade: 500 },
    { nome: 'italo', idade: 36 },
    { nome: 'mateus', idade: 26 },
    { nome: 'tiago', idade: 18 },
    { nome: 'marcelo', idade: 15 },
    { nome: 'diogo', idade: 20 },
    { nome: 'marcos', idade: 13 }
];

const funcaoReduce = (acc,objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoa = lista.reduce(funcaoReduce, {});

console.log(pessoa)
console.log(pessoa.victor.idade)