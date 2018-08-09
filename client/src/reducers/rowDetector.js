
import actionConstant from "../constants/actionConstant";
import history from "../history";
const initialState = {
    row: null
};

export function rowDetector(state = initialState, action) {

  switch (action.type) {

    case actionConstant.RAW_DETECT:{
     return{
       ...state,
       row: action.id,

     };
   }
        break;
        default:
          return state;
    }
  }
