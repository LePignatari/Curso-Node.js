const x = 1

if(!Number.isInteger(x)) { // se o número NÃO for inteiro
    throw new Error('O valor x não é um número!')
}

console.log('Prosseguindo com o código...')
