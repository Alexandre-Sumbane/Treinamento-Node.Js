const express = require('express');
const route = express.Router();
const homeController = require('./src/Controllers/homeController');

route.get('/', homeController.paginaInicial);

route.post('/', (req, res)=>{
    res.send(req.body);
});

route.get('/testes/:idUsuario?/:nome?', (req, res)=>{
    console.log(req.query);
    res.send(req.params);
});
module.exports = route;