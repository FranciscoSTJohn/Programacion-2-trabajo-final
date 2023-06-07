let express =require('express');
let router = express.Router();
let registerController = require('../controllers/registerController')

//rutas.
router.get('/', registerController.index);

router.post('/',registerController.store)



module.exports = router;