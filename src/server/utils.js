import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route, Switch, matchPath } from "react-router-dom";
import { Provider } from "react-redux";

// renderRoutes 展示路由，但只展示第一层的。容器内的还要再次渲染
import { renderRoutes } from "react-router-config";

export const render = (req, Routes, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Switch>{renderRoutes(Routes)}</Switch>
      </StaticRouter>
    </Provider>
  );

  // 处理服务端样式
  const cssStr = context.css && context.css.length ? context.css.join('\n') : "";
  console.log(cssStr);

  return `
      <html>
        <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
          <title>ssr</title>
          <link rel="icon" href="./statics/ico/favicon.ico">
          <link rel="stylesheet" href="./statics/lib/normalize.css">
          <link rel="stylesheet" href="./statics/lib/init.css">
          <style>
            ${cssStr}
          </style>
          <script src="/statics/lib/rem.js"></script>
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
