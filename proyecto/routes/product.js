let express =require('express');
let router = express.Router();
let productController = require('../controllers/productController')

//rutas.
router.get('/id/:id', productController.index);
router.get('/add',productController.addLogueado);
router.post('/add', productController.add);
router.get('/edit',productController.editLogueado)
router.post('/edit',productController.edit)


module.exports = router;