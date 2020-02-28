import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Typed from 'typed.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { helper } from '@/utils';
import style from './style.scss';

// 参数
const settings: any = {
  pauseOnHover: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: null,
  prevArrow: null
};

// banner数据
const datas = [
  {
    src: './statics/images/home/slider1.jpg'
  },
  {
    src: './statics/images/home/slider2.jpg'
  },
  {
    src: './statics/images/home/slider3.jpg'
  },
  {
    src: './statics/images/home/slider4.jpg'
  }
];

const Banner = () => {
  useEffect(() => {
    var typed = new Typed('#typed', {
      stringsElement: '#typed_strings',
      typeSpeed: 200
    });
  }, []);

  return (
    <div className={helper.concatClass(style.banner_wrap, 'home_banner_wrap')}>
      <Slider {...settings}>
        {datas.map((item, index) => (
          <div key={index} className={style.slick_item}>
            <div
              style={{ backgroundImage: `url(${item.src})` }}
              className={style.slick_item_inner}
            ></div>
          </div>
        ))}
      </Slider>
      <div className={style.content_wrap}>
        <div id={'typed_strings'}>
          <p>谁能把心里话写日记里？</p>
          <p>写出来的哪能叫心里话？</p>
        </div>
        <span className={style.content_inner} id={'typed'}></span>
      </div>
    </div>
  );
};

export default Banner;
