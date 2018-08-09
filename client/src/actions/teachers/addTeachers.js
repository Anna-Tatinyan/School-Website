import actionConstant  from '../../constants/actionConstant';
import fetch from "isomorphic-fetch";

export function addTeacher(firstName,lastName,phone,email) {

  return dispatch =>

    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/admin/teachers`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "phone": phone
      }),
    })

    .catch(error => { console.log('request failed', error); });
}
