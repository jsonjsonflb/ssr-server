import _ from 'lodash';

import { CHANGE_LIST } from './contants';

const InitialState = {
  name: 'ewqeqw',
  cityData: []
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      const cityData =
        action.payload && action.payload.hotCities
          ? action.payload.hotCities
          : [];
      return _.assign({}, state, {
        cityData
      });

    default:
      return state;
  }
};
