let db = require('../database/models'); 

let profileController = {
    index: function(req, res){
        let id =req.params.id
        db.User.findByPk(id,{
            include:[{association: "los_productos" ,order: [["createdAt","DESC"]]},{association: "los_comentarios"}]
        })
            .then(function(perfiles){
                return res.render('profile', {perfiles: perfiles})
            })
            .catch( function(error){
                console.log(error);
            })
    },
    editLogeado: function(req, res){
        let errors = {}
        if (req.session.user == undefined) {
                errors.message = 'Debes ingresar para editar tu usuario'
                res.locals.errors = errors
                return res.render('login')
            }

        
        let id_user = req.params.id;
        db.User.findByPk(id_user)
            .then(function (user) 
            {   
                return res.render('profile-edit', {info_user: user})
            } 
            )
            .catch(function (e) {
                console.log(e);
            })
    },
    edit: function (req,res) {
        let formulario = req.body
         
        db.User.update({
            email : formulario.mail, 
            nombreUsuario : formulario.user, 
            fecha : formulario.fecha,
            DNI : formulario.DNI
        },{where:{id:formulario.user_id}})
        .then(function(perfil){
            res.redirect(`/profile/id/${req.session.user.id}`)
        }
        )
        .catch(function(e){
            console.log(e)
        })
    }
}
module.exports = profileController