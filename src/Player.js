import karas from 'karas';
import data from './data';
import eventBus from './eventBus';

const movePx = 2;

function checkBox(position, direction, box) {
  let [tx1, ty1] = position;
  let tx2 = tx1 + 32;
  let ty2 = ty1 + 32;
  let [x1, y1, x2, y2] = box;
  x1 *= 16;
  y1 *= 16;
  x2 *= 16;
  y2 *= 16;
  if(direction === 0) {
    if(y1 === ty1) {
      return true;
    }
  }
  else if(direction === 1) {
    if(x2 === tx2) {
      return true;
    }
  }
  else if(direction === 2) {
    if(y2 === ty2) {
      return true;
    }
  }
  else if(direction === 3) {
    if(x1 === tx1) {
      return true;
    }
  }
}

function checkMove(position, direction, list) {
  let [tx1, ty1] = position;
  let tx2 = tx1 + 32;
  let ty2 = ty1 + 32;
  for(let i = 0, len = list.length; i < len; i++) {
    let [x1, y1] = list[i];
    x1 *= 16;
    y1 *= 16;
    let x2 = x1 + 16;
    let y2 = y1 + 16;
    if(direction === 0) {
      if(x1 < tx2 - 1 && x2 > tx1 + 1 && ty1 - y2 === 0) {
        return true;
      }
    }
    else if(direction === 1) {
      if(y1 < ty2 - 1 && y2 > ty1 + 1 && tx2 - x1 === 0) {
        return true;
      }
    }
    else if(direction === 2) {
      if(x1 < tx2 - 1 && x2 > tx1 + 1 && ty2 - y1 === 0) {
        return true;
      }
    }
    else if(direction === 3) {
      if(y1 < ty2 - 1 && y2 > ty1 + 1 && tx1 - x2 === 0) {
        return true;
      }
    }
  }
}

class Player extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data[0].player,
      position: data[0].player.map(item => {
        return item.map(n => n * 16);
      }),
    };
  }

  componentDidMount() {
    // 开始游戏
    eventBus.on(eventBus.GAMEING, () => {
      this.updateStyle({
        visibility: 'visible',
      });
      this.state.list.forEach((item, i) => {
        let player = this.ref['player' + i];
        let shield = this.ref['shield' + i];
        let fadeIn = player.animate([
          {
            opacity: 1,
          },
          {
            opacity: 0.75,
          },
        ], {
          duration: 100,
          iterations: 32,
          direction: 'alternate',
          easing: 'steps(2)',
        });
        fadeIn.on('finish', () => {
          player.removeAnimate(fadeIn);
        });
        shield.animate([
          {
            backgroundPosition: '-442 -238',
          },
          {
            backgroundPosition: '-510 -238',
          },
        ], {
          duration: 100,
          iterations: 32,
          direction: 'alternate',
          easing: 'steps(2)',
        });
      });
    });
  }

  move(index, direction) {
    let player = this.ref['player' + index];
    let tank = this.ref['tank' + index];
    // 播放坦克移动本身帧动画
    let lastD = this['playerD' + index];
    if(lastD !== direction) {
      this['playerD' + index] = direction;
      tank.clearAnimate();
      let frame = [];
      if(direction === 0) {
        frame = [
          {
            backgroundPositionX: 0,
          },
          {
            backgroundPositionX: -34,
          }
        ];
      }
      else if(direction === 1) {
        frame = [
          {
            backgroundPositionX: -68,
          },
          {
            backgroundPositionX: -102,
          }
        ];
      }
      else if(direction === 2) {
        frame = [
          {
            backgroundPositionX: -136,
          },
          {
            backgroundPositionX: -170,
          }
        ];
      }
      else if(direction === 3) {
        frame = [
          {
            backgroundPositionX: -204,
          },
          {
            backgroundPositionX: -238,
          }
        ];
      }
      tank.animate(frame, {
        duration: 100,
        iterations: Infinity,
        easing: 'steps(1)',
        direction: 'alternate',
      });
    }
    else {
      return;
    }
    // 检查是否被挡住
    let position = this.state.position[index];
    if(checkBox(position, direction, eventBus.box)) {
      return;
    }
    if(checkMove(position, direction, eventBus.brick)) {
      return;
    }
    if(checkMove(position, direction, eventBus.iron)) {
      return;
    }
    // 坦克坐标移动
    let cb = this['ma' + index];
    let frameDrop = 0;
    karas.animate.frame.offFrame(cb);
    cb = this['ma' + index] = function() {
      if(frameDrop++ < 1) {
        return;
      }
      frameDrop = 0;
      if(checkBox(position, direction, eventBus.box)) {
        return;
      }
      if(checkMove(position, direction, eventBus.brick)) {
        return;
      }
      if(checkMove(position, direction, eventBus.iron)) {
        return;
      }
      if(direction === 0) {
        position[1] -= movePx;
        player.updateStyle({
          translateY: player.getComputedStyle('translateY').translateY - movePx,
        });
      }
      else if(direction === 1) {
        position[0] += movePx;
        player.updateStyle({
          translateX: player.getComputedStyle('translateX').translateX + movePx,
        });
      }
      else if(direction === 2) {
        position[1] += movePx;
        player.updateStyle({
          translateY: player.getComputedStyle('translateY').translateY + movePx,
        });
      }
      else if(direction === 3) {
        position[0] -= movePx;
        player.updateStyle({
          translateX: player.getComputedStyle('translateX').translateX - movePx,
        });
      }
    };
    karas.animate.frame.onFrame(cb);
  }

  stop(index) {
    let player = this.ref['player' + index];
    let tank = this.ref['tank' + index];
    tank.animationList[0].pause();
    let cb = this['ma' + index];
    karas.animate.frame.offFrame(cb);
    let lastD = this['playerD' + index];
    if(lastD === 0) {
      player.updateStyle({
        backgroundPositionX: 0,
      });
    }
    else if(lastD === 1) {
      player.updateStyle({
        backgroundPositionX: -68,
      });
    }
    else if(lastD === 2) {
      player.updateStyle({
        backgroundPositionX: -136,
      });
    }
    else if(lastD === 3) {
      player.updateStyle({
        backgroundPositionX: -204,
      });
    }
    this['playerD' + index] = null;
  }

  render() {
    return <div style={{
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      visibility: 'hidden',
    }}>
      {
        this.state.list.map((item, i) => {
          let y = -272 - i * 34;
          return <div ref={'player' + i}
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: 32,
                        height: 32,
                        translateX: item[0] * 16,
                        translateY: item[1] * 16,
                      }}>
            <span ref={'tank' + i}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    background: `url(tank.png) no-repeat 0 ${y}`,
                  }}/>
            <span ref={'shield' + i}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    background: `url(tank.png) no-repeat -476 -238`,
                  }}/>
          </div>;
        })
      }
    </div>;
  }
}

export default Player;
