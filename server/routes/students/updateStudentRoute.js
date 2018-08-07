var updateStudents = require('../../controller/students/updateStudents.js');
var express = require('express');
var router = express.Router();
module.exports = router.put('/admin/students/:id',updateStudents.updateStudent);
