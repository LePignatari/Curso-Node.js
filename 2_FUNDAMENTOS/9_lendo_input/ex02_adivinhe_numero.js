const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout, 
})

console.log('ADIVINHE O NÚMERO!')

readline.question('Insira seu palpite [1-10]: ', (palpite) => {
    const numero_aleat = Math.floor(Math.random() * 11) 
    console.log('O número era ', numero_aleat)
    if(palpite == numero_aleat) {
        console.log('Parabéns! Você acertou!')

    } else if(Number(palpite) > 10) {
        console.log('Opa, você só pode palpitar um número entre 1 e 10!')

    } else {
        console.log('Você errou! Tente de novo na próxima! :/')
    }
    readline.close()
})