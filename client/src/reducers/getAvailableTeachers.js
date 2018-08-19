import actionConstant from "../constants/actionConstant";

const initialState = {

  availableTeachersArray: []

};

export function getAvailableTeachers(state = initialState, action) {

  switch (action.type) {


    case actionConstant.GET_AVAILABLE_TEACHERS:

      return Object.assign({}, state, {
        ...state,

        availableTeachersArray: action.availableTeachersArray
      });


    default:
      return state;
  }
}
