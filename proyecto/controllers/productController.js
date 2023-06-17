let db = require('../database/models');



let productController = {
    index: function(req, res){
        let id= req.params.id;
        db.Producto.findByPk(id,{
            include:[
                {association:"usuario"},
                {association: "los_comentarios", include:[{association:"el_usuario"}],limit : 6, } //order:['createdAt','DESC'] chequear porque no me dej hacerlos descendentes
        ]})
            .then(function(productos){
                console.log(productos)
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
    }, 

    borrarLogueado: function (req, res) {
        let errors = {}
        
        if (req.session.user == undefined){
                errors.message = "Debes ingresar a tu cuenta para borrrar un producto"
                res.locals.errors = errors;
                return res.render('login')
        }
        else{
            let id = req.params.id
            db.Producto.findByPk(id,{
                include: [
                    {association: "usuario"},{association: "los_comentarios", include: [{association: "el_usuario"}]
                } ]
              })
            .then(function(producto_borrar){
                if (req.session.user.id == producto_borrar.user_id){
                    return res.render('product-borrado',{producto_borrar})
                }})
            .catch(function(e){
                console.log(e);
            })
        }
    },
    borrarDefinitivo: function (req,res) {
        db.Producto.destroy({
            where: {id: req.body.id_producto}
        })
        .then( res.redirect("/"))
            .catch(function(e){
                console.log(e);
            })
    },
    comentarios: function (req, res) { 
        let id = req.params.id
        let errors = {}

        let comentario_user = {
            productos_id : req.body.id_producto, 
            user_id : req.session.user.id, 
            comentario : req.body.comentario
        }
        if (req.session.user != undefined){
            if (req.body.comentario == ""){
                errors.message = "No se puede enviar un comentario vacio!"
                res.locals.errors = errors;
                
                db.Producto.findByPk(id,{
                    include:[
                        {association:"usuario"},
                        {association: "los_comentarios", include:[{association:"el_usuario"}]}], 
                        order: [
                            ['createdAt', 'DESC']
                        ],
                  })
                .then(function(productos){
                    console.log(productos);
                    return res.render('product', {productos: productos});
                })
                .catch( function(er){
                    console.log(er);
                })
    
            } 
            else{
                db.Comentario.create(comentario_user)
                .then(function(coments){
                    return res.redirect(`/product/id/${req.body.id_producto}`)
                })
                .catch( function(er){
                    console.log(er);
                })
            };
        } 
        else{
            errors.message = "Para realizas un comentario deber iniciar sesion primero!"
            res.locals.errors = errors; 
            res.render ('login')
        }
     }
}

module.exports = productController