
import actionConstant from "../constants/actionConstant"

const initialState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionConstant.LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case actionConstant.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case actionConstant.LOGIN_FAILURE:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}
