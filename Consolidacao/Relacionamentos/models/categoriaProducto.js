const Sequelize = require('sequelize');
const db = require('../db');

const CategoriaProducto = db.define('categoriaProducto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = CategoriaProducto;