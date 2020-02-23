import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, Switch, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import fs from 'fs';
import path from 'path';
// renderRoutes 展示路由，但只展示第一层的。容器内的还要再次渲染
import { renderRoutes } from 'react-router-config';

export const render = (req, Routes, store, context) => {
  return new Promise((resolve, reject) => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <Switch>{renderRoutes(Routes)}</Switch>
        </StaticRouter>
      </Provider>
    );

    // 处理服务端样式
    const cssStr =
      context.css && context.css.length ? context.css.join('\n') : '';

    // 读取模板文件
    fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('An error occurred');
        resolve(false);
      }
      data = data
        .replace('<style></style>', `<style>${cssStr}</style>`)
        .replace('<div id="root"></div>', `<div id="root">${content}</div>`)
        .replace(
          '<script type="text/javascript" src="bundle.js"></script>',
          `<script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>
          <script type="text/javascript" src="/index.js"></script>`
        );
      resolve(data);
    });
  });
  // return `
  //     <html>
  //       <head>
  //       <meta charset="UTF-8" />
  //       <meta
  //         name="viewport"
  //         content="width=device-width, initial-scale=1, user-scalable=no"
  //       />
  //         <title>ssr</title>
  //         <link rel="icon" href="./statics/ico/favicon.ico">
  //         <link rel="stylesheet" href="./statics/lib/normalize.css">
  //         <link rel="stylesheet" href="./statics/lib/init.css">
  //         <style>
  //           ${cssStr}
  //         </style>
  //       </head>
  //       <body>
  //         <div id="root">${content}</div>
  //       </body>
  // <script>
  //   // 注入state
  //   window.context = {
  //     state: ${JSON.stringify(store.getState())}
  //   }
  // </script>
  //       <script src="/index.js"></script>
  //     </html>
  //   `;
};
