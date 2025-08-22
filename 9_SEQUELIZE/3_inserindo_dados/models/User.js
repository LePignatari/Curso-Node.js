const { DataTypes } = require("sequelize"); // acesso a todos os dados do banco

const db = require("../db/conn"); // conexão do banco - conn

const User = db.define("User", {
  // definindo o model - dados e tipos
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
