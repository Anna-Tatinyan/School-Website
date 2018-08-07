import actionConstant  from '../../constants/actionConstant';
import fetch from "isomorphic-fetch";

export function deleteTeacher(id) {
  return dispatch =>

    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/admin/teachers/${id}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

    .catch(error => { console.log('request failed', error); });
  }
