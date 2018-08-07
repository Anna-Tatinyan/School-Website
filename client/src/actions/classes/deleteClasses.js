import actionConstant  from '../../constants/actionConstant';
import fetch from "isomorphic-fetch";

export function deleteClasses(id) {

  return dispatch =>

    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/admin/classes`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id": id
      }),
    })

    .catch(error => { console.log('request failed', error); });
  }
