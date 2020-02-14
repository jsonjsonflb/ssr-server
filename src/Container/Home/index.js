import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '@/components/Header';
import { getHomeList } from '@/reducers/home/actions';

const Home = memo(props => {
  const { cityData } = props.state;
  const [state, setState] = React.useState(11);

  useEffect(() => {
    props.dispatch(getHomeList());
  }, []);

  return (
    <div>
      <Header />
      <h2>name</h2>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Click
      </button>
      {cityData.hotCities &&
        cityData.hotCities.length &&
        cityData.hotCities.map((item, index) => (
          <h1 key={index}>{item.name}</h1>
        ))}
    </div>
  );
});

Home.loadData = () => {
  // 功能：在服务端渲染之前，把这个路由需要的数据提前加载好
};

const mapState = state => ({
  state: state.home
});

export default connect(mapState, null)(Home);
