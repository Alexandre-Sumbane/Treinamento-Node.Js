const Sequelize = require('sequelize');

(async()=>{
    const database = require('./db');
    const Producto = require('./producto');
    await database.sync();

    // const novoProducto = producto.create({
    //     nome:'Monitor LED',
    //     preco: 130,
    //     descricao: 'Monitor Bacana'
    // });
    // const producto = await Producto.findByPk(3);

    // console.log(producto);

    //producto.descricao ='Fiz uma alteracao';
     //await producto.destroy();

     await Producto.destroy({
        where: {
           id: {
            [Sequelize.Op.gte]: 1

           }
        }
     })
})();