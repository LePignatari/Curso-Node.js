const inquirer = require("inquirer");
const chalk = require("chalk").default;

inquirer
  .prompt([
    {
      name: "nome",
      message: "Digite seu nome: ",
    },
    {
      name: "idade",
      message: "Digite sua idade: ",
    },
  ])
  .then((resposta) => {
    if (!resposta.nome || !resposta.idade) {
      throw new Error(
        chalk.red("[ERRO] O nome e a idade são campos obrigatórios.")
      );
    }

    console.log(
      chalk.bgYellow.black(
        `Seu nome é ${resposta.nome} e você tem ${resposta.idade} anos !`
      )
    );
  })
  .catch((err) => console.log(err));
