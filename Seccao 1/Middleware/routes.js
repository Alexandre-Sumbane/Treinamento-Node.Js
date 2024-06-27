const express = require('express');
const route = express.Router();
const homeController = require('./src/Controllers/homeController');
const contactoController = require("./src/Controllers/contactoController");
function meuMiddleware(req, res, next){
    console.log();
    console.log("Passei no seu middleware");
    console.log();
    next()
}

route.get('/', meuMiddleware, homeController.paginaInicial);
route.post("/", homeController.trataPost);

route.get('/contactos', contactoController.paginaInicial);
module.exports = route;