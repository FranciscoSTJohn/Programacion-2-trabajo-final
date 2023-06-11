let db = require('../database/models'); 
let op= db.Sequelize.Op;

let searchResultsController = {
    index: function(req, res){
        let buscado=req.query.search;
        
        let filtrados={
            where:{
                [op.or]:[
                {nombre_producto:{[op.like]: `%${buscado}%`}},
                {descripcion:{[op.like]:`%${buscado}%`}}
                ] 
            },
            // order: [["","DESC"]]
        }
        db.Producto.findAll(filtrados)
            .then(function(productos){
                return res.render('search-results', {productos})
            })
            .catch(function(error){
                console.log(error);
            })
    }
}
module.exports = searchResultsController