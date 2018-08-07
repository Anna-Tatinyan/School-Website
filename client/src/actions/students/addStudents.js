import actionConstant  from '../../constants/actionConstant';
import fetch from "isomorphic-fetch";

export function addStudent(firstName,lastName,age,gender,phone,email) {

  return dispatch =>

    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/admin/students`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "age": age,
        "phone": phone,
        "gender": gender,
      }),
    })

    .catch(error => { console.log('request failed', error); });
}
