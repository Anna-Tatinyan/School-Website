var getClasses = require('../../controller/classes/getClasses.js');
var express = require('express');
var router = express.Router();
module.exports = router.get('/admin/classes',getClasses.getClasses);
