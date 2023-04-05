let express =require('express');
let router = express.Router();
let searchResultsController = require('../controllers/searchResultsController')

//rutas.
router.get('/', searchResultsController.index);



module.exports = router;