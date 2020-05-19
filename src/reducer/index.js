import { combineReducers } from 'redux';
import user from './user';
import goal from './goal';
const rootReducer = combineReducers({
  user,
  goal,
});

export default rootReducer;
