const {User} = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

    const loginDados = async(req, res)=>{
        try {
            const {email, senha} = req.body;
            if(!email){
                return res.status(422).json({msg: "o email é obrigatório"});
            }
        
            if(!senha){
                return res.status(422).json({msg: "A senha é obrigatória"});
            }
        
            const user = await User.findOne({where:{email: email}});  
        
            if(!user){
                return res.status(422).json({msg: "O usuario nao existe!"});
            }
        
            const checkPassword = await bcrypt.compare(senha, user.senha);
        
            if(!checkPassword){
                return res.status(422).json({msg: "O Senha ou usuario invalido!"});
            }            
        } catch (error) {
            return res.status(422).json({error: "Alguma coisa esta errada!"});
        }

        const secret = process.env.SECRET;

        const token = jwt.sign({
            id: User.id
        }, secret,)
        res.status(200).json({msg: "Autenticacao realizada com sucesso!", token});
    
    }
    
    


module.exports = loginDados;