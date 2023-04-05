let express =require('express');
let router = express.Router();
let productAddController = require('../controllers/productController')

//rutas.
router.get('/', productAddController.index);



module.exports = router;