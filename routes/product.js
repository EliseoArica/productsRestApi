var express = require('express');
var router = express.Router();
let controller = require('../controllers/ProductController');

router.get('/', function(req, res) {
	controller.show(req,res);
});
router.get('/:id', function(req, res) {
	controller.detail(req, res);
});
router.post('/', function(req, res) {
	controller.create(req, res);
});
router.put('/', function(req, res) {
	controller.update(req, res);
});
router.delete('/:id', function(req, res,) {
	controller.delete(req, res);
});

module.exports = router;
