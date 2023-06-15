let db = require('../database/models'); 
let op= db.Sequelize.Op;

let searchResultsController = {
    index: function(req, res){
        let buscado=req.query.search;
        let errors = {}
        
        let filtrados={
            include:[{association: "usuario"}],
            where:{
                [op.or]:[
                {nombre_producto:{[op.like]: `%${buscado}%`}},
                {descripcion_corta:{[op.like]:`%${buscado}%`}}
                ] 
            },
            order: [["fecha_carga","DESC"]]
        }
                
        db.Producto.findAll(filtrados)
            .then(function(productos){
                if ({productos:{[op.in]:`%${buscado}%`}}){
                    return res.render('search-results', {productos: productos, buscado:buscado})
                    }
                else{
                    errors.message = "No se encontro ";
                    res.locals.errors = errors
                    return res.render('search-results',{productos: productos, buscado:buscado})}
                
                })
        
            .catch(function(e){
                console.log(e);
            })
    }// esta es una barrita del metodo index
    }// esta es la barrita final del controlador

module.exports = searchResultsController

