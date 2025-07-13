const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const basePath = path.join(__dirname, "templates"); // Acessando a pasta dentro do diretório atual

// lendo o body - se vier em formato de formulário HTML - middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);

// lendo o body - se vier em formato JSON
// toda req do body é transformada em um objeto js que conseguimos ler através de req.body
app.use(express.json())


app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/usersForm.html`);
});

// recebe os dados
app.post("/users/save", (req, res) => {
  console.log(req.body); // mostra o conteúdo enviado no formulário

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuário é ${name} e tem ${age} anos.`)

});

app.get("/users/:id", (req, res) => {
  const id = req.params.id; // Vai pegar dentro da requisição o parâmetro passado para id

  console.log(`Procurando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`); // Enviando uma resposta de arquivo
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
