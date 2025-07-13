const meuModulo = require('./meu_modulo') // isso (./) mostra que isso é um modulo interno, e não um core module ou de terceiros
const soma = meuModulo.soma // passando como se fosse uma propriedade

soma(2,3)
soma(5,5)
