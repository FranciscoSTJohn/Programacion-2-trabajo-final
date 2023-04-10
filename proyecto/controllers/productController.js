let data = require('../data/index')

let productController = {
    index: function(req, res){
        let productos= data.productos
        return res.render('product', {productos: productos, comentarios: data.comentarios})
    },
    Add: function(req,res){
        return res.render('product-add',{usuario:data.usuario})
    }

}
module.exports = productController