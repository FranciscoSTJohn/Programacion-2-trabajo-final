let db = require('../database/models'); 

let indexController = {
    index: function(req, res){
        db.Producto.findAll(
            {
                include:[
                    {association: "usuario"}]
            },
            {
            order: [["createdAt","DESC"]]
        }
        )
            .then (function(productos){
                return res.render('index', {productos: productos})
            })
            .catch(function(error){
                console.log(error);
            })
    }

}
module.exports = indexController