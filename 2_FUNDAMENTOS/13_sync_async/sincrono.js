const fs = require('fs')

console.log('Início')

fs.writeFileSync('arquivo.txt', 'oi') // Quero que a próx linha espere essa execução.

console.log('Fim') // Só vai ser executado após a execução do anterior
