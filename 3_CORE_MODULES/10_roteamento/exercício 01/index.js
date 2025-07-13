const http = require("http");
const fs = require("fs");
const url = require("url");

const porta = 3000;

const server = http.createServer((req, res) => {
  const rota = url.parse(req.url, true).pathname;
  const arquivo = rota === "/" ? "index.html" : rota.substring(1);

  if (fs.existsSync(arquivo)) {
    fs.readFile(arquivo, function (err, data) {
      res.writeHead(200, { "content-type": "text/html" });
      return res.end(data);
    });
  } else {
    fs.readFile("404.html", function (err, data) {
      res.writeHead(404, { "content-type": "text/html" });
      return res.end(data);
    });
  }
});

server.listen(porta, () => {
  console.log("Servidor funcionando, rodando na porta: ", porta);
});
