var loginRouter = require('../controller/loginController.js');
var express = require('express');
var router = express.Router();
module.exports = router.post('/login',loginRouter.login);
