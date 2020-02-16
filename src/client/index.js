import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '@/routes';
import { getClientStore } from '@/store';

const store = getClientStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {Routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById('root'));
