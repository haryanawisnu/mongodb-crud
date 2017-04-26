var express = require('express');
var router = express.Router();
var controllers = require('../controllers/booksControllers');

/* GET home page. */
router.get('/', controllers.getall);
router.post('/', controllers.create);
router.delete('/:isbn', controllers.delete);
//router.put('/:isbn', controllers.update);

module.exports = router;
