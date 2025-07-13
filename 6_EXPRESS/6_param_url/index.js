const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const basePath = path.join(__dirname, "templates"); // Acessando a pasta dentro do diretório atual

app.get('/users/:id', (req, res) => {
  const id = req.params.id // Vai pegar dentro da requisição o parâmetro passado para id

  console.log(`Procurando pelo usuário: ${id}`)

  res.sendFile(`${basePath}/users.html`)
})

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`); // Enviando uma resposta de arquivo
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
