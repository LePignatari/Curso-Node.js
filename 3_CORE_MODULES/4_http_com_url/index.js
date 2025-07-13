const http = require("http");
const port = 3000; // porta do servidor

const server = http.createServer((req, res) => {
  const url = require("url").parse(req.url, true); // url decomposta
  const name = url.query.name;

  res.statusCode = 200; // bem sucedida
  res.setHeader("Content-Type", "text/html");

  // Se tiver o nome imprime a mensagem, se não, cria um  formulário para o usuário digitar seu nome
  if (!name) {
    res.end(
      '<h1>Preencha seu nome:</h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar"></form>'
    );
  } else {
    res.end(`<h1>Prazer em te conhecer ${name}!</h1>`);
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
