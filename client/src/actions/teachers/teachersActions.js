import actionConstant from '../../constants/actionConstant';
import fetch from "isomorphic-fetch";
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


export function addTeacher(input) {
  const addBody = {
    "firstName": input.firstName,
    "lastName": input.lastName,
    "email": input.email,
    "phone": input.phone
  }

  return dispatch =>

    dispatch(generalFetch('admin/teachers', 'post', addBody))
    .then((result) => {
      dispatch(setNewId(result.id));
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
      return dispatch(getTeachers())
    })

    .catch(error => {
      console.log('request failed', error);
    });
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
