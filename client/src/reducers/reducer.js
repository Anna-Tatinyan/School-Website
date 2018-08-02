
import actionConstant from "../constants/actionConstant"

const initialState = {

  email: '',
  password: "",
  buttonIsDisabled: true,
  isLoggingIn: false,
  isLoggedIn: false,
  error: null
};
export default function user(state = initialState, action) {
  switch (action.type) {
    case actionConstant.LOGIN_ATTEMPT:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        email: action.email,
        password: action.password // Note you shouldn't store user's password in real apps
      };
    case actionConstant.LOGGED_FAILED:
      return {
        ...state,
        error: action.error,
        isLoggingIn: false,
        isLoggedIn: false
      };
    case actionConstant.LOGGED_SUCCESSFULLY:
      return {
        ...state,
        error: null,
        isLoggingIn: false,
        isLoggedIn: true
      };
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
      break;
    default:
      return state;
  }


//
//
//
// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case actionConstant.LOGIN_PENDING:
//       return Object.assign({}, state, {
//         isLoginPending: action.isLoginPending
//       });
//
//     case actionConstant.LOGIN_SUCCESS:
//       return Object.assign({}, state, {
//         isLoginSuccess: action.isLoginSuccess
//       });
//
//     case actionConstant.LOGIN_FAILURE:
//       return Object.assign({}, state, {
//         loginError: action.loginError
//       });
//
//
//     default:
//       return state;
//   }
}
