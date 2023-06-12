let express =require('express');
let router = express.Router();
let productController = require('../controllers/productController')

//rutas.
router.get('/id/:id', productController.index);
router.get('/add',productController.Add);


module.exports = router;