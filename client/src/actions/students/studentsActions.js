import actionConstant from '../../constants/actionConstant';
import {
  setNewId
} from "../commonActions"
import {
  generalFetch
} from "../fetchAction"


export function getStudentsArray(studentsArray) {

  return {
    studentsArray,
    type: actionConstant.GET_STUDENT
  };
}

export function getStudents() {
  return dispatch =>


    dispatch(generalFetch('admin/students', 'GET'))

    .then(response => {
      dispatch(getStudentsArray(response));

    })


    .catch(error => {
      console.log('request failed', error);
    });
}

export function addStudent(input) {
  const addBody = {
    "firstName": input.firstName,
    "lastName": input.lastName,
    "email": input.email,
    "age": input.age,
    "phone": input.phone,
    "gender": input.gender,
    "classId": input.classId
  }

  return dispatch =>

    dispatch(generalFetch('admin/students', 'post', addBody))
    .then((result) => {
      dispatch(setNewId(result.id));
      return dispatch(getStudents())
    })

    .catch(error => {
      console.log('request failed', error);
    });
}


export function deleteStudent(id) {
  const deleteBody = {
    "id": id
  }
  return dispatch =>

    dispatch(generalFetch(`admin/students/${id}`, 'delete', deleteBody))


    .then(result => {
      return dispatch(getStudents())
    })
    .catch(error => {
      console.log('request failed', error);
    });
}



export function updateStudent(input) {
  const updateBody = {
    'firstName': input.firstName,
    'lastName': input.lastName,
    'age': input.age,
    'gender': input.gender,
    'phone': input.phone,
    'email': input.email,


  }
  return dispatch => {

    dispatch(generalFetch(`admin/students/${input.id}`, "put", updateBody))

      .catch(error => {
        console.log('request failed', error);
      });
  }
}
