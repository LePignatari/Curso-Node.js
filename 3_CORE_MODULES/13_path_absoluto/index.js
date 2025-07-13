const path = require("path");

// path absoluto
console.log(path.resolve("index.txt")); // Mostra o caminho completo até um arquivo

// formar um path
const midFolder = "exercicio";
const fileName = "leticia.txt";

const finalPath = path.join("/", "arquivo", midFolder, fileName); // Colocar / força a criação de um caminho para começar da raiz do sistema de arquivos, criando um caminho absoluto.

console.log(finalPath);
