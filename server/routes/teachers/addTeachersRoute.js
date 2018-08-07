var addTeacher = require('../../controller/teachers/addTeacher.js');
var express = require('express');
var router = express.Router();
module.exports = router.post('/admin/teachers',addTeacher.addTeacher);
