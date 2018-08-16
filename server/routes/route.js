var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');


const updateClasses = require('../controller/classes/updateClasses.js');
const getClasses = require('../controller/classes/getClasses.js');
const deleteClasses = require('../controller/classes/deleteClasses.js');
const getAvailableTeachers = require('../controller/classes/getAvailableTeachers.js');
const addClasses = require('../controller/classes/addClasses.js');

const updateStudents = require('../controller/students/updateStudents.js');
const getStudents = require('../controller/students/getStudents.js');
const deleteStudent = require('../controller/students/deleteStudent.js');
const addStudents = require('../controller/students/addStudents.js');

const updateTeachers = require('../controller/teachers/updateTeachers.js');
const addTeacher = require('../controller/teachers/addTeacher.js');
const getTeachers = require('../controller/teachers/getTeachers.js');
const deleteTeacher = require('../controller/teachers/deleteTeacher.js');
const loginRouter = require('../controller/login/loginController.js');

router.post('/login',loginRouter.login);

  router.use(getToken);
  router.use(verifyToken);

router.put('/admin/classes/:id',updateClasses.updateClasses);
router.get('/admin/classes',getClasses.getClasses);
router.delete('/admin/classes/:id',deleteClasses.deleteClasses);
router.get('/admin/classes/availaBleTeachers',getAvailableTeachers.getAvailableTeachers);
router.post('/admin/classes',addClasses.addClasses);
router.put('/admin/students/:id',updateStudents.updateStudent);
router.delete('/admin/students/:id',deleteStudent.deleteStudent);
router.post('/admin/students',addStudents.addStudent);
router.get('/admin/students',getStudents.studentResult);
router.put('/admin/teachers/:id',updateTeachers.updateTeachers);
router.post('/admin/teachers',addTeacher.addTeacher);
router.get('/admin/teachers',getTeachers.getTeachers);
router.delete('/admin/teachers/:id',deleteTeacher.deleteTeacher);

// router.get('/', function(req, res) {
//   res.json({ message: 'welcome to our upload module apis' });
// });


function getToken(req, res, next) {

    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearerToken = bearerHeader.substring(8, bearerHeader.length-1);
        
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(401);
    }
}

function verifyToken(req, res, next) {
    jwt.verify(req.token, process.env.JWT_SECRET , (err) => {
        if (err) {
            res.sendStatus(401);
        } else {
            next();
        }
    })
}
module.exports = router;
