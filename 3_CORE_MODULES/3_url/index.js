const url = require("url");
const address = "http://www.meusite.com.br/catalog?produtos=cadeira"; // endereço da url
const parsedUrl = new url.URL(address); // url decomposta, permitindo acessar partes da url separadamente, convertendo de string para objeto

console.log(parsedUrl.host); // host
console.log(parsedUrl.pathname); // path
console.log(parsedUrl.search); // search
console.log(parsedUrl.searchParams); // query
console.log(parsedUrl.searchParams.get("produtos"));
