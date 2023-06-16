let express =require('express');
let router = express.Router();
let productController = require('../controllers/productController')

//rutas.
router.get('/id/:id', productController.index);

router.get('/add',productController.addLogueado);

router.post('/add', productController.add);

router.get('/edit/:id',productController.editLogueado)

router.post('/enviarCambios',productController.edit)

router.post('/comentarios/:id', productController.comentarios)

router.get('/borrar/:id', productController.borrarLogueado);

router.post('/borrado', productController.borrarDefinitivo);



module.exports = router;