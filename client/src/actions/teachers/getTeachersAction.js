import actionConstant  from '../../constants/actionConstant';
import fetch from "isomorphic-fetch";

export function getTeachersArray(teachersArray) {

  return { teachersArray, type: actionConstant.GET_TEACHER };
}

export function getTeachers() {

  return dispatch =>

    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/admin/teachers`, {
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
        dispatch(getTeachersArray(response));

    })


    .catch(error => { console.log('request failed', error); });
}
