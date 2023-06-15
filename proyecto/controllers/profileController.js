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
    Edit: function(req, res){
        
        return res.render('profile-edit')
    },
}
module.exports = profileController