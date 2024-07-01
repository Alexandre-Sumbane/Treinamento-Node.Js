const Sequelize = require('sequelize');

(async()=>{
    const database = require('./db');
    const Producto = require('./models/producto');
    const Fabricante = require("./models/fabricante");
    const Categoria = require('./models/categoria');
    await database.sync();
    
    const novaCategoria = await Categoria.create({
      nome: 'Informatica'
    });
    const producto = await Producto.findByPk(1);
    await producto.setCategoria([novaCategoria]);
    
   //  const novoFabricante = await Fabricante.create({
   //    nome: 'Apple'
   //  });

   //  const novoProducto = await Producto.create({
   //    nome: 'MacBook',
   //    preco: 10000,
   //    descricao: 'Notebook da Apple',
   //    idFabricante: novoFabricante.id
   //  });
    //console.log(novoProducto);
    //const producto = await Producto.findByPk(1, {include: Fabricante});
    //const fabricante = await producto.getFabricante()
    //console.log(producto.fabricante.nome);
    const fabricante = await Fabricante.findByPk(1, {include: Producto});
    //const productos = await fabricante.getProductos();
    console.log(fabricante.productos);
})();