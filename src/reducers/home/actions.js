import { helper } from '@/utils';
import { CHANGE_LIST } from './contants';

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/rest/cities').then(res => {
      const data = res.data;
      dispatch(helper.createAction(CHANGE_LIST, data));
    });
  };
};
