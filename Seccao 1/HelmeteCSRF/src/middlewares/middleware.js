exports.middlewareGlobal = (req, res, next) =>{
    res.locals.umaVariavelLocal ='Este e o valor da variavel local';
    next();
}

exports.outroMiddleware = (req, res, next) =>{
    next();
};

exports.checkCsrfError =(err, req, res, next) =>{
    if(err && err.code ==='EBADCSRFTOKEN'){
        return res.render('404');
    }
}