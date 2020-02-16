import React from 'react';

import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, Switch, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';

export const render = (req, Routes, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
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
