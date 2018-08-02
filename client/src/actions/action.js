import validator from 'validator';

import actionConstant  from '../constants/actionConstant';

export function setLoginPending(isLoginPending) {
  return {
    type: actionConstant.LOGIN_PENDING,
    isLoginPending
  };
}


export function isButtonEnabled() {
  return {
    type: actionConstant.ENABLE_BUTTON,
  }
}


export function setLoginSuccess(isLoginSuccess) {
  return {
    type: actionConstant.LOGIN_SUCCESS,
    isLoginSuccess
  };
}

export function setLoginError(loginError) {
  return {
    type: actionConstant.LOGIN_FAILURE,
    loginError
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
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    loginAPICalls(email, password, error => {

      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

function loginAPICalls(email, password, callback) {
  setTimeout(() => {
    if (email === 'example.com' && password === 'admin123') {

      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}

export function formRequirments(email, password) {
    console.log(email, password)
    const validateEmail = validator.isEmail(email);
    const passwordValidate = validator.isLength(password, { min: 3 });
    const emptyEmail = validator.isEmpty(email);
    const emptyPassword = validator.isEmpty(password);

    return validateEmail && !emptyPassword && !emptyEmail && passwordValidate

}
