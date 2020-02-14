import React from 'react';
import Routes from '@/routes';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, Switch, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import getStore from '@/store'; // 每次获取store都初始化一次，确保每个用户获取的store是独立的

export const render = req => {
  // 服务端获取路由地址（只能通过请求参数获取）
  const pathName = req.path;

  const store = getStore();
  // 再这个位置 loadData ,并修改store的值
  // 根据路由的路径，来往store里面加数据

  // inside a request
  const matchRoutes = [];
  // use `some` to imitate `<Switch>` behavior of selecting only
  // the first to match
  Routes.some(route => {
    // 如果路由匹配成功 match
    const match = matchPath(req.path, route);

    if (match) {
      matchRoutes.push(route);
    }
  });
  // 让matchRoutes里面所有的组件，对应的 loadData 方法执行一次
  console.log(matchRoutes);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={pathName} context={{}}>
        <Switch>
          {Routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head>
        <title>hello-ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="/index.js"></script>
    </html>
  `;
};
