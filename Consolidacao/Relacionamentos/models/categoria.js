const Sequelize = require('sequelize');
const db = require('../db');

const Categoria = db.define('categoria', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Categoria;