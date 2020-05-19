var express = require('express');
var router = express.Router();

var createExpense_controller = require('../controllers/createExpense_controller');

router.get('/', createExpense_controller.displayCreateExpense);
router.post('/', createExpense_controller.CreateExpense);

module.exports = router;