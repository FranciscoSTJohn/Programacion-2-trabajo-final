let express =require('express');
let router = express.Router();
let profileController = require('../controllers/profileController')

//rutas.
router.get('/', profileController.index);
router.get('/edit', profileController.Edit);


module.exports = router;