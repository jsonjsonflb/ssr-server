import axios from 'axios';

const instance = req => {
  return axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      cookie: req.get('cookie') || ''
      // 防止刷新请求的时候，客户端的已登录，而服务端没有cookie，引起的情况情况
    }
  });
};

export default instance;
