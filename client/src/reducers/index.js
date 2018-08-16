import { combineReducers } from 'redux';

import  {userLogin}  from './loginReducer';
import  {userStatus} from './statusReducer';
import {getStudentsArray} from './studentReducer';
import {getTeachersArray} from './teacherReducer';
import {getClassesArray} from "./classesReducer";
import {onSubmitReducer} from "./onSubmitReducer";
import {getAvailableTeachers} from './getAvailableTeachers';

import {getCoursesArray} from './coursesReducer'

const mainReducer = combineReducers({
  userLogin,
  userStatus,
  getStudentsArray,
  getTeachersArray,
  getClassesArray,
  onSubmitReducer,
  getAvailableTeachers,
  getCoursesArray
});

export default mainReducer;
