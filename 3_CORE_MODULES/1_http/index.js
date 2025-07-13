const http = require("http");
const port = 3000; // porta do servidor

const server = http.createServer((req, res) => {
  // criando um servidor, com requisição e resposta
  res.write("texto"); // enviando texto puro
  res.end();
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
