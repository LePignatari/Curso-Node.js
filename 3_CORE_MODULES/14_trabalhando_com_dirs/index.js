const fs = require("fs");

// -> ./ presente no diretório atual
if (!fs.existsSync("./pasta")) {
  console.log("Diretório não existe!");
  fs.mkdirSync("pasta"); // criando o diretório
} else if (fs.existsSync("./pasta")) {
  console.log("Diretório existe!");
}
