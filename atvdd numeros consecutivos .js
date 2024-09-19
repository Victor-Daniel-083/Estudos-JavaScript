const quantidade = 6


function numeroImpares(valor){
    let contar = 0
    let novo_valor = valor;

    while( contar < quantidade){
        if (novo_valor % 2 !== 0){
            console.log(novo_valor)
            contar++;
        }

        novo_valor++;
    }
}   

numeroImpares(9)
