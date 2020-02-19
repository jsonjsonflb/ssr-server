import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTranslationList } from '@/reducers/Translation/actions';
import { Redirect } from 'react-router-dom';

const Translation = memo(props => {
  const [state, setState] = React.useState(1);
  const { list } = props.state;
  const { isLogin } = props.all.header;

  useEffect(() => {
    props.dispatch(getTranslationList());
  }, []);

  return (
    isLogin ? 
    (<div>
      <h1>{state}</h1>
      {list.map((item, index) => (
        <h2 key={index}>{item.name}</h2>
      ))}
    </div>):
    (<Redirect to={'/'} /> )
  );
});

const mapState = state => ({
  state: state.translation,
  all: state
});

const exportComponent = connect(mapState, null)(Translation)

exportComponent.loadData = store => {
  return store.dispatch(getTranslationList());
};

export default exportComponent;