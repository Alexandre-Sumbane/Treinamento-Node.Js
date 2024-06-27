const session = require('express-session');
const flash = require('connect-flash');

const guardar =(req, res)=>{
    //req.session.user_date = req.body;
    //req.flash('user', req.body);

    req.flash('success', 'Now you are registed');

    res.redirect('/Login');
}

module.exports = guardar;