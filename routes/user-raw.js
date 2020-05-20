var express = require('express');
var router = express.Router();

//controller imports
var user_raw_controller = require('../controllers/user-raw_controller');

//routes
router.get('/', user_raw_controller.getUser);


module.exports = router;