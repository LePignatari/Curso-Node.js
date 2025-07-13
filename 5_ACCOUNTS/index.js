import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";

menu();

function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "op",
        message: "O que você deseja fazer?",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((resposta) => {
      if (resposta.op === "Criar Conta") {
        criarConta();
      } else if (resposta.op === "Consultar Saldo") {
        consultaSaldo();
      } else if (resposta.op === "Depositar") {
        depositar();
      } else if (resposta.op === "Sacar") {
        sacar();
      } else if (resposta.op === "Sair") {
        console.log(
          chalk.bgMagenta("Obrigado por usar o Accounts, volte sempre! ;D")
        );
        process.exit();
      }
    })
    .catch((err) => console.log(err));
}

function criarConta() {
  console.log(chalk.bgCyan.black("Parabéns por escolher nosso banco!"));
  console.log("Defina as opções da sua conta a seguir:");

  contaCriada();
}

function contaCriada() {
  inquirer
    .prompt([
      {
        name: "conta",
        message: "Digite um nome para sua conta: ",
      },
    ])
    .then((resposta) => {
      const nome_conta = resposta.conta;
      if (nome_conta === "") {
        msgErro("Por favor, digite um nome válido!");
        return contaCriada();
      }

      // Verificando se existe ou não
      if (!fs.existsSync("contas")) {
        fs.mkdirSync("contas");
      }

      if (fs.existsSync(`contas/${nome_conta}.json`)) {
        msgErro("Essa conta já existe, escolha outro nome!");
        contaCriada();
        return; // Retornar sempre que houver um erro
      }

      // Criando o arquivo json
      fs.writeFileSync(
        `contas/${nome_conta}.json`,
        '{"saldo": 0}',
        function (err) {
          console.log(err);
        }
      );

      // Retornando ao menu
      msgSucesso("Parabéns! Sua conta foi criada com sucesso!");
      menu();
    })
    .catch((err) => console.log(err));
}

// Saldo
function consultaSaldo() {
  // Pedindo o nome da conta
  nomeConta((nome_conta) => {
    // Verificando se a conta existe
    if (!verificandoConta(nome_conta)) {
      return consultaSaldo();
    }
    const data = fs.readFileSync(`contas/${nome_conta}.json`);
    const conta = JSON.parse(data);
    console.log(chalk.green.bold(`O saldo da sua conta é de R$${conta.saldo}`));
    menu();
  });
}

// Depositar
function depositar() {
  nomeConta((nome_conta) => {
    if (!verificandoConta(nome_conta)) {
      return depositar();
    }

    valorDeposito(nome_conta);
  });
}

// Pegando valor do deposito
function valorDeposito(nome_conta) {
  inquirer
    .prompt([
      {
        name: "depositar",
        message: "Quanto você deseja depositar?",
      },
    ])
    .then((resposta) => {
      const depositar = Number(resposta.depositar);

      if (isNaN(depositar) || depositar <= 0) {
        msgErro("Ocorreu um erro, tente novamente mais tarde!");
        return menu();
      }

      realizarDeposito(nome_conta, depositar);
    })
    .catch((err) => console.log(err));
}

// Realizar deposito
function realizarDeposito(nome_conta, depositar) {
  const data = fs.readFileSync(`contas/${nome_conta}.json`);
  const conta = JSON.parse(data);

  conta.saldo += depositar;

  // Atualizando o arquivo json
  fs.writeFileSync(`contas/${nome_conta}.json`, JSON.stringify(conta, null, 2));
  console.log(
    chalk.green.bold.italic(
      `Foi depositado o valor de R$${depositar} em sua conta!`
    )
  );

  return menu();
}

// Sacar
function sacar() {
  nomeConta((nome_conta) => {
    if (!verificandoConta(nome_conta)) {
      return sacar();
    }

    valorSaque(nome_conta);
  });
}

// Pegando valor do saque
function valorSaque(nome_conta) {
  inquirer
    .prompt([
      {
        name: "saque",
        message: "Quanto deseja sacar?",
      },
    ])
    .then((resposta) => {
      const saque = Number(resposta.saque);
      const data = fs.readFileSync(`contas/${nome_conta}.json`);
      const conta = JSON.parse(data);

      if (isNaN(saque) || saque <= 0) {
        msgErro("Impossível realizar saque! Valor inválido.");
        return menu();
      }

      realizarSaque(nome_conta, saque);
    })
    .catch((err) => console.log(err));
}

// Realizar saque
function realizarSaque(nome_conta, saque) {
  const data = fs.readFileSync(`contas/${nome_conta}.json`);
  const conta = JSON.parse(data);

  if (saque > conta.saldo) {
    console.log(
      msgErro("Impossível realizar saque. Valor maior que o saldo disponível!")
    );
    return menu();
  }

  conta.saldo -= saque;

  fs.writeFileSync(`contas/${nome_conta}.json`, JSON.stringify(conta, null, 2));
  console.log(chalk.bgGreen.italic(`Você sacou R$${saque} da sua conta!`));

  menu();
}

// Pedir o nome da conta
function nomeConta(callback) {
  inquirer
    .prompt([
      {
        name: "nome_conta",
        message: "Qual o nome da sua conta?",
      },
    ])
    .then((resposta) => {
      callback(resposta.nome_conta);
    })
    .catch((err) => console.log(err));
}

// Verificar se a conta existe
function verificandoConta(nomeconta) {
  if (!fs.existsSync(`contas/${nomeconta}.json`)) {
    msgErro(
      chalk.red.bold.italic("Esta conta não existe, escolha outro nome!")
    );
    return false;
  }

  return true;
}

// Texto vermelho
function msgErro(texto) {
  console.log(chalk.red.bold.italic(texto));
}

// Texto verde
function msgSucesso(texto) {
  console.log(chalk.green.bold.italic(texto));
}
