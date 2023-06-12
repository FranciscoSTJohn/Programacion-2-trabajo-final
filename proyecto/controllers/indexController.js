let db = require('../database/models'); 

let indexController = {
    index: function(req, res){
        db.Producto.findAll({
            order: [["fecha_carga","DESC"]]
        })
            .then (function(productos){
                return res.render('index', {productos: productos})
            })
            .catch(function(error){
                console.log(error);
            })
    }

}
module.exports = indexController