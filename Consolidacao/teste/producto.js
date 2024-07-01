const Sequelize = require('sequelize');
const database = require('./db');


const producto = database.define('producto', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    preco: Sequelize.DECIMAL,
    descricao:Sequelize.STRING
});

module.exports = producto;