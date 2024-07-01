const Sequelize = require('sequelize');
const db = require('../db');

const fabricante = db.define('fabricante', {
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

module.exports = fabricante;