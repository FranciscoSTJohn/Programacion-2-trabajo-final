let express =require('express');
let router = express.Router();
let loginController = require('../controllers/loginController')

//rutas.
router.get('/', loginController.index);



module.exports = router;