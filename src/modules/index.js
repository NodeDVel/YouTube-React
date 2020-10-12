import { combineReducers } from 'redux';
import playList from './playList';

const rootReducer = combineReducers({ 
  playList, 
});

export default rootReducer;