
import actionConstant from "../constants/actionConstant";
import history from "../history";
const initialState = {

  isLoggingIn: false,
  isLoggedIn: false,
  error: null
};
export function userLogin(state = initialState, action) {
  switch (action.type) {
    case actionConstant.LOGIN_ATTEMPT: {

      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        email: action.email,
        password: action.password
      };
    }

    case actionConstant.LOGGED_FAILED: {
      return {
        ...state,
        error: action.error,
        isLoggingIn: false,
        isLoggedIn: false
      };
    }
    case actionConstant.LOGGED_SUCCESSFULLY: {
      return {
        ...state,
        error: null,
        isLoggingIn: false,
        isLoggedIn: true
      };
    }

    break;
    default:
      return state
    }
  }
