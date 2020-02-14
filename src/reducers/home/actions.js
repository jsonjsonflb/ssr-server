import axios from 'axios';
import { helper } from '@/utils';
import { CHANGE_LIST } from './contants';

export const getHomeList = () => {
  return dispatch => {
    axios.get('http://localhost:3000/rest/cities').then(res => {
      const data = res.data;
      dispatch(helper.createAction(CHANGE_LIST, data));
    });
  };
};
