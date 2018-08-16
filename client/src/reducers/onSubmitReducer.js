
import actionConstant from "../constants/actionConstant";
import history from "../history";
const initialState = {

  newID: null

};

export function onSubmitReducer(state = initialState, action) {

  switch (action.type) {

          case actionConstant.NEW_ADDED_ID:{
       return{
         ...state,
         newID: action.id
       };
     }
     case  actionConstant.RESET_ID:{
       return{
         ...state,
         newID: null
       };
     }
     default:
       return state;
   }
 }
