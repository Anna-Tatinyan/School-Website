import { combineReducers } from 'redux';

import  {userLogin}  from './loginReducer';
import  {userStatus} from './statusReducer';

const mainReducer = combineReducers({
  userLogin,
  userStatus
});

export default mainReducer;
