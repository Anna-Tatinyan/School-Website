import actionConstant  from '../../constants/actionConstant';
import fetch from "isomorphic-fetch";

export function getClassesArray(classesArray) {

  return { classesArray, type: actionConstant.GET_CLASS };
}

export function getClasses() {

  return dispatch =>

    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/admin/classes`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {

        return response.json()

    })
    .then(response => {
      console.log(response)
        dispatch(getClassesArray(response));

    })


    .catch(error => { console.log('request failed', error); });
}
