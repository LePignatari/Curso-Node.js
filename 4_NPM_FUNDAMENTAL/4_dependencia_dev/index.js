const _ = require("lodash");
const chalk = require('chalk').default

const a = [1, 2, 3, 4, 5];
const b = [2, 3, 6, 7, 8];

const diff = _.difference(a, b); // qual números não está no array b
console.log(chalk.cyan.bold(diff));