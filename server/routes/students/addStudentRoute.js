var addStudents = require('../../controller/students/addStudents.js');
var express = require('express');
var router = express.Router();
module.exports = router.post('/admin/students',addStudents.addStudent);
