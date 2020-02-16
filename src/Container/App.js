import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '@/components/Header';

const App = props => {
  return (
    <div className={''}>
      <Header />
      {/* App 组件在客户端和服务器的入扣文件已经展示，现在循环 Routes中routes里面的路由，进行二级路由渲染 */}
      {renderRoutes(props.route.routes)}
    </div>
  );
};

export default App;
