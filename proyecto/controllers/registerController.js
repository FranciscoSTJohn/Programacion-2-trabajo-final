let db = require('../database/models')
let registerController = {
    index: function(req, res){
        return res.render('register', {})
    },
    store: function (req, res) {
        let form = req.body; 
        console.log(form); 
        res.redirect('/'); 

        db.User.create(user)
        .then(function(usuarioCreado){ 
             console.log(usuarioCreado);
            return res.redirect('/');
        })
            .catch(function(error){
                console.log(error);
            })
        }
    }


module.exports = registerController