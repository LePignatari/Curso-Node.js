const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const chalk = require('chalk').default
                                                                // callback
readline.question('Qual sua linguagem de programação preferida? ', (linguagem) => {
    console.log(`Sua linguagem preferida é ${chalk.green.bold(linguagem)}? É uma linguagem muito legal!`)
    readline.close()
})