let saldoVitoria = subtrair (57, 7)
console.log( "O resultado é: "+ saldoVitoria )

function subtrair (victory, defeat){
    return victory - defeat
}

let nivel
if ( saldoVitoria < 10){
    nivel = "Ferro"
} else if (saldoVitoria >= 11 && saldoVitoria <= 20){
    nivel = "Bronze"
} else if (saldoVitoria >= 21 && saldoVitoria <= 50){
    nivel = "Prata"
} else if (saldoVitoria >= 51 && saldoVitoria <= 80){
    nivel = "Ouro"
} else if (saldoVitoria >= 81 && saldoVitoria <= 90){
    nivel = "Diamante"
} else if (saldoVitoria >= 91 && saldoVitoria <= 100){
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}

let mensagem = " O jogador tem um saldo de vitória de " + saldoVitoria + " pontos e seu nível de joso é o " + nivel
    console.log (mensagem)