var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user_controller');

// router.get('/', dashboard_controller.displayMain);
router.post('/', user_controller.postUser);
router.get('/', user_controller.getUser);
router.put('/', user_controller.updateUser);
router.delete('/:id', user_controller.deleteUser);

module.exports = router;