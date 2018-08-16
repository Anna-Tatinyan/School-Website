import actionConstant from '../constants/actionConstant';


export function setNewId(id) {

  return {
    id,
    type: actionConstant.NEW_ADDED_ID
  };

}
export function deleteAddedId() {
  return {
    type: actionConstant.RESET_ID
  }
}
