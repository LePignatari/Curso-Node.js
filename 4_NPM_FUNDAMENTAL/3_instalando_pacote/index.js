const _ = require("lodash");

const a = [1, 2, 3, 4, 5];
const b = [2, 3, 6, 7, 8];

const diff = _.difference(a, b); // qual números não está no array b
console.log(diff);

const phrase = "Testando módulo";
console.log(_.toUpper(phrase));
console.log(_.toLower(phrase));
console.log(_.union(a, b));
console.log(_.toString(b));
