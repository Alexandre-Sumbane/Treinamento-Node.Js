const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send(`
        <form action ="/" method="POST">
            Nome: <input type="text" name ="nome">
            <button>Enviar Formulario</button>
        </form>
    `);
});

app.post("/", (req, res)=>{
    res.send("Recebi o formulario");
});
app.get('/contacto', (req, res)=>{
    res.send("Obrigado por entrar em contacto conosco");
});

app.listen(3000, () =>{
    console.log("Acessar http://localhost:3000");
    console.log("Servidor na porta 3000");
});