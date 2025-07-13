const express = require("express");
const app = express();
const port = 5000;

const path = require("path");
const basePath = path.join(__dirname, "templates");

const routers = require('./routers')
app.use(express.static("public"));

app.use('/', routers)

app.listen(port, () => {
  console.log(`Servidor rodando na porta `, port);
});
