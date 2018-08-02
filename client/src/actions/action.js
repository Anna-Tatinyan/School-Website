import validator from 'validator';

import actionConstant  from '../constants/actionConstant';



import fetch from "isomorphic-fetch";

export function loginError(error) {
  return { error, type: actionConstant.LOGGED_FAILED };
}

// You'll have a side effect here so (dispatch) => {} form is a good idea
export function loginSuccess(response) {
  return dispatch => {
    dispatch({ response, type: actionConstant.LOGGED_SUCCESSFULLY });
    // router.transitionTo('/dashboard');
  };
}

export function loginRequest(email, password) {
  const user = {email: email, password: password};
  return { user, type: actionConstant.LOGIN_ATTEMPT };
}

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
    fetch('http://localhost:3040/api/login', {
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
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        dispatch(loginSuccess(response.statusText));
      } else {
          console.log(response);
        const error = new Error(response.statusText);
        error.response = response;
        dispatch(loginError(error));
      }
    })
    .catch(error => { console.log('request failed', error); });
}



export function formRequirments(email, password) {
    console.log(email, password)
    const validateEmail = validator.isEmail(email);
    const passwordValidate = validator.isLength(password, { min: 3 });
    const emptyEmail = validator.isEmpty(email);
    const emptyPassword = validator.isEmpty(password);

    return validateEmail && !emptyPassword && !emptyEmail && passwordValidate

}
