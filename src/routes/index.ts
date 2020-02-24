import HomePage from '@/routes/HomePage/HomePage';
// import Translation from '@/routes/Translation';
import App from '@/routes/App';
import Main from '@/routes/Mian/Main';

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        component: HomePage,
        exact: true,
        loadData: HomePage.loadData
      },
      {
        path: '/main',
        component: Main,
        exact: true
      }

      // {
      //   path: '/translation',
      //   component: Translation,
      //   exact: true,
      //   loadData: Translation.loadData
      // },
      // {
      //   component: NotFound
      // }
    ]
  }
];
