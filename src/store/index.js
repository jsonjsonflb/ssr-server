import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '@/reducers';
const getStore = () => {
  // 每次获取store都初始化一次，确保每个用户获取的store是独立的
  return createStore(reducers, applyMiddleware(thunk));
};

export default getStore;
