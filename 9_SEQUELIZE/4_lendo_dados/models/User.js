const { DataTypes } = require("sequelize"); // acesso a todos os tipos de dados do banco, string, boolean, ...

const db = require("../db/conn"); // conexão do banco - conn

// definindo o model - dados e tipos
const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
  },
  newsletter: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = User;
