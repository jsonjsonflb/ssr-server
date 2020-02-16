import Home from '@/Container/Home';
import Translation from '@/Container/Translation';
import App from '@/Container/App';

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData
      },
      {
        path: '/translation',
        component: Translation,
        exact: true,
        loadData: Translation.loadData
      }
    ]
  }
];
