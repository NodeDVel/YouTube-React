import { combineReducers } from 'redux';
import playList from './playList';
import youtubeList from './youtubeList';

const rootReducer = combineReducers({ 
  playList, 
  youtubeList,
});

export default rootReducer;