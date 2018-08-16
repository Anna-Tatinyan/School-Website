import React from 'react';
import { Router, Route, IndexRoute, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';

import Login from '../containers/login/Login.js';
import Home from '../components/home/Home.js';
import Error from '../components/error/Error.js';
import history from '../history';
import Admin from "../components/admin/Admin";
import { PrivateRoute } from './privateRoute';

import Classes from '../containers/classes/classesList/ClassesListContainer';
import AddClasses from "../containers/classes/addClasses/AddClassesContainer";
import EditClasses from "../containers/classes/editClasses/EditClassesContainer";

import Courses from '../containers/courses/coursesList/CoursesListContainer';
import AddCourses from "../containers/courses/addCourses/AddCoursesContainer";
import EditCourses from "../containers/courses/editCourses/EditCoursesContainer";


import Students from '../containers/students/studentList/StudentListContainer';
import AddStudents from "../containers/students/addStudent/AddStudentContainer";
import EditStudents from "../containers/students/editStudent/EditStudentContainer"

import Teachers from '../containers/teachers/teacherList/TeacherListContainer';
import AddTeachers from "../containers/teachers/addTeacher/AddTeacherContainer";
import EditTeachers from "../containers/teachers/editTeacher/EditTeacherContainer";


export default class Routy extends React.Component{
  render(){
    return(
    <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <Route  path="/login" render={() => (
              localStorage.getItem('user') ? (<Redirect to={"/admin"}/>) : (<Login/>))}/>

          <PrivateRoute exact path="/admin/teachers" component={Teachers} />
          <PrivateRoute exact path="/admin/classes" component={Classes} />
          <PrivateRoute exact path="/admin/students" component={Students} />
          <PrivateRoute exact path="/admin/courses" component={Courses} />

          <PrivateRoute exact path="/admin/courses/add" component={AddCourses} />
          <PrivateRoute exact path="/admin/courses/edit/:id" component={EditCourses} />


          <PrivateRoute exact path="/admin/students/add" component={AddStudents} />
          <PrivateRoute exact path="/admin/students/edit/:id" component={EditStudents} />


          <PrivateRoute exact path="/admin/teachers/add" component={AddTeachers} />
          <PrivateRoute exact path="/admin/teachers/edit/:id" component={EditTeachers} />

          <PrivateRoute exact path="/admin/classes/add" component={AddClasses} />
          <PrivateRoute exact path="/admin/classes/edit/:id" component={EditClasses} />
          <Route component={Error} />

           //nav items and route will automatically updated upon selection

        </Switch>
    </Router>
    )
  }
}
