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
  proxy('localhost:4444', {
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

  // 传入req给store,使服务端在发出请求的时候可以配置cookies
  const store = getStore(req);
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
      const successPromise = new Promise((resolve, reject)=>{
        // 保证每个 promise请求 都走 successPromise 的resolve，下面的Promise.all才会都走then;
        // 某个数据请求出错，这个数据渲染就失败，也不会阻塞其他数据请求。
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(successPromise);
    }
  });

  Promise.all(promises).then(() => {
    const context = {css: []}
    const html = render(req, Routes, store,context)
    // 在StaticRouter中 如果有 Redirect 会自动给context增加重定向的内容
    if(context.action === 'REPLACE') {
      res.redirect(301, context.url)
    }else if(context.NOTFOUND) {
      res.status(404)
      res.send(html);
    }else{
      res.send(html);
    }
    
  })
});

var server = app.listen(3333, () => {
  console.log('start at 3333');
});
