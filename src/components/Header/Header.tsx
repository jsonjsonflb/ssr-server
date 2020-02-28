import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './Header.scss';
import { helper } from '@/utils';

const navList = [{ title: 'Home' }, { title: 'About Me' }, { title: 'Blog' }];

const Header = (props: any) => {
  const [isTop, setIsTop] = useState(false);
  const withStyle = useMemo(() => {
    return helper.withStyle(props, style);
  }, []);

  // 监听滚动
  const listenScroll = useCallback(() => {
    const scrollheight =
      document.body.scrollTop == 0
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
    if (scrollheight > 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', listenScroll);

    return () => {
      window.removeEventListener('scroll', listenScroll);
    };
  }, []);

  return (
    <div
      className={helper.concatClass(
        style.header_wrap,
        isTop ? style.scroll_header : ''
      )}
    >
      <Container>
        <Row className={style.justify_content}>
          <Col xs={'2'} sm={'2'} md={'2'} lg={'2'}>
            <div className={style.logo}>
              <img src={'./statics/images/logo/logo.png'} alt={''} />
            </div>
          </Col>
          <Col xs={'10'} sm={'10'} md={'10'} lg={'10'}>
            <ul className={style.nav_list}>
              {navList.map((item, index) => {
                return (
                  <li key={index} className={style.nav_item}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
