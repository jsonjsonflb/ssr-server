import React, { useMemo } from 'react';
import { getHomeList } from '@/reducers/home/actions';
import { connect } from 'react-redux';
import { helper } from '@/utils';
import Banner from './Banner';

import { Button } from '@material-ui/core';
import style from './style.scss';

const HomePage = (props: any) => {
  const { cityData } = props.state;
  const withStyle = useMemo(() => {
    return helper.withStyle(props, style);
  }, []);

  return (
    <div>
      <Banner />
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
