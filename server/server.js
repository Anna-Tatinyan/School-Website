const express = require('express');
const app = express();

const router = express.Router();
require('dotenv').config();


const getRoute = require('./routes/getRoute');
const loginRoute = require('./routes/loginRoute');
const getStudentsRoute = require('./routes/students/getStudentsRoute');
const deleteStudentRoute = require('./routes/students/deleteStudentRoute');
const updateStudentRoute = require('./routes/students/updateStudentRoute');
const addStudentRoute = require('./routes/students/addStudentRoute');
const getTeachersRoute = require('./routes/teachers/getTeachersRoute');
const deleteTeachersRoute = require('./routes/teachers/deleteTeachersRoute');
const updateTeachersRoute = require('./routes/teachers/updateTeachersRoute');
const addTeachersRoute = require('./routes/teachers/addTeachersRoute');
const getClassesRoute = require('./routes/classes/getClassesRoute');
const deleteClassesRoute = require('./routes/classes/deleteClassesRoute');
const updateClassesRoute = require('./routes//classes/updateClassesRoute');
const addClassesRoute = require('./routes/classes/addClassesRoute');

app.use(express.json());


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', [`http://${process.env.HOST}:${process.env.CLIENT_PORT}`]);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use('/', getTeachersRoute);
app.use('/', addTeachersRoute);
app.use('/', updateTeachersRoute);
app.use('/', deleteTeachersRoute)
app.use('/', getRoute);
app.use('/', loginRoute);
app.use('/', getStudentsRoute);
app.use('/', deleteStudentRoute);
app.use('/', updateStudentRoute);
app.use('/', addStudentRoute);
app.use('/', getClassesRoute);
app.use('/', deleteClassesRoute);
app.use('/', updateClassesRoute);
app.use('/', addClassesRoute)



const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
