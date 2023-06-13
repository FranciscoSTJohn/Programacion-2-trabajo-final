let db = require('../database/models'); 
const bcrypt = require('bcryptjs'); 
let op =   db.Sequelize.Op

let registerController = {
    index: function(req, res){
        return res.render('register', {})
    },
    store: function(req,res){
        let form= req.body  
        let user = {
            email:form.mail,
            password:bcrypt.hashSync(form.contra,10),
            fecha:form.fecha,
            nombreUsuario:form.user,
            DNI:form.DNI,
        }
        let errors = {}
        //COMPLETAR EL CHEQUEO DE QUE EL MAIL YA EXISTA// EL RESTO YA FUNCIONA
        // let mail_repetido= {where:[{email: {[op.like]:req.body.mail}}]}

       
    //     db.User.findOne(mail_repetido)
    //     .then(function(mail_repetido){
    //     return mail_repetido
    //    })
    //    .catch(function(e){
    //     console.log(e);
    //    })


        if (req.body.mail == '' && req.body.contra == '' ){
            errors.message = "Los campos de Email y contraseña estan vacios, completelos";
            res.locals.errors = errors
            return res.render('register')
        }
        else if (req.body.mail == ''){
            errors.message = "El campo de Email esta vacio, completelo";
            res.locals.errors = errors
            return res.render('register')
        }  
        else if (req.body.contra == ''){
            errors.message = "El campo de Password esta vacio, completelo";
            res.locals.errors = errors
            return res.render('register')
        } 
        else if(req.body.contra.length <3){
            errors.message = "La contraseña debería tener al menos 3 caracteres";
            res.locals.errors = errors;
            return res.render('/register')
        }
        
        else{
            db.User.create(user)
            .then(function(usuariocreado) {
                return res.redirect('/')
            })
            .catch(function(e){
                console.log(e);
            })
        }
        
    }
    }    

module.exports = registerController