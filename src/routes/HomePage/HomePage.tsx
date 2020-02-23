import React, { useMemo } from 'react';
import { getHomeList } from '@/reducers/home/actions';
import { connect } from 'react-redux';
import { helper } from '@/utils';
import { Button } from '@material-ui/core';
import style from './style.css';

// 初始化swiper

const initSwiper = () => {
  // new Swiper()
};

const HomePage = (props: any) => {
  const { cityData } = props.state;
  if (process.env.isSSR) {
    const withStyle = useMemo(() => {
      console.log('home-css');
      return helper.withStyle(props, style);
    }, []);
  }

  return (
    <div>
      <div className={style.banner_wrap}>
        <h1>banner</h1>
      </div>
    </div>
  );
};

const mapState = (state: any) => ({
  state: state.home
});

const exportComponents: any = connect(mapState, null)(HomePage);

exportComponents.loadData = (store: any) => {
  // 功能：在服务端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList());
};

export default exportComponents;
