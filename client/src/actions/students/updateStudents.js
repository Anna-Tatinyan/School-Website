import actionConstant  from '../../constants/actionConstant';
import fetch from "isomorphic-fetch";


export function updateStudent(input) {
  return dispatch =>

    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/admin/students/${input.id}`, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'firstName': input.firstName,
       'lastName': input.lastName,
       'age': input.age,
       'gender': input.gender,
       'phone': input.phone,
       'email': input.email,

      }),
    })
    .catch(error => { console.log('request failed', error); });
}
