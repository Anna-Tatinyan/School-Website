var deleteStudent = require('../../controller/students/deleteStudent.js');
var express = require('express');
var router = express.Router();
module.exports = router.delete('/admin/students',deleteStudent.deleteStudent);
