
import actionConstant  from '../constants/actionConstant';

export function setLoginPending(isLoginPending) {
  return {
    type: actionConstant.LOGIN_PENDING,
    isLoginPending
  };
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
export function login(email, password) {
  return dispatch => {
    debugger;
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    LoginAPICall(email, password, error => {

      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

function LoginAPICall(email, password, callback) {
  setTimeout(() => {
    if (email === 'example.com' && password === 'hey') {

      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}
