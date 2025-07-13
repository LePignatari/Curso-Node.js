const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const users = require('./users')

// lendo o body - se vier em formato de formulário HTML
app.use(
  express.urlencoded({
    extended: true,
  })
);

// lendo o body - se vier em formato JSON
// toda req do body é transformada em um objeto js que conseguimos ler através de req.body
app.use(express.json())

// arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, "templates"); // Acessando a pasta dentro do diretório atual

app.use('/users', users)

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`); // Enviando uma resposta de arquivo
});

// só vai ser usado se nada acima corresponder com a solicitação do usuário
app.use(function(req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
