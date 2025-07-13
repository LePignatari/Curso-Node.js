const http = require("http");
const porta = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end("<h1>Curso de Node.js!</h1>");
});

server.listen(porta, () => {
  console.log("Servidor rodando na porta: ", porta);
});
