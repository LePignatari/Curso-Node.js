const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000; // porta do servidor

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1);

  // se for html
  if (filename.includes("html")) {
    if (fs.existsSync(filename)) {
      // verifica se o arquivo existe
      fs.readFile(filename, function (err, data) {
        res.writeHead(200, { "content-type": "text/html" }); // status code / content type
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("404.html", function (err, data) {
        res.writeHead(404, { "content-type": "text/html" }); // status code / content type
        res.write(data);
        return res.end();
      });
    }
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
