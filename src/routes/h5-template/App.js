import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '@/components/Header';
import { getHeaderInfo } from '@/reducers/header/actions';

const App = props => {
  return (
    <div className={''}>
      <Header staticContext={props.staticContext} />
      {/* App 组件在客户端和服务器的入扣文件已经展示，现在循环 Routes中routes里面的路由，进行二级路由渲染 */}
      {renderRoutes(props.route.routes)}
    </div>
  );
};

App.loadData = store => {
  return store.dispatch(getHeaderInfo());
};

export default App;
