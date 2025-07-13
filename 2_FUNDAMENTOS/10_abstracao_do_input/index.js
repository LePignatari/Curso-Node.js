import inquirer from 'inquirer'

inquirer.prompt([
    {
    name: 'p1',
    message: 'Qual a primeira nota? ',
    },
    {
    name: 'p2',
    message: 'Qual a segunda nota? ',
    }
]).then((answer) => {
    console.log(`As notas foram ${answer.p1} e ${answer.p2}`)
    const media = (parseInt(answer.p1) + parseInt(answer.p2)) / 2
    console.log(`A média das notas foi de ${media}!`)
}).catch((err) => console.log(err))
