const Sequelize = require('sequelize');
const database = require('../db');
const Fabricante = require('./fabricante');
const CategoriaProducto = require('./categoriaProducto');
const Categoria = require('./categoria');

const Producto = database.define('producto', {
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

Producto.belongsTo(Fabricante, {
    constraints: true,
    foreignKey: 'idFabricante'
});

Fabricante.hasMany(Producto, {
    foreignKey: 'idFabricante'
});

Producto.belongsToMany(Categoria, {
    through: {
        model: CategoriaProducto
    },
    foreignKey: 'idProducto',
    constraint: true
});
Categoria.belongsToMany(Producto, {
    through: {
        model: CategoriaProducto
    },
    foreignKey: 'idCategoria',
    constraint: true
});
module.exports = Producto