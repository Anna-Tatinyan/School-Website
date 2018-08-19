import actionConstant from '../../constants/actionConstant';
import {
  setNewId
} from "../commonActions"
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
export function addCourses(input, shouldEdit) {

  const addBody = {
    "name": input.name,
    "teacherId": input.teacherId,
    "classId": input.classId,
    "startDate": input.startDate,
    "endDate": input.endDate
  }
  return dispatch =>

    dispatch(generalFetch('admin/courses', 'post', addBody))
    .then((result) => {
      if (shouldEdit) {
        dispatch(setNewId(result.id));
      }
      const timeBody = {
        "courseId": result.id,
        "startTime": input.time[0].startTime,
        "endTime": input.time[0].endTime,
        "weekDay": input.time[0].weekDay,
        "classId": input.classId


      }
      dispatch(generalFetch('admin/time', 'post', timeBody))
        .then(time => {
          dispatch(messageNotification(time.message))
        })
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
export function messageNotification(message) {

  return {
    message,
    type: actionConstant.MESSAGE_NOTIFY
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
  const updateBody = {
    "name": input.name,
    "teacherId": input.teacherId,
    "classId": input.classId,
    "startDate": input.startDate,
    "endDate": input.endDate

  }
  const timeBody = {
    "courseId": input.id,
    "startTime": input.time[0].startTime,
    "endTime": input.time[0].endTime,
    "weekDay": input.time[0].weekDay,
    "classId": input.classId

  }
  return dispatch => {
    //
    dispatch(generalFetch(`admin/courses/${input.id}`, "put", updateBody))
      .then(result => {
        dispatch(generalFetch(`admin/time/edit`, "put", timeBody))
          .then(time => {
            dispatch(messageNotification(time.message))
            dispatch(getCourses())
          })
          return dispatch(getCourses())
      })

      .catch(error => {
        console.log('request failed', error);
      });
  }
}
