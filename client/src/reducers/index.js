import { combineReducers } from 'redux';

import  {userLogin}  from './loginReducer';
import  {userStatus} from './statusReducer';
import {getStudentsArray} from './studentReducer';
import {getTeachersArray} from './teacherReducer';
import {getClassesArray} from "./classesReducer";
import {isModalOpen} from "./isModalOpen";

const mainReducer = combineReducers({
  userLogin,
  userStatus,
  getStudentsArray,
  getTeachersArray,
  getClassesArray,
  isModalOpen
});

export default mainReducer;
