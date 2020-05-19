var express = require('express');
var router = express.Router();
const JwtMiddleware = require('../config/jwt-middleware')

//controller imports
var user_jwt_controller = require('../controllers/user-jwt_controller');

//routes
router.post('/user', user_jwt_controller.postUser);
router.post('/login', user_jwt_controller.loginUser);
router.post('/validate', user_jwt_controller.validate);
router.post('/profile', JwtMiddleware.checkToken, user_jwt_controller.profile);

module.exports = router;