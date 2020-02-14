import { combineReducers } from 'redux';
import homeReducer from './home/homeReducer';

const reducers = combineReducers({
  home: homeReducer
});

export default reducers;
