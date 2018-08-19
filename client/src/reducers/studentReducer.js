import actionConstant from "../constants/actionConstant";

const initialState = {

  studentsArray: []

};

export function getStudentsArray(state = initialState, action) {

  switch (action.type) {


    case actionConstant.GET_STUDENT:

      return Object.assign({}, state, {
        ...state,

        studentsArray: action.studentsArray
      });

    default:
      return state;
  }
}
