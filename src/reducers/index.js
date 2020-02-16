import { combineReducers } from 'redux';
import homeReducer from './home/homeReducer';
import headerReducer from './header/headerReducer';

const reducers = combineReducers({
  home: homeReducer,
  header: headerReducer
});

export default reducers;
