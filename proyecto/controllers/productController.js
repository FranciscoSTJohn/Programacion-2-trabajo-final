let data = require('../data/index')

let productController = {
    index: function(req, res){
        return res.render('product', {})
    },
    Add: function(req,res){
        return res.render('product-add',{})
    }

}
module.exports = productController