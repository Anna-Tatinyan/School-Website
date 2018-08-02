
import actionConstant from "../constants/actionConstant"

const initialState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  email: '',
  password: "mother",
  buttonIsDisabled: true
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

    case actionConstant.SET_EMAIL: {
      return Object.assign({}, state, {
        email: action.e
      });
    }
    case actionConstant.SET_PASSWORD: {
      return Object.assign({}, state, {
        password: action.e
      });
    }
    case actionConstant.ENABLE_BUTTON:{
      return {
        ...state,
        buttonIsDisabled: false
      }
    }
    default:
      return state;
  }
}
