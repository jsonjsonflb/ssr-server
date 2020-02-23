// import Home from '@/routes/Home';
// import Translation from '@/routes/Translation';
import App from '@/routes/App';
// import NotFound from '@/routes/NotFound';

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      // {
      //   path: '/',
      //   component: Home,
      //   exact: true,
      //   loadData: Home.loadData
      // },
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
