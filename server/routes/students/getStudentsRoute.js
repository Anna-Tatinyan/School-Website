var getStudents = require('../../controller/students/getStudents.js');
var express = require('express');
var router = express.Router();
module.exports = router.get('/admin/students',getStudents.studentResult);
