const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const basePath = path.join(__dirname, "templates"); // Acessando a pasta dentro do diretório atual

const checkAuth = function (req, res, next) {
  req.userStatus = false

  if(req.userStatus) {  // Se for verdadeiro
    console.log('Está logado')
    next()
  } else {
    console.log('Não está logado')
    res.sendFile(`${basePath}/cadastro.html`)
  }
};

app.use(checkAuth)

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`); // Enviando uma resposta de arquivo
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
