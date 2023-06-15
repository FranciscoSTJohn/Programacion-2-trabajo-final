let db = require('../database/models');
const { Edit } = require('./profileController');



let productController = {
    index: function(req, res){
        let id= req.params.id;
        db.Producto.findByPk(id,{
            include:[
                {association:"usuario"},
                {association: "los_comentarios", include:[{association:"el_usuario"}],limit : 6, } //order:['createdAt','DESC'] chequear porque no me dej hacerlos descendentes
        ]})
            .then(function(productos){
                return res.render('product', {productos: productos})
            })
            .catch( function(error){
                console.log(error);
            })
    },

    addLogueado: function (req,res) {
        if (req.session.user == undefined) {
            return res.redirect('/login')
        }
        else{ 
            return res.render('product-add')
        }
    },

    add: function(req,res){
        let product = {
            imagenes : req.body.imagen, 
            nombre_producto : req.body.productNom, 
            descripcion : req.body.descript,
            user_id : req.session.user.id
        }

        db.Producto.create(product)
        .then(function (productoCreado) {
            res.redirect(`/profile/id/${req.session.user.id}`)
        })
        .catch (function (e) {
            console.log(e);
        })
    },
    editLogueado: function (req,res) {

        let errors = {}
        if (req.session.user == undefined) {
            errors.message = 'Debes ingresar para editar tu producto'
            res.locals.errors = errors
            return res.render('login')
        }
        else{

            let id = req.params.id; 

            db.Producto.findByPk(id)
            .then(function (producto) {
                return res.render(producto)
                // if (req.session.user.id != producto.user_id) {
                //     return res.redirect (`/profile/id/${req.session.user.id}`)
                // }
                // else{
                //     return res.render('product-edit', {info_producto: producto})
                // }
            }
            )
            .catch(function (e) {
                console.log(e);
            })





            return res.render('product-edit')
        }
    },
    edit: function (req,res) {
        
    }

}
module.exports = productController