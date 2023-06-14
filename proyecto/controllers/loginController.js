let db = require('../database/models')
let bcrypt = require('bcryptjs')
let op = db.Sequelize.Op

let loginController = {
    index: function(req, res){
        if(req.session.user != undefined){
            return res.redirect("/")
        }
        else {
            return res.render('login',)
        }
    },
    login: function(req,res){
        let email_buscado = req.body.mail

        let contraseña = req.body.contra

        let filtrado = {
            where: [{email: {[op.like]:email_buscado}}]
        }
       
        db.User.findOne(filtrado)
        .then (function(resultado){
            let errors = {}
            if (contraseña == '' && email_buscado == '') {
                errors.message = 'La cotraseña y el campo de mail estan vacios '; 
                res.locals.errors = errors; 
                return res.render('login',{resultado:resultado}); 
            }
            if (contraseña == '') {
                errors.message = 'La contraseña esta vacia!';
                res.locals.errors = errors;
                return res.render ('login',{resultado:resultado})
            } 
            if (email_buscado == '') {
                errors.message = 'El email esta vacio!';
                res.locals.errors = errors;
                return res.render ('login',{resultado:resultado})
            } 
           
            if (resultado == null) {
                errors.message = 'Email no econtrado!'
                res.locals.errors = errors
                return res.render('login',{resultado:resultado})
            }
        
            let compare = bcrypt.compareSync(contraseña,resultado.password)
            
             

            if(compare){
                req.session.user = resultado

                if (req.body.Recordame != undefined){
                    res.cookie('info_usuario',resultado.id,{max:1000*60*12000})
                }
                return res.redirect('/')
            }
            else {
                errors.message = "La contraseña no coincide"
                res.locals.errors= errors
                return res.render('login',{resultado:resultado})
            }
            }
        

        )},

        logout: function(req,res) {
            req.session.destroy()

            res.clearCookie('info_usuario')

            res.redirect('/')
            }
        

        
            
        
           
   

    }
module.exports = loginController