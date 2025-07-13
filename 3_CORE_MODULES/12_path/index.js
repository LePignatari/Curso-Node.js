const path = require("path");

const custompath = "/caminho/leticia/caminho_1.pdf";

console.log(path.dirname(custompath));  // Nome do diretório            -> /caminho/leticia/
console.log(path.basename(custompath)); // Nome base                    -> caminho_1.pdf
console.log(path.extname(custompath));  // Nome da extensão do arquivo  -> .pdf
