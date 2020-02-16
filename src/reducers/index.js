import { combineReducers } from 'redux';
import homeReducer from './home/homeReducer';
import headerReducer from './header/headerReducer';
import translationReducer from './Translation/translationReducer';

const reducers = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer
});

export default reducers;
