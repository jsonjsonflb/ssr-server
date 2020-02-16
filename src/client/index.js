import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// renderRoutes 展示路由，但只展示第一层的。容器内的还要再次渲染
import { renderRoutes } from 'react-router-config';

import Routes from '@/routes';
import { getClientStore } from '@/store';

const store = getClientStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>{renderRoutes(Routes)}</Switch>
      </BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById('root'));
