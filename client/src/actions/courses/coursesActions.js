import actionConstant from '../../constants/actionConstant';
import {
  setNewId
} from "../commonActions"
import fetch from "isomorphic-fetch";
import {
  generalFetch
} from "../fetchAction"


export function getCourses() {
  return dispatch =>


    dispatch(generalFetch('admin/courses', 'GET'))

    .then(response => {
      dispatch(getCoursesArray(response));

    })

    .catch(error => {
      console.log('request failed', error);
    });
}
export function addCourses(input) {

  const addBody = {
    "name": input.name,
    "teacherId": input.teacherId,
    "classId": input.classId,
    "startDate": input.startDate,
    "endDate": input.endDate
  }
  console.log(input);
  return dispatch =>

    dispatch(generalFetch('admin/courses', 'post', addBody))
    .then((result) => {
      dispatch(setNewId(result.id));
      return dispatch(getCourses())
    })

    .catch(error => {
      console.log('request failed', error);
    });
}


export function deleteCourses(id) {

  const deleteBody = {
    "id": id
  }
  return dispatch =>

    dispatch(generalFetch(`admin/courses/${id}`, 'delete', deleteBody))


    .then(result => {
      return dispatch(getCourses())
    })

    .catch(error => {
      console.log('request failed', error);
    });
}



export function getAvailableTeachersArray(availableTeachersArray) {

  return {
    availableTeachersArray,
    type: actionConstant.GET_AVAILABLE_TEACHERS
  };
}

export function getAvailableTeachers() {
  return dispatch =>

    dispatch(generalFetch('admin/courses/availaBleTeachers', "GET"))

    .then(teacherArray => {
      dispatch(getAvailableTeachersArray(teacherArray));


    })
    .catch(error => {
      console.log('request failed', error);
    });
}


export function getCoursesArray(coursesArray) {

  return {
    coursesArray,
    type: actionConstant.GET_COURSE
  };
}



export function updateCourses(input) {
  console.log(input)
  const updateBody = {
    "name": input.name,
    "teacherId": input.teacherId,
    "classId": input.classId,
    "startDate": input.startDate,
    "endDate": input.endDate

  }
  return dispatch => {

    dispatch(generalFetch(`admin/courses/${input.id}`, "put", updateBody))
      .then(result => {
        return dispatch(getCourses())
      })
      .catch(error => {
        console.log('request failed', error);
      });
  }
}
