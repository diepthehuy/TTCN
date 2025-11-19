const express = require('express');
const router = express.Router();
const resetPasswordController  = require('../Controllers/resetPasswordController');

router.post('/',resetPasswordController.resetPassword);


module.exports = router;