import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '@/components/Header';
import { getHomeList } from '@/reducers/home/actions';

const Home = memo(props => {
  const { cityData } = props.state;
  const [state, setState] = React.useState(11);

  useEffect(() => {
    if (!cityData.hotCities.length) {
      props.dispatch(getHomeList());
    }
  }, []);

  return (
    <div>
      <Header />
      <h2>{state}</h2>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Click
      </button>
      <div>
        {cityData.hotCities.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
    </div>
  );
});

Home.loadData = store => {
  // 功能：在服务端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList());
};

const mapState = state => ({
  state: state.home
});

export default connect(mapState, null)(Home);
