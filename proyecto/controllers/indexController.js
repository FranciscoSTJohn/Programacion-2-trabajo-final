let data = require('../data/index')

let indexController = {
    index: function(req, res){
        let usuario = data.usuario
        let productos = data.productos

        return res.render('index', {productos: productos})
    },

}
module.exports = indexController