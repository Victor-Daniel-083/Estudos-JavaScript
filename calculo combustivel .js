const consumo_carro = 12


function calculoCombustivel(tempoGasto, velocidadeMedia){
    const distancia = tempoGasto * velocidadeMedia
    const consumoFinal = distancia / consumo_carro

    return consumoFinal.toFixed(3)
} 

var tempo = 10
var velocidade = 85

console.log("Resultado" , calculoCombustivel(tempo, velocidade))
console.log("Resultado" , calculoCombustivel(2, 92))
console.log("Resultado" , calculoCombustivel(22, 67))

