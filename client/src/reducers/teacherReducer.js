import actionConstant from "../constants/actionConstant";

const initialState = {

  teachersArray: [],
  errorMessage: ""
};

export function getTeachersArray(state = initialState, action) {

  switch (action.type) {


    case actionConstant.GET_TEACHER:

      return Object.assign({}, state, {
        ...state,

        teachersArray: action.teachersArray
      });
      case actionConstant.DELETE_ERROR:

        return Object.assign({}, state, {
          ...state,

          errorMessage: action.message
        });
        case actionConstant.RESET_MESSAGE:
          return {
            ...state,
            errorMessage: null
          };

    default:
      return state;
  }
}
