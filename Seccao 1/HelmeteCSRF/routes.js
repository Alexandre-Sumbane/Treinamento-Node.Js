const express = require('express');
const route = express.Router();
const pageLogin = require('./src/Controllers/pageLogin')
const userDate = require('./src/Controllers/userDate');
const profileController = require('./src/Controllers/profileController');


route.get('/', pageLogin.mostrar);
route.post('/register', userDate);
route.get('/profile', profileController)

module.exports = route;