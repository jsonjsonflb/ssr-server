import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '@/reducers';
// 解决问题： 在服务端发起请求的时候，因为没有域名，导致请求失败
// 根据客户端和服务端，使用不用的 axios，即：在不同情况下，增加请求地址前缀
// 利用 redux-thunk中 withExtraArgument，给thunk中增加一个可自定义的参数
import clientAxios from '@/client/request.ts';
import serverAxios from '@/server/request';

export const getStore = req => {
  // 写成方法的目的：每次获取store都初始化一次，确保每个用户获取的store是独立的

  // 传入服务器专用的 axios 配置
  return createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument(serverAxios(req))) // 传入req给axios,使服务端在发出请求的时候可以配置cookies
  );
};

export const getClientStore = () => {
  // 接受服务器请求的数据，同步客户端数据
  const defaultState = window.context.state;

  // // 传入客服端专用的 axios 配置
  return createStore(
    reducers,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
};
