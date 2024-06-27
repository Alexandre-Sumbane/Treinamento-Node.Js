const express = require('express');
const route = express.Router();
const homeController = require('./src/Controllers/homeController');
const contactoController = require("./src/Controllers/contactoController");

route.get('/', homeController.paginaInicial);
route.post("/", homeController.trataPost);

route.get('/contactos', contactoController.paginaInicial);
module.exports = route;