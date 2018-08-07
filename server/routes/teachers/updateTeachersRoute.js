var updateTeachers = require('../../controller/teachers/updateTeachers.js');
var express = require('express');
var router = express.Router();
module.exports = router.put('/admin/teachers/:id',updateTeachers.updateTeachers);
