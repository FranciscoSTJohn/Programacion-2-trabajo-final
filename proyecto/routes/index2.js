let express =require('express');
let router = express.Router();
let indexController = require('../controllers/indexController')

//rutas.
router.get('/', indexController.index);



module.exports = router;