let express =require('express');
let router = express.Router();
let loginController = require('../controllers/loginController')

//rutas.
router.get('/', loginController.index);

router.post('/',loginController.login);



module.exports = router;