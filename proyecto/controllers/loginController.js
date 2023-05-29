let loginController = {
    index: function(req, res){
        if(req.session.user != undefined){
            return res.redirect("/")
        }
        else {
            return res.render('login',)
        }
    },
    login: function(req,res){
        //falta agarrar los datos del formulario
        // req.session.user ={
        //     mail: buscar el mail en la db
        //     username: buscar el name en la db
        // }

        //Preguntar si el usuario tildo el checkbox para recordarlo
        if (req.body.recordame != undefined){
            res.cookie()
        }
        return res.send(req.session)
    },
    logout: function(req,res){
        req.session.destroy();
        return res.redirect("/")
    }

}
module.exports = loginController