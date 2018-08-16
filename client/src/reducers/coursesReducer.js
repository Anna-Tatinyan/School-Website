
import actionConstant from "../constants/actionConstant";
import history from "../history";
const initialState = {

  coursesArray: []
};

export function getCoursesArray(state = initialState, action) {

  switch (action.type) {


      case actionConstant.GET_COURSE: {

            return Object.assign({}, state, {
              ...state,

              coursesArray: action.coursesArray
            });
          }

        break;
        default:
          return state;
    }
  }
