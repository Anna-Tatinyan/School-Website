var getTeachers = require('../../controller/teachers/getTeachers.js');
var express = require('express');
var router = express.Router();
module.exports = router.get('/admin/teachers',getTeachers.getTeachers);
