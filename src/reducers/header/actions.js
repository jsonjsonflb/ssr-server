import { helper } from '@/utils';
import { CHANG_LOGIN_STATUS } from './contants';

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/rest/isLogin').then(res => {
      dispatch(
        helper.createAction(CHANG_LOGIN_STATUS, { isLogin: res.data.data })
      );
    });
  };
};

export const userLogin = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/rest/login').then(res => {
      if (res.data.code === 200) {
        dispatch(
          helper.createAction(CHANG_LOGIN_STATUS, { isLogin: res.data.data })
        );
      }
    });
  };
};

export const userLoginOut = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/rest/loginOut').then(res => {
      if (res.data.code === 200) {
        dispatch(
          helper.createAction(CHANG_LOGIN_STATUS, { isLogin: res.data.data })
        );
      }
    });
  };
};
