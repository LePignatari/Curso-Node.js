const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const caminho = url.parse(req.url, true).pathname
  const arquivo = caminho === '/' ? 'home.html' : caminho.substring(1) + '.html'
  

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
  }
);

server.listen(port, () => {
  console.log("Servidor rodando na porta ", port);
});
