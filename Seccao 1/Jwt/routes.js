const express = require('express');
const route = express.Router();
const dadosCliente = require('./src/Controllers/dadosCliente');
const DbController = require('./src/Controllers/DbController');
const sucessController = require('./src/Controllers/sucessController');
const loginController = require('./src/Controllers/loginController');
const pageLogin = require('./src/Controllers/pageLogin')

route.get('/', dadosCliente.dateCliente);
 
route.post('/auth/register', DbController);

route.get('/success', sucessController);

route.get('/login', pageLogin.mostrar);
route.post('/login/auth', loginController);

module.exports = route;