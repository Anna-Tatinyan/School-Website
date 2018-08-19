var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');


const classesController = require('../controller/classes/classesController.js');
const getAvailableTeachers = require('../controller/classes/getAvailableTeachers.js');
const studentsController = require('../controller/students/studentsController.js');
const coursesController = require('../controller/courses/coursesController.js');
const coursesTime = require('../controller/courses/coursesTime.js');
const teachersController = require('../controller/teachers/teachersController.js');

const loginRouter = require('../controller/login/loginController.js');

router.post('/login',loginRouter.login);

router.use(getToken);
router.use(verifyToken);

router.put('/admin/classes/:id',classesController.updateClasses);
router.get('/admin/classes',classesController.getClasses);
router.delete('/admin/classes/:id',classesController.deleteClasses);
router.post('/admin/classes',classesController.addClasses);
router.get('/admin/classes/availaBleTeachers',getAvailableTeachers.getAvailableTeachers);

router.put('/admin/teachers/:id',teachersController.updateTeachers);
router.post('/admin/teachers',teachersController.addTeacher);
router.get('/admin/teachers',teachersController.getTeachers);
router.delete('/admin/teachers/:id',teachersController.deleteTeacher);

router.get('/admin/students',studentsController.studentResult);
router.put('/admin/students/:id',studentsController.updateStudent);
router.delete('/admin/students/:id',studentsController.deleteStudent);
router.post('/admin/students',studentsController.addStudent);


router.get('/admin/courses',coursesController.getCourses);
router.put('/admin/courses/:id',coursesController.updateCourses);
router.delete('/admin/courses/:id',coursesController.deleteCourses);
router.post('/admin/courses',coursesController.addCourses);
router.post('/admin/time',coursesTime.addCoursesTime);
router.put('/admin/time/edit',coursesTime.updateTime);


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
