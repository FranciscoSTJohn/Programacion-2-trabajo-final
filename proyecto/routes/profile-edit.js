let express =require('express');
let router = express.Router();
let profileEditController = require('../controllers/profileController')

//rutas.
router.get('/', profileEditController.index);



module.exports = router;