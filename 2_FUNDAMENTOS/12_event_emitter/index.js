const EventEmitter = require('events') // usado para criar eventos, semelhante ao event listener
const eventEmitter = new EventEmitter() // criando uma instância: objeto criado a partir de uma classe

eventEmitter.on('start', () => { // criando um evento chamado start e oque vai executar no evento
    console.log('Durante')
})

console.log('Antes')

eventEmitter.emit('start') // para ativar o evento emitter temos que emitir o evento

console.log('Depois')