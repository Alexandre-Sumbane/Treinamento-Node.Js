const { where } = require('sequelize');
const { User } = require('../../models');
const bcrypt = require('bcrypt');

const dateUser  = async (req, res) =>{

    try{
        const { firstName, lastName, email, senha, confSenha } = req.body;

        //Validacoes
        if(!firstName){
            return res.status(422).json({msg: "o nome é obrigatório"});
        }

        if(!lastName){
            return res.status(422).json({msg: "o Sobrenome é obrigatório"});
        }

        if(!email){
            return res.status(422).json({msg: "o email é obrigatório"});
        }

        if(!senha){
            return res.status(422).json({msg: "A senha é obrigatória"});
        }

        if(confSenha!==senha){
            return res.status(422).json({msg: "Senha diferente da anterior"});
        }

        //Verificar se o usuario ja existe
           
           const userExists = await User.findOne({where:{email: email}});           
        if(userExists){
            return res.status(422).json({msg: "Por favor utilize outro email!"});
        }

            const salt = await bcrypt.genSalt(12);
            const passwordHash =await bcrypt.hash(senha, salt);

        //Criar Usuario
        const newUser = await User.create({
            firstName: firstName,
            lastName: lastName, 
            email: email,
            senha: passwordHash
        });
          try{
                await newUser.save();
          }catch(error){
            return res.status(500).json({msg: 'Aconteceu um erro no servidor tente mais tarde'});
          };
          res.status(201).json({ message: 'User created successfully', user: newUser });
          //res.redirect('/success');
    }catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
      }
}

module.exports = dateUser;