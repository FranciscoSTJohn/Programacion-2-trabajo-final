let db = require('../database/models'); 
const bcrypt = require('bcryptjs'); 
let registerController = {
    index: function(req, res){
        return res.render('register', {})
    },
    store: function (req, res) {
        let form = req.body
        let errors = {};
        if (form.email == '') {
             errors.mensaje = "Tienes que ingresar un mail!"
             res.locals.errors = errors; 
             return res.render('register'); 

        }
        else if (form.password == '') {
            errors.mensaje = "Tienes que ingresar una contraseña!"
            res.locals.errors = errors; 
            return res.render ('register')
        }
        else {         
           let user = {
               email: form.mail, 
               password: bcrypt.hashSync(form.contra,10),
               nombreUsuarios: form.user,
               fecha: form.fecha,   
               DNI: form.DNI
               }
   
           db.User.create(user)
               .then(function(usuarioCreado){ 
                   console.log(usuarioCreado);
                   return res.redirect('/');
            })
                .catch(function(error){
                   console.log(error);
               })
       }
    
    }
    }    

module.exports = registerController