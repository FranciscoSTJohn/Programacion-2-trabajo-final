let db = require('../database/models')
let registerController = {
    index: function(req, res){
        return res.render('register', {})
    },
    store: function (req, res) {

         let form = req.body;
         res.redirect('/')
             
        let user = {
            email: form.mail, 
            password: form.contra,
            nombreUsuarios: form.user,
            fecha: form.fecha,
            DNI: form.DNI
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