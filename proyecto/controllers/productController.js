let db = require('../database/models')


let productController = {
    index: function(req, res){
        let id= req.params.id;
        db.Producto.findByPk(id,{
            include:[
                {association: "los_comentarios", include:[{association:"el_usuario"}]},
                {association:"usuario"}
        ]})
            .then(function(productos){
                return res.render('product', {productos: productos})
            })
            .catch( function(error){
                console.log(error);
            })
        

    },
    Add: function(req,res){
        return res.render('product-add',{usuario:data.usuario})
    }

}
module.exports = productController