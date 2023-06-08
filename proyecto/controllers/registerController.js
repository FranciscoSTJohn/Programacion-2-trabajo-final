let db = require('../database/models'); 
const bcrypt = require('bcryptjs'); 
let registerController = {
    index: function(req, res){
        return res.render('register', {})
    },
    store: function (req, res) {

         let form = req.body;
         res.redirect('/')
             
        let user = {
            email: form.mail, 
            password: bcrypt.hashSync(form.contra,10),
            nombreUsuarios: form.user,
            fecha: form.fecha,
            DNI: form.DNI
            }

        let errors = {}
        if (form.mail == "") {
            errors.mensaje = "Ingresa tu email!";
            res.locals.error = errors;
            return res.render('register'); 
        }

        db.User.create(user)
            .then(function(usuarioCreado){ 
                console.log(usuarioCreado);
                return res.redirect('/product');
         })
             .catch(function(error){
                console.log(error);
            })
         }
    }    

module.exports = registerController