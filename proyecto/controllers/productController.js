let data = require('../data/index')

let productController = {
    index: function(req, res){
        let productos= data.productos
        return res.render('product', {productos: productos, comentarios: data.comentarios})
    },
    Add: function(req,res){
        return res.render('product-add',{})
    }

}
module.exports = productController