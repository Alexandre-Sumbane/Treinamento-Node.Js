const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const sequelize = require('./models');
const session = require('express-session');
const flah = require('connect-flash');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const csrf = require('csurf');
const {middlewareGlobal , checkCsrfError} = require('./src/middlewares/middleware');

app.use(session({
    secret: "12345",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000*60*60*24*7,
            httpOnly: true
        }    
}));

app.use(helmet());
app.use(flah());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json());
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrf());
app.use(routes);

app.listen(3000, () =>{
    console.log("Acessar http://localhost:3000");
    console.log("Servidor na porta 3000");
});


