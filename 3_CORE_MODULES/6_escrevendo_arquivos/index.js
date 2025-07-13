const http = require("http");
const fs = require("fs");

const port = 3000; // porta do servidor

const server = http.createServer((req, res) => {
  const url = require("url").parse(req.url, true);
  const name = url.query.name;

  if (!name) {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "content-type": "text/html" }); // status code / content type
      res.write(data);
      return res.end();
    });
  } else { 
    fs.writeFile("nomes.txt", name, function (err, data) {
      res.writeHead(302, {  // Código 302 de redicionamento
        location: "/",      // Redirecionando para a página inicial
      });
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
