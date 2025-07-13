const express = require('express')
const router = express.Router()
const path = require("path");

const basePath = path.join(__dirname, "../templates"); //  subindo um diretório (com ..) e depois entrando na pasta templates.

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/usersForm.html`);
});

// recebe os dados
router.post("/save", (req, res) => {
  console.log(req.body); // mostra o conteúdo enviado no formulário

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuário é ${name} e tem ${age} anos.`)

  res.sendFile(`${basePath}/usersForm.html`)
});

router.get("/:id", (req, res) => {
  const id = req.params.id; // Vai pegar dentro da requisição o parâmetro passado para id

  console.log(`Procurando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

module.exports = router
