import actionConstant  from '../../constants/actionConstant';
import fetch from "isomorphic-fetch";

export function addClasses(name, description) {

  return dispatch =>

    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/admin/classes`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": name,
        "description": description

      }),
    })

    .catch(error => { console.log('request failed', error); });
}
