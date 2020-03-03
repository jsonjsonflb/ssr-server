import React, { useRef, useMemo, useEffect, useCallback } from 'react';
import { helper } from '@/utils';
import { Round_item } from './Core';
import style from './Canvas.scss';

const MyCanvas = (props: any) => {
  const canvasEl = useRef(null);

  const withStyle = useMemo(() => {
    return helper.withStyle(props, style);
  }, []);

  // 初始化移动星星
  const initCanvas = () => {
    const ctx: HTMLCanvasElement = canvasEl.current;
    const content = ctx.getContext('2d');
    const WIDTH = document.documentElement.clientWidth;
    const HEIGHT = document.documentElement.clientHeight;
    const initRoundPopulation = 80;
    const roundList: any[] = [];
    ctx.width = WIDTH;
    ctx.height = HEIGHT;

    // 动画
    const animate = () => {
      content.clearRect(0, 0, WIDTH, HEIGHT);
      for (let item of roundList) {
        item.move(content, HEIGHT);
      }
      window.requestAnimationFrame(animate);
    };

    // 初始化
    const init = () => {
      for (let index = 0; index < initRoundPopulation; index++) {
        roundList[index] = new Round_item(
          index,
          Math.random() * WIDTH,
          Math.random() * HEIGHT
        );
        roundList[index].draw(content);
      }
      animate();
    };
    init();

    // 初始值
    const para: any = {
      num: 100,
      color: false, //  颜色  如果是false 则是随机渐变颜色
      r: 0.9,
      o: 0.09, //  判断圆消失的条件，数值越大，消失的越快
      a: 1
    };
    let color: any;
    let color2: any;
    const round_arr: any[] = [];

    window.onmousemove = function(event: any) {
      round_arr.push({
        mouseX: event.clientX,
        mouseY: event.clientY,
        r: para.r,
        o: 1
      });
    };

    // 判断参数中是否设置了 color，如果设置了 color，就使用该值、
    // 如果参数中的 color 为 false，那么就使用随机的颜色
    if (para.color) {
      color2 = para.color;
    } else {
      color = Math.random() * 360;
    }

    function MouseAnimate() {
      if (!para.color) {
        color += 0.1;
        color2 = 'hsl(' + color + ',100%,80%)';
      }

      content.clearRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < round_arr.length; i++) {
        content.fillStyle = color2;
        content.beginPath();
        content.arc(
          round_arr[i].mouseX,
          round_arr[i].mouseY,
          round_arr[i].r,
          0,
          Math.PI * 2
        );
        content.closePath();
        content.fill();
        round_arr[i].r += para.r;
        round_arr[i].o -= para.o;

        if (round_arr[i].o <= 0) {
          round_arr.splice(i, 1);
          i--;
        }
      }

      window.requestAnimationFrame(animate);
    }

    MouseAnimate();
  };

  // 初始化鼠标移动
  const mouseMove = useCallback(() => {
    const ctx: HTMLCanvasElement = canvasEl.current;
    const content = ctx.getContext('2d');
    const WIDTH = (ctx.width = document.documentElement.clientWidth);
    const HEIGHT = (ctx.height = document.documentElement.clientHeight);
    // 初始值
    const para: any = {
      num: 100,
      color: false, //  颜色  如果是false 则是随机渐变颜色
      r: 0.9,
      o: 0.09, //  判断圆消失的条件，数值越大，消失的越快
      a: 1
    };
    let color: any;
    let color2: any;
    const round_arr: any[] = [];

    window.onmousemove = function(event: any) {
      round_arr.push({
        mouseX: event.clientX,
        mouseY: event.clientY,
        r: para.r,
        o: 1
      });
    };

    // 判断参数中是否设置了 color，如果设置了 color，就使用该值、
    // 如果参数中的 color 为 false，那么就使用随机的颜色
    if (para.color) {
      color2 = para.color;
    } else {
      color = Math.random() * 360;
    }

    function animate() {
      if (!para.color) {
        color += 0.1;
        color2 = 'hsl(' + color + ',100%,80%)';
      }

      content.clearRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < round_arr.length; i++) {
        content.fillStyle = color2;
        content.beginPath();
        content.arc(
          round_arr[i].mouseX,
          round_arr[i].mouseY,
          round_arr[i].r,
          0,
          Math.PI * 2
        );
        content.closePath();
        content.fill();
        round_arr[i].r += para.r;
        round_arr[i].o -= para.o;

        if (round_arr[i].o <= 0) {
          round_arr.splice(i, 1);
          i--;
        }
      }

      window.requestAnimationFrame(animate);
    }

    animate();
  }, []);

  useEffect(() => {
    initCanvas();
    // mouseMove();
  }, []);

  return (
    <div className={style.canvas_wrap}>
      <canvas ref={canvasEl} className={style.my_canvas}></canvas>
    </div>
  );
};

export default MyCanvas;
