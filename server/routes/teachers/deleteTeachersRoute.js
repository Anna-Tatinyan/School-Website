var deleteTeacher = require('../../controller/teachers/deleteTeacher.js');
var express = require('express');
var router = express.Router();
module.exports = router.delete('/admin/teachers/:id',deleteTeacher.deleteTeacher);
