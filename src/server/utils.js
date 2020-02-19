import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, Switch, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';

// renderRoutes 展示路由，但只展示第一层的。容器内的还要再次渲染
import { renderRoutes } from 'react-router-config';

export const render = (req, Routes, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Switch>{renderRoutes(Routes)}</Switch>
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
        <script>
          // 注入state
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </html>
    `;
};
