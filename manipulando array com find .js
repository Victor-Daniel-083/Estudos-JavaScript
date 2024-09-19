const lista = [
    { nome: 'victor', idade: 19 },
    { nome: 'joao', idade: 19 },
    { nome: 'pedro', idade: 19 },
    { nome: 'italo', idade: 19 },
    { nome: 'mateus', idade: 500 },
    { nome: 'tiago', idade: 19 },
    { nome: 'marcelo', idade: 19 },
    { nome: 'diogo', idade: 19 },
    { nome: 'marcos', idade: 31 }
];

const novaPessoa = lista.find ((pessoa) => pessoa.idade > 30);

console.log(novaPessoa);