var express = require('express');
var router = express.Router();

var dashboard_controller = require('../controllers/dashboard_controller');

router.get('/', dashboard_controller.displayMain);
router.post('/', dashboard_controller.postMain);

module.exports = router;