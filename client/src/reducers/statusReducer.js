
import actionConstant from "../constants/actionConstant";
import history from "../history";
const initialState = {

  email: '',
  password: "",
  buttonIsDisabled: true,

};

export function userStatus(state = initialState, action) {
  switch (action.type) {

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

          case actionConstant.LOGOUT: {
              localStorage.removeItem('user');
              history.push('/login')
              return {}
          }

        break;
        default:
          return state;
    }
  }
