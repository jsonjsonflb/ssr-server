import React, { useMemo } from 'react';
import { helper } from '@/utils';
import style from './style.scss';

const Main = (props: any) => {
  const withStyle = useMemo(() => {
    return helper.withStyle(props, style);
  }, []);

  return <div className={style.title}>asd</div>;
};

export default Main;
