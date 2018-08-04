import actionConstant  from '../constants/actionConstant';


export function loginError(error) {
  return { error, type: actionConstant.LOGGED_FAILED };
}

export function loginRequest(email, password) {
  const user = {email: email, password: password};
  return { user, type: actionConstant.LOGIN_ATTEMPT };
}

export function loginSuccess(response) {
  return dispatch => {
    dispatch({ response, type: actionConstant.LOGGED_SUCCESSFULLY });
  
  };
}
