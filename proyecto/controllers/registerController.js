let db = require('../database/models'); 
const bcrypt = require('bcryptjs'); 
let registerController = {
    index: function(req, res){
        return res.render('register', {})
    },
    store: function(req,res){
        let form= req.body  
        let user = {
            email:form.mail,
            password:form.contra,
            fecha:form.fecha,
            nombreUsuario:form.user,
            DNI:form.DNI,
        }

        
        db.User.create(user)
        .then(function(usuariocreado) {
            return res.redirect('/')
        })
        .catch(function(e){
            console.log(e);
        })
    }
    }    

module.exports = registerController