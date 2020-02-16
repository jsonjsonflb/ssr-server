import _ from 'lodash';

import { CHANGE_LIST } from './contants';

const InitialState = {
  name: 'ewqeqw',
  cityData: { hotCities: [] }
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return _.assign({}, state, {
        cityData: action.payload
      });

    default:
      return state;
  }
};
