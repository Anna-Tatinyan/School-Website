var addClasses = require('../../controller/classes/addClasses.js');
var express = require('express');
var router = express.Router();
module.exports = router.post('/admin/classes',addClasses.addClasses);
