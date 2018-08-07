import actionConstant  from '../../constants/actionConstant';
import fetch from "isomorphic-fetch";

export function getStudentsArray(studentsArray) {

  return { studentsArray, type: actionConstant.GET_STUDENT };
}

export function getStudents() {

  return dispatch =>

    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/admin/students`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {

        return response.json()

    })
    .then(response => {
        dispatch(getStudentsArray(response));

    })


    .catch(error => { console.log('request failed', error); });
}
