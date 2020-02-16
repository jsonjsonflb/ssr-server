import express from 'express';
import { render } from './utils';
import proxy from 'express-http-proxy'; // 转发客户端的请求
import { matchRoutes } from 'react-router-config';
import { getStore } from '@/store'; // 每次获取store都初始化一次，确保每个用户获取的store是独立的
import Routes from '@/routes';

const app = express();
// 请求静态资源在public里面找
app.use(express.static('public'));

// 转发客户转请求
app.use(
  '/rest',
  proxy('localhost:3000', {
    proxyReqPathResolver: function(req) {
      console.log(req.url);
      // 返回的是数据服务器上，接口的名称,  /rest 是接口代理的名称
      // 中间件自动拼接到代理的位置
      return '/rest' + req.url;
    }
  })
);

app.get('*', function(req, res) {
  // 服务端获取路由地址（只能通过请求参数获取）
  const pathName = req.path;

  const store = getStore();
  // 再这个位置 loadData ,并修改store的值
  // 根据路由的路径，来往store里面加数据

  // matchPath匹配单层路由，用处不大
  // // inside a request
  // const matchRoutes = [];
  // // use `some` to imitate `<Switch>` behavior of selecting only
  // // the first to match
  // Routes.some(route => {
  //   // 如果路由匹配成功 match
  //   const match = matchPath(req.path, route);
  //   if (match) {
  //     matchRoutes.push(route);
  //   }
  // });

  // 引入react-router-config匹配多层路由,然后进行请求
  const matchedRoutes = matchRoutes(Routes, pathName);
  // 让matchRoutes里面所有的组件，对应的 loadData 方法执行一次
  // console.log(matchedRoutes);
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    res.send(render(req, Routes, store));
  });
});

var server = app.listen(3333, () => {
  console.log('start at 3333');
});
