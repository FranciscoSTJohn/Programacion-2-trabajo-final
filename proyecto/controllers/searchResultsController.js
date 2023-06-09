let db= require("../database/models");
let op= db.sequelize.Op;


let searchResultsController = {
    index: function(req, res){
        let buscado=req.query.search;
        
        let filtrados={
            where:{
                [op]:[
                    {nombre_producto:{[op.like]: `%${buscado}%`}},
                    {descripcion:{[op.like]:`%${buscado}%`}}
                ]
            }
        }
        db.Producto.findall(filtrados)
        .then((Producto))
            return res.render('search-results', {Producto: nombre_producto})
    }
}
module.exports = searchResultsController