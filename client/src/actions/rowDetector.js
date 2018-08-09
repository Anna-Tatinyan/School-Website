import actionConstant  from '../constants/actionConstant';
import fetch from "isomorphic-fetch";



export function rowDetector(id){
  return {
    type: actionConstant.RAW_DETECT,
    id
  }
}
