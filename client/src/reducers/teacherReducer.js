import actionConstant from "../constants/actionConstant";

const initialState = {

  teachersArray: []
};

export function getTeachersArray(state = initialState, action) {

  switch (action.type) {


    case actionConstant.GET_TEACHER:

      return Object.assign({}, state, {
        ...state,

        teachersArray: action.teachersArray
      });

    default:
      return state;
  }
}
