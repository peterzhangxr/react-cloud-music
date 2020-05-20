import { combineReducers } from 'redux-immutable'
import { reducer as _HomeReducer } from '../application/Home/store/index';

export default combineReducers({
  home: _HomeReducer
})