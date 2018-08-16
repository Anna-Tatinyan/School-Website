import actionConstant from '../../constants/actionConstant';
import validator from 'validator';
import history from "../../history";
import {
  loginError,
  loginSuccess
} from './statusActions';
import {
  generalFetch
} from "../fetchAction"

export function login(email, password) {
  const loginBody = {
    "email": email,
    "password": password,
  }
  const headersLogin = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',

  }
  return dispatch =>
    dispatch(generalFetch('login', 'post', loginBody, headersLogin))

    .then(response => {
      if (response.code >= 200 && response.code < 300) {

        if (response.token) {
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
    .catch(error => {
      console.log('request failed', error);
    });
}


export function logout() {
  return {
    type: actionConstant.LOGOUT
  };
}


export function formRequirments(email, password) {

  const validateEmail = validator.isEmail(email);
  const passwordValidate = validator.isLength(password, {
    min: 3
  });
  const emptyEmail = validator.isEmpty(email);
  const emptyPassword = validator.isEmpty(password);
  return validateEmail && !emptyPassword && !emptyEmail && passwordValidate

}
