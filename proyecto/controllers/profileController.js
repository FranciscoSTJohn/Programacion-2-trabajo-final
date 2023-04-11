let data = require('../data/index')
let profileController = {
    index: function(req, res){
        let usuario = data.usuario
        let productos = data.productos
        return res.render('profile', {usuario: usuario, productos:productos})
    },
    Edit: function(req, res){
        let usuario = data.usuario
        return res.render('profile-edit',{usuario: usuario})
    },
}
module.exports = profileController