/**
 * 星星原型
 * @index 索引
 * @x x坐标
 * @y y坐标
 *
 * @class Round_item
 */

interface RoundItemType {
  index: number;
  x: number;
  y: number;
  r: number;
  color: string;
  move: (contest: any, HEIGHT: number) => void;
}

class Round_item implements RoundItemType {
  index: number;
  x: number;
  y: number;
  r: number;
  color: string;

  constructor(index: number, x: number, y: number) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.r = Math.random() * 2 + 1;
    let alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
    this.color = 'rgba(255,255,255,' + alpha + ')';
  }

  // 绘制
  public draw = (content: any) => {
    content.beginPath();
    content.shadowBlur = this.r * 2;
    content.shadowColor = this.color;
    content.fillStyle = this.color;
    content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    content.closePath();
    content.fill();
  };

  public move = (content: any, height: number) => {
    this.y -= 0.15;
    if (this.y <= -10) {
      this.y = height + 10;
    }
    this.draw(content);
  };
}

export { Round_item };
