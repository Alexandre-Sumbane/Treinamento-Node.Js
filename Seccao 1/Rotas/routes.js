const express = require('express');
const route = express.Router();
const homeController = require('./Controllers/homeController.js');
const contactoController = require("./Controllers/contactoController.js");

route.get('/', homeController.paginaInicial);
route.post("/", homeController.trataPost);

route.get('/contactos', contactoController.paginaInicial);
module.exports = route;