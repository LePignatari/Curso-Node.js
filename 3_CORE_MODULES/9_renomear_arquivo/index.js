const fs = require("fs");

const arquivoAntigo = "Arquivo.txt";
const arquivoNovo = "Novo.txt";

fs.rename(arquivoAntigo, arquivoNovo, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`O arquivo ${arquivoAntigo} foi renomeado para ${arquivoNovo}!`);
});
