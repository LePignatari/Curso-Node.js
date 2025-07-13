const chalk = require('chalk').default // nas novas versões do chalk é preciso o .default 

const nota = 5

if (nota >= 6) {
    console.log(`O aluno foi ${chalk.green.bold('APROVADO!')}`) 
} else {
    console.log(`O aluno foi ${chalk.bgRed.bold('REPROVADO!')}`) // background
}