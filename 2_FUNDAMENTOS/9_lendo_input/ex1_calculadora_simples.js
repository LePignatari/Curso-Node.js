const chalk = require('chalk').default
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Primeiro número: ', (n1) => {
    readline.question('Segundo número: ', (n2) => {
        readline.question('Tipo de operação [+|-|*|/|]: ', (op) => {
            if(op == '+') {
                const soma = Number(n1) + Number(n2)
                console.log('Soma: ', soma)

            } else if(op == '-') {
                const maior = Math.max(n1,n2)
                const menor = Math.min(n1,n2)
                const sub = maior - menor
                console.log('Subtração: ', sub)

            } else if(op == '*') {
                const mult = Number(n1) * Number(n2)
                console.log('Multiplicação: ', mult)

            } else if(op == '/') {
                if(n1 || n2 === 0) {
                    console.log(chalk.red('[ERRO]: Divisão por zero.'))
                } else {
                    const div = Number(n1) / Number(n2)
                    console.log('Divisão: ', div)
                }
            } else {
                console.log(chalk.red('[ERRO]: Ops...Digite uma operação válida!'))
            }
            readline.close()
        })
    })
})