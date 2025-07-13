const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

const soma = require('./soma').soma // Módulo interno + função

const a = args['a']
const b = args['b']

soma(a, b)