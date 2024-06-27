exports.paginaInicial = (req, res) =>{
    res.send(`
        <form action ="/" method="POST">
            Nome: <input type="text" name ="nome">
            <button>Enviar Formulario</button>
        </form>
    `);
};

exports.trataPost = (req, res) =>{
    res.send("Sou sua nova rota de Post");
}

