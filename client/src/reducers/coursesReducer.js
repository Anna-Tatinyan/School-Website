import actionConstant from "../constants/actionConstant";

const initialState = {

  coursesArray: [],
  errorMessage: ""
};

export function getCoursesArray(state = initialState, action) {

  switch (action.type) {


    case actionConstant.GET_COURSE:

      return Object.assign({}, state, {
        ...state,

        coursesArray: action.coursesArray
      });

    case actionConstant.MESSAGE_NOTIFY:

      return Object.assign({}, state, {
        ...state,

        errorMessage: action.message
      });

    default:
      return state;
  }
}
