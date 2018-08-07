var updateClasses = require('../../controller/classes/updateClasses.js');
var express = require('express');
var router = express.Router();
module.exports = router.put('/admin/classes',updateClasses.updateClasses);
