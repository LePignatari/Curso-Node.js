const http = require("http");
const fs = require("fs");
const porta = 3000;

const server = http.createServer((req, res) => {
  let caminho = "";

  switch (req.url) {
    case "/":
      caminho = "home.html";
      break;
    case "/sobre":
      caminho = "sobre.html";
      break;
    case "/contato":
      caminho = "contato.html";
      break;
    default:
      caminho = "404.html";
  }

  fs.readFile(caminho, function (err, data) {
    if (err) {
      res.writeHead(404, { "content-type": "text/html" });
      return res.end();
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      return res.end(data);
    }
  });
});

server.listen(porta, () => {
  console.log("Servidor rodando na porta: ", porta);
});
