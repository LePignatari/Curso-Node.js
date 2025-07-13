import inquirer from "inquirer";

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
    {
      name: "cidade",
      message: "Qual cidade mora?: ",
    },
    {
      name: "linguagem",
      message: "Qual sua linguagem preferida?: ",
    }
  ])
  .then((resposta) => {
    console.log(`Prazer em te conhecer ${resposta.nome}!`);
    console.log(`Você tem ${resposta.idade} anos e mora em ${resposta.cidade}!`);
    console.log(`Legal! Sua linguagem favorita é ${resposta.linguagem}!`);
  })
  .catch((erro) => {
    console.log("[ERRO] Ops...parece que aconteceu algum erro!");
  });
