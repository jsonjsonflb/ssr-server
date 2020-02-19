import React, { memo, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '@/reducers/home/actions';
import styles from './index.css';
import { helper } from '@/utils';

const Home = memo(props => {
  const { cityData } = props.state;
  const [state, setState] = React.useState(11);
  
  const withStyle= useMemo(()=>{
    console.log('home-css')
    return helper.withStyle(props,styles)
  },[])


  useEffect(() => {
    if (!cityData.hotCities.length) {
      props.dispatch(getHomeList());
    }
  }, []);

  return (
    <div>
      <h2 className={styles.test}>{state}</h2>
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

const mapState = state => ({
  state: state.home
});

const exportComponents = connect(mapState, null)(Home)

exportComponents.loadData = store => {
  // 功能：在服务端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList());
};

export default exportComponents;
