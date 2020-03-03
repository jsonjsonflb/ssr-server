import HomePage from '@/routes/HomePage/HomePage';
// import Translation from '@/routes/Translation';
import App from '@/routes/App';
import Canvas from '@/routes/Canvas/Canvas';

export default [
  {
    path: '/canvas',
    component: Canvas,
    exact: true
  },
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
