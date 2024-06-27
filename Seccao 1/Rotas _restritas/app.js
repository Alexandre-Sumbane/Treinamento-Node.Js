const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
app.use(express.json);

app.get('/', async(req, res)=>{
    return res.json({
        erro: false,
        messagem: "Listar usuarios"
    })
});
app.post('/cadastrar', async(req, res) => {
    //$2a$08$p058G6e0cMrtC/FSnKeWJuQXgz.hzooKtV0FG52IlJWyK6oVIC02a
    const password = await bcrypt.hash("123456", 8);

    console.log(password);

    return res.json({
        erro: false,
        messagem: "cadastrar usuarios"
    });
});

app.post('/login', async(req, res)=>{
    console.log(req.body);

   return res.json({
        erro: false,
        messagem: "Login"
    });
});
app.listen(8080, ()=>{
    console.log(`Servidor rodando na porta: http://localhost:8080`);
});