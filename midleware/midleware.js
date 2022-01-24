const jwt = require('jsonwebtoken')
const User = require('../modls/PersonalSchema')
const requireUser = (request, response , next) => {

    const token = request.cookies.jwt;
    if (token) {
        jwt.verify(token, 'Hend secret', (err,decodedToken) => {
            if (err) {
                console.log(err.message);
                response.redirect('/Login')    
            } else {
                console.log(decodedToken);
                next();
            }
        })

    }
    else {
        response.redirect('/Login');
    }
}

const checkUser = (request,response,next) => {
    const token = request.cookies.jwt;
    if (token){
        jwt.verify(token, 'Hend secret', (err,decodedToken) => {
            if (err) {
                console.log(err.message);
                response.locals.user = null;
                next() ;  
            } else {
                console.log(decodedToken);
                let user =  User.findById(decodedToken.id);
                response.locals.user = user;
                next();
            }
        })
    } else {
        response.locals.user = null;
        next();
    }
}

module.exports = { requireUser, checkUser}