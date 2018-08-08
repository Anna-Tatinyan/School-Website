var deleteClasses = require('../../controller/classes/deleteClasses.js');
var express = require('express');
var router = express.Router();
module.exports = router.delete('/admin/classes/:id',deleteClasses.deleteClasses);
