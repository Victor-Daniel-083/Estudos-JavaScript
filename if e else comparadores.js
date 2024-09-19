
// ( || ) isso significa, se sua idade foi maior que 18 , ou seu nome for igual a Victor 
// uma das duas tem q ser igual para ser executado esse if

// ( && ) isso significa, se sua idade foi maior que 18 e seu nome for igual a Victor
// as duas tem q ser igual para ser executado esse if , se for diferente não executa

// ( == ) isso pergunta se 28 numero é igual a "28" string da true
// ( === ) isso pergunta se 28 numero é igual a "28" string da false , os dois tem q ser number ou string , ele pergunta se o tipo tbm é igual


var idade2 = 11
console.log(`Você tem ${idade2} anos, por isso você`)
if (idade2 >= 18){
    console.log('Voto obrigatório')
}else if(idade2 >= 16 && idade2 <18){
    console.log('Voto opcional')
}else{
    console.log('Não vota')
}

var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora >= 6 && hora < 12){
    console.log(`Bom dia !`)
}else if(hora >= 0 && hora < 6){
    console.log(`Boa madrugada`)
}else if ( hora >= 12 && hora < 18){
    console.log(`Agora é tarde !`)
}else{
    console.log(`Agora é noite !`)
}

var horaAg = new Date()
var horaAgora = horaAg.getHours()

var diaSem = new Date()
var diaSemana = diaSem.getDay()

switch (diaSemana) {
    case 0:
        console.log(`Hoje é Domingo`)
        break;

    case 1:
        console.log(`Hoje é Segunda-feira`)
        break;
    case 2:
        console.log(`Hoje é Terça-feira`)
        break;

    case 3:
        console.log(`Hoje é Quarta-feira`)
        break;

    case 0:
        console.log(`Hoje é Quinta-feira`)
        break;

    case 0:
        console.log(`Hoje é Sexta-feira`)
        break;

    case 0:
        console.log(`Hoje é Sabado`)
        break;

    default:
        console.log(`[ERROR] Dia Inválido!`)
        break;
}


/*
    domingo = 0
    segunda = 1
    terça = 2
    quarta = 3 
    quinta = 4
    sexta = 5 
    sabado = 6
*/






