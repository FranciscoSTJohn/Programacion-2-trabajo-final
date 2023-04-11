let data = require ('../data/index')
let searchResultsController = {
    index: function(req, res){
        let productos = data.productos
        return res.render('search-results', {productos: productos, comentarios: data.comentarios})
    }
}
module.exports = searchResultsController