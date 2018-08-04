import actionConstant  from '../constants/actionConstant';
import validator from 'validator';
import history from "../history";
import { loginError, loginSuccess, loginRequest } from './statusActions';
import fetch from "isomorphic-fetch";



export function isButtonEnabled() {
  return {
    type: actionConstant.ENABLE_BUTTON,
  }
}

export function setEmail(e){
  return{
    type: actionConstant.SET_EMAIL,
    e
  }
}

export function  setPassword(e){
  return{
    type: actionConstant.SET_PASSWORD,
    e
  }
}

export function login(email, password) {
  return dispatch =>

    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/login`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
      }),
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      if (response.code >= 200 && response.code < 300) {

        if(response.token) {
          localStorage.setItem('user', JSON.stringify(response.token));
          dispatch(loginSuccess(response.message));
          history.push('/Admin');
        }

      } else {
        const error = new Error(response.message);
        error.response = response;
        dispatch(loginError(error));
      }
    })

    .catch(error => { console.log('request failed', error); });
}


export function logout() {
  return { type: actionConstant.LOGOUT };
}


export function formRequirments(email, password) {

    const validateEmail = validator.isEmail(email);
    const passwordValidate = validator.isLength(password, { min: 3 });
    const emptyEmail = validator.isEmpty(email);
    const emptyPassword = validator.isEmpty(password);
    return validateEmail && !emptyPassword && !emptyEmail && passwordValidate

}
