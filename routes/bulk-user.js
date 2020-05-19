var express = require('express');
var router = express.Router();

var bulk_user_controller = require('../controllers/bulk-user_controller');

// router.get('/', dashboard_controller.displayMain);
router.post('/', bulk_user_controller.postBulkUser);

module.exports = router;