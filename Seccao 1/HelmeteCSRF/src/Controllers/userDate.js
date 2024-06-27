const session = require('express-session');
const flash = require('connect-flash');

const guardar =(req, res)=>{

    req.flash('success', 'Now you are registed');

    res.redirect('/profile');
}

module.exports = guardar;