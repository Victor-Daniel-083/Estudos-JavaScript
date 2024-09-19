

const soma = (valor) => {
    if (valor === 0)
        return 1;
    return valor + soma(valor + 1)
} 

console.log(calc(5))