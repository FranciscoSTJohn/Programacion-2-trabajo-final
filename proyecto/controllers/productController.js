let db = require('../database/models')


let productController = {
    index: function(req, res){
        let id= req.params.id;
        db.Producto.findByPk(id,{
            // asociacion de comentarios con productos
        })
            .then(function(productos){
                return res.render('product', {productos: productos})
            })
            .catch( function(error){
                console.log(error);
            })
        db.Com

    },
    Add: function(req,res){
        return res.render('product-add',{usuario:data.usuario})
    }

}
module.exports = productController