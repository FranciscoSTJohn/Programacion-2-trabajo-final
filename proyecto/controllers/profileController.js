let data = require('../data/index')
let profileController = {
    index: function(req, res){
        let usuario = data.usuario
        return res.render('profile', {usuario: usuario})
    },
    Edit: function(req, res){
        let usuario = data.usuario
        return res.render('profile-edit',{usuario: usuario})
    },
}
module.exports = profileController