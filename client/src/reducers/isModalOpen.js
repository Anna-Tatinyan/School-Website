
import actionConstant from "../constants/actionConstant";
import history from "../history";
const initialState = {
  classesArray: [],
  showModal: false
};

export function isModalOpen(state = initialState, action) {

  switch (action.type) {


      case actionConstant.IS_MODAL_OPEN: {

            return Object.assign({}, state, {
              ...state,

              showModal: action.open
            });
          }

        break;
        default:
          return state;
    }
  }
