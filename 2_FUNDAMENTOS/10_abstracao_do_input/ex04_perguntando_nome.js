import inquirer from "inquirer";

inquirer
  .prompt({
    name: "nome",
    message: "Qual o seu nome?",
  })
  .then((nome) => {
    console.log(`Boas-vindas ${nome.nome}!`);
  })
  .catch((erro) => {
    console.log(erro);
  });
