import Home from '@/Container/Home';
import Login from '@/Container/Login';
import App from '@/Container/App';

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData
      },
      {
        path: '/login',
        component: Login,
        exact: true
      }
    ]
  }
];
