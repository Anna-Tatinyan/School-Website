import actionConstant from '../../constants/actionConstant';

import {
  setNewId
} from "../commonActions"
import {
  generalFetch
} from "../fetchAction"


export function getTeachersArray(teachersArray) {

  return {
    teachersArray,
    type: actionConstant.GET_TEACHER
  };
}

export function getTeachers() {
  return dispatch =>


    dispatch(generalFetch('admin/teachers', 'GET'))

    .then(response => {
      dispatch(getTeachersArray(response));

    })


    .catch(error => {
      console.log('request failed', error);
    });
}


export function addTeacher(input, shouldEdit) {
  const addBody = {
    "firstName": input.firstName,
    "lastName": input.lastName,
    "email": input.email,
    "phone": input.phone
  }

  return dispatch =>

    dispatch(generalFetch('admin/teachers', 'post', addBody))
    .then((result) => {
      if (shouldEdit) {
        dispatch(setNewId(result.id));
      }
      return dispatch(getTeachers())
    })

    .catch(error => {
      console.log('request failed', error);
    });
}


export function deleteTeacher(id) {
  const deleteBody = {
    "id": id
  }
  return dispatch =>

    dispatch(generalFetch(`admin/teachers/${id}`, 'delete', deleteBody))

    .then(result => {
      if(result.error.name === "SequelizeForeignKeyConstraintError") {
        dispatch(errorMessage("You cannot eliminate a teacher that has a class"))
      }
      return dispatch(getTeachers())
    })

    .catch(error => {
      console.log('request failed', error);
    });
}
export function errorMessage(message) {

  return {
    message,
    type: actionConstant.DELETE_ERROR
  };
}

export function deleteErrorMessage() {
  return {
    type: actionConstant.RESET_MESSAGE
  }
}


export function updateTeacher(input) {
  const updateBody = {
    'firstName': input.firstName,
    'lastName': input.lastName,
    'phone': input.phone,
    'email': input.email,

  }
  return dispatch =>

    dispatch(generalFetch(`admin/teachers/${input.id}`, "put", updateBody))
    .then(result => {
      return dispatch(getTeachers())
    })

    .catch(error => {
      console.log('request failed', error);
    });

}
