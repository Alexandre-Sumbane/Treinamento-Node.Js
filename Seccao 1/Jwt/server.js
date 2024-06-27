const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('./models');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json());
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

//Rota privada
app.get("/user/:id", checkToken, async(req,res)=>{
    const id = req.params.id;

    //Verificar se o usuario existe;
    const user = await User.findByPk(id, {
        attributes: { exclude: ['senha'] } 
    });

    if(!user){
        return res.status(404).json({msg: 'Usuario nao encontrado!'});
    }

    res.status(200).json({user})
});

function checkToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({msg: "Acesso negado!"});
    }

    try {
        const secret = process.env.SECRET;

        jwt.verify(token, secret);

        next();
    } catch (error) {
        res.status(400).json({msg: "Token Invalido"});
    }
}

app.listen(3000, () =>{
    console.log("Acessar http://localhost:3000");
    console.log("Servidor na porta 3000");
});


