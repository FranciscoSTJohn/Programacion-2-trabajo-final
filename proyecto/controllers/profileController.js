let db = require('../database/models'); 

let profileController = {
    index: function(req, res){
        let id =req.params.id
        db.User.findByPk(id)
            .then(function(perfiles){
                return res.send(perfiles)
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