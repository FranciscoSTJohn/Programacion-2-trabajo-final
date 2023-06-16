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
            descripcion_corta : req.body.descript_brief,
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

        
        let id_producto = req.params.id;
        db.Producto.findByPk(id_producto,{include:[{association:"usuario"}]})
            .then(function (producto) 
            {   
                return res.render('product-edit', {info_producto: producto})

                // 
                // else if (req.session.user.email == producto.usuario.email) {
                //     return res.redirect (`/profile/id/${producto.usuario.id}`)
                // }
                // else{ 
                // return res.render('product-edit', {info_producto: producto})

                // }            CHEQUEAR CON ALE SOBRE PORQUE NO ME DEJA USAR DATOS NO STRINGS
            } 
            )
            .catch(function (e) {
                console.log(e);
            })
        
    },
    edit: function (req,res) {
        let formulario = req.body
        let producto_editado= {
            imagenes : formulario.imagen, 
            nombre_producto : formulario.productNom, 
            descripcion : formulario.descript,
            descripcion_corta : formulario.descript_brief,
        }
        db.Producto.update({
            imagenes : formulario.imagen, 
            nombre_producto : formulario.productNom, 
            descripcion : formulario.descript,
            descripcion_corta : formulario.descript_brief
        },{where:{id:formulario.producto_id}})
        .then(
            res.redirect(`/profile/id/${req.session.user.id}`))
        .catch(function(e){
            console.log(e)
        })
    }

}
module.exports = productController