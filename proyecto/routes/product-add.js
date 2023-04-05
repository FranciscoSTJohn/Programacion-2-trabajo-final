let express =require('express');
let router = express.Router();
let productController = require('../controllers/productController')

//rutas.
router.get('/',productController.Add);



module.exports = router;