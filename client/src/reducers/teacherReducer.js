
import actionConstant from "../constants/actionConstant";
import history from "../history";
const initialState = {

   teachersArray: [],
   editing: false,
   isModalOpened: false,
   raw: null

};

export function getTeachersArray(state = initialState, action) {

  switch (action.type) {


      case actionConstant.GET_TEACHER: {

            return Object.assign({}, state, {
              ...state,

              teachersArray: action.teachersArray
            });
          }


        break;
        default:
          return state;
    }
  }
