import actionConstant  from '../constants/actionConstant';
import fetch from "isomorphic-fetch";

export function isModalOpen(open) {

  return {
    type: actionConstant.IS_MODAL_OPEN,
    open
  }
}
