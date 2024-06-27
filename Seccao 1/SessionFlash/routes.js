const express = require('express');
const route = express.Router();
const dadosCliente = require('./src/Controllers/dadosCliente');
const pageLogin = require('./src/Controllers/pageLogin')
const userDate = require('./src/Controllers/userDate');
const profileController = require('./src/Controllers/profileController');

route.get('/', dadosCliente.dateCliente);

route.get('/login', pageLogin.mostrar);
route.post('/register', userDate);
route.post('/profile', profileController)

module.exports = route;