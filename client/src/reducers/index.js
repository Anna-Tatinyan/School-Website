import { combineReducers } from 'redux';

import  {userLogin}  from './loginReducer';
import  {userStatus} from './statusReducer';
import {getStudentsArray} from './studentReducer';
import {getTeachersArray} from './teacherReducer';
import {getClassesArray} from "./classesReducer";
import {isModalOpen} from "./isModalOpen";
import {rowDetector} from "./rowDetector";

const mainReducer = combineReducers({
  userLogin,
  userStatus,
  getStudentsArray,
  rowDetector,
  getTeachersArray,
  getClassesArray,
  isModalOpen
});

export default mainReducer;
