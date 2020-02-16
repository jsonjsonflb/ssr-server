import _ from 'lodash';

import { GET_TRANSLATION_LIST } from './contants';

const InitialState = {
  list: []
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case GET_TRANSLATION_LIST:
      return _.assign({}, state, {
        list: action.payload.list
      });

    default:
      return state;
  }
};
