const { Sequelize } = require("sequelize"); // importando o objeto sequelize do pacote

//                              banco, usuário, senha
const sequelize = new Sequelize("nodesequelize", "root", "", {
  host: "localhost",
  dialect: "mysql", // qual banco integrar
});

// try {

//     sequelize.authenticate()
//     console.log('Conectado com sucesso com o Sequelize!')

// } catch(err) {
//     console.log('não foi possível conectar: ', err)
// }

module.exports = sequelize;
