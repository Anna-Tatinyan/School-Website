import actionConstant from "../constants/actionConstant";

const initialState = {

  classesArray: []
};

export function getClassesArray(state = initialState, action) {

  switch (action.type) {


    case actionConstant.GET_CLASS:

      return Object.assign({}, state, {
        ...state,

        classesArray: action.classesArray
      });


    default:
      return state;
  }
}
