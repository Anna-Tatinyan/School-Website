import actionConstant from '../../constants/actionConstant';


export function loginError(error) {
  return {
    error,
    type: actionConstant.LOGGED_FAILED
  };
}


export function loginSuccess(response) {
  return dispatch => {
    dispatch({
      response,
      type: actionConstant.LOGGED_SUCCESSFULLY
    });

  };
}
