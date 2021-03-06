import _ from 'lodash';

import { CHANG_LOGIN_STATUS } from './contants';

const InitialState = {
  isLogin: true
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case CHANG_LOGIN_STATUS:
      return _.assign({}, state, {
        isLogin: action.payload.isLogin
      });

    default:
      return state;
  }
};
