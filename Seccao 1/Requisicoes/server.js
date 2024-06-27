const express = require('express');
const app = express();

//htpp://facebook.com/User/Profiles/12345?campanha = googleads&nome_campanha = seila
//URL Params

//Query strings

//                        Req     
//Params: URL por exemplo: http://facebook/User/1
//query : URL por exemplo: http://facebook/User/id=1&nome=Alexy/
//body para method POST

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.send(`
        <form action ="/" method="POST">
            Nome: <input type="text" name ="nome">
            <button>Enviar Formulario</button>
        </form>
    `);
});

app.post("/", (req, res)=>{
    console.log(req.body);
    res.send(`O que voce me enviou foi ${req.body.nome}`);
});

app.get('/testes/:idUsuario?/:parametro?', (req, res) =>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.sobrenome);
});
app.listen(3000, () =>{
    console.log("Acessar http://localhost:3000");
    console.log("Servidor na porta 3000");
});