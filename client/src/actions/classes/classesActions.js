import actionConstant from '../../constants/actionConstant';
import {
  setNewId
} from "../commonActions"
import {
  generalFetch
} from "../fetchAction"


export function getClassesArray(classesArray) {

  return {
    classesArray,
    type: actionConstant.GET_CLASS
  };
}
export function getClasses() {
  return dispatch =>


    dispatch(generalFetch('admin/classes', 'GET'))

    .then(response => {
      dispatch(getClassesArray(response));

    })

    .catch(error => {
      console.log('request failed', error);
    });
}
export function addClasses(input, shouldEdit) {

  const addBody = {
    "name": input.name,
    "teacherId": input.teacherId
  }

  return dispatch =>

    dispatch(generalFetch('admin/classes', 'post', addBody))
    .then((result) => {
      if (shouldEdit) {
        dispatch(setNewId(result.id));
      }
      return dispatch(getClasses())
    })

    .catch(error => {
      console.log('request failed', error);
    });
}


export function deleteClasses(id) {

  const deleteBody = {
    "id": id
  }
  return dispatch =>

    dispatch(generalFetch(`admin/classes/${id}`, 'delete', deleteBody))


    .then(result => {
      return dispatch(getClasses())
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

    dispatch(generalFetch('admin/classes/availaBleTeachers', "GET"))

    .then(teacherArray => {
      dispatch(getAvailableTeachersArray(teacherArray));


    })
    .catch(error => {
      console.log('request failed', error);
    });
}





export function updateClasses(input) {
  const updateBody = {
    "id": input.id,
    "name": input.name,
    'teacherId': input.teacherId

  }
  return dispatch => {

    dispatch(generalFetch(`admin/classes/${input.id}`, "put", updateBody))
      .then(result => {
        return dispatch(getClasses())
      })
      .catch(error => {
        console.log('request failed', error);
      });
  }
}
