const flash = require('connect-flash');
const profile = (req, res) =>{
    const message = req.flash('success')[0];
    //delete req.session.user_date;
    console.log(message);
    res.render('profile', {
        message: message
    });
}

module.exports = profile;