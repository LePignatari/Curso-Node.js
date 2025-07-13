const pedirComida = new Promise((resolve, reject) => {
    const finalizado = true 
    
    setTimeout(() => {
        if(finalizado === true) {
            console.log("Pedido pronto! 🍔")
        } else {
            console.log("Restaurante fechado. 😢")
        }
    },3000)
})

pedirComida
    .then(sucesso => console.log(sucesso))
    .catch(erro => console.log(erro))
