import { helper } from '@/utils';
import { GET_TRANSLATION_LIST } from './contants';

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/rest/getTestList').then(res => {
      if (res.data.code === 200) {
        const { data } = res.data.data;
        dispatch(helper.createAction(GET_TRANSLATION_LIST, { list: data }));
      }
    });
  };
};
