import karas from 'karas';
import data from './data';
import eventBus from './eventBus';
import util from './util';

const MOVE_PX = 2;
const PROTECT_COUNT = 32;

class Player extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      list: [], // 0,1方块位置x,y；2命数，3状态012无保护定，4type,5,6坐标位置x,y
    };
  }

  componentDidMount() {
    // 开始游戏
    eventBus.on(eventBus.GAMEING, () => {
      let list = data.current.player;
      this.setState({
        show: true,
        list,
      }, () => {
        this.state.list.forEach((item, i) => {
          let player = this.ref['player' + i];
          let shield = this.ref['shield' + i];
          player.clearAnimate();
          item[3] = 1;
          let fadeIn = player.animate([
            {
              opacity: 0.85,
            },
            {
              opacity: 0.7,
            },
          ], {
            duration: 100,
            iterations: PROTECT_COUNT,
            direction: 'alternate',
            easing: 'steps(2)',
          });
          fadeIn.on('finish', () => {
            player.removeAnimate(fadeIn);
            item[3] = 0;
          });
          shield.clearAnimate();
          shield.animate([
            {
              backgroundPosition: '-442 -238',
            },
            {
              backgroundPosition: '-510 -238',
            },
          ], {
            duration: 100,
            iterations: PROTECT_COUNT,
            direction: 'alternate',
            easing: 'steps(2)',
          });
        });
      });
    });
    eventBus.on(eventBus.HIT_US, (id, x, y, us) => {
      us.forEach(item => {
        let i;
        if(item === this.state.list[0]) {
          i = 0;
        }
        else if(item === this.state.list[1]) {
          i = 1;
        }
        if(i !== undefined) {
          let item = this.state.list[i];
          let player = this.ref['player' + i];
          if(item[3] === 1) {
            return;
          }
          let life = item[2]--;
          if(life < 0) {
            player.updateStyle({
              visibility: 'hidden',
            });
            return;
          }
          eventBus.emit(eventBus.PLAY_REBONE, i);
          let shield = this.ref['shield' + i];
          item[3] = 1;
          let tx = item[5] = item[0] * 16;
          let ty = item[6] = item[1] * 16;
          player.updateStyle({
            translateX: tx,
            translateY: ty,
          });
          player.clearAnimate();
          let fadeIn = player.animate([
            {
              opacity: 0.85,
            },
            {
              opacity: 0.7,
            },
          ], {
            duration: 100,
            iterations: 32,
            direction: 'alternate',
            easing: 'steps(2)',
          });
          fadeIn.on('finish', () => {
            player.removeAnimate(fadeIn);
            item[3] = 0;
          });
          shield.clearAnimate();
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
        }
      });
    });
    eventBus.on(eventBus.HIT_US_BY_US, (id, x, y, us) => {
      us.forEach(item => {
        let i;
        if(item === this.state.list[0]) {
          i = 0;
        }
        else if(item === this.state.list[1]) {
          i = 1;
        }
        if(i !== undefined) {
          let item = this.state.list[i];
          let player = this.ref['player' + i];
          if(item[3] === 1) {
            return;
          }
          // 2以上为定住，倒计时数字
          if(item[3] > 1) {
            item[3] = 200;
            return;
          }
          item[3] = 200;
          let cb = () => {
            // 销毁结束
            if(player.isDestroyed) {
              karas.animate.frame.offFrame(cb);
              return;
            }
            item[3]--;
            let n = (item[3] - 2) % 16;
            if(n < 8) {
              player.updateStyle({
                visibility: 'visible',
              });
            }
            else {
              player.updateStyle({
                visibility: 'hidden',
              });
            }
            if(item[3] === 2) {
              item[3] = 0;
              karas.animate.frame.offFrame(cb);
            }
          };
          karas.animate.frame.onFrame(cb);
        }
      });
    });
  }

  move(index, direction) {
    let player = this.ref['player' + index];
    let tank = this.ref['tank' + index];
    if(!tank) {
      return;
    }
    // 播放坦克移动本身帧动画
    let currentD = this['playerCurrentD' + index];
    if(currentD !== direction) {
      this['playerCurrentD' + index] = direction;
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
    this['playerLastD' + index] = direction;
    let cb = this['ma' + index];
    karas.animate.frame.offFrame(cb);
    // 检查是否被挡住
    let item = this.state.list[index];
    // 坦克坐标移动，没2帧移动1次2px，便于控制
    let frameDrop = 0;
    cb = this['ma' + index] = function() {
      if(frameDrop++ < 1) {
        return;
      }
      frameDrop = 0;
      if(util.checkBox(item[5], item[6], direction, data.current.box)) {
        return;
      }
      if(util.checkMove(item[5], item[6], direction, data.current.brick)) {
        return;
      }
      if(util.checkMove(item[5], item[6], direction, data.current.iron)) {
        return;
      }
      if(util.checkEnemy(item[5], item[6], direction, -1, data.current.enemy)) {
        return;
      }
      if(util.checkUs(item[5], item[6], direction, index, data.current.player)) {
        return;
      }
      if(util.checkHome(item[5], item[6], direction, data.current.home)) {
        return;
      }
      if(direction === 0) {
        item[6] -= MOVE_PX;
        player.updateStyle({
          translateY: item[6],
        });
      }
      else if(direction === 1) {
        item[5] += MOVE_PX;
        player.updateStyle({
          translateX: item[5],
        });
      }
      else if(direction === 2) {
        item[6] += MOVE_PX;
        player.updateStyle({
          translateY: item[6],
        });
      }
      else if(direction === 3) {
        item[5] -= MOVE_PX;
        player.updateStyle({
          translateX: item[5],
        });
      }
    };
    karas.animate.frame.onFrame(cb);
  }

  stop(index) {
    let player = this.ref['player' + index];
    let tank = this.ref['tank' + index];
    let item = this.state.list[index];
    tank.animationList.length && tank.animationList[0].pause();
    let cb = this['ma' + index];
    karas.animate.frame.offFrame(cb);
    let currentD = this['playerCurrentD' + index];
    // 停止朝向，同时为了便于控制，设置tank停止位置为4的倍数，容易转向
    let x = item[5];
    let y = item[6];
    if(currentD === 0) {
      player.updateStyle({
        backgroundPositionX: 0,
      });
      if(y % 4 !== 0) {
        item[6] -= MOVE_PX;
        player.updateStyle({
          translateY: item[6],
        });
      }
    }
    else if(currentD === 1) {
      player.updateStyle({
        backgroundPositionX: -68,
      });
      if(x % 4 !== 0) {
        item[5] += MOVE_PX;
        player.updateStyle({
          translateX: item[5],
        });
      }
    }
    else if(currentD === 2) {
      player.updateStyle({
        backgroundPositionX: -136,
      });
      if(y % 4 !== 0) {
        item[6] += MOVE_PX;
        player.updateStyle({
          translateY: item[6],
        });
      }
    }
    else if(currentD === 3) {
      player.updateStyle({
        backgroundPositionX: -204,
      });
      if(x % 4 !== 0) {
        item[5] -= MOVE_PX;
        player.updateStyle({
          translateX: item[5],
        });
      }
    }
    this['playerCurrentD' + index] = null;
  }

  getPosition(index) {
    return this.state.list[index].slice(5, 7);
  }

  getDirection(index) {
    return this['playerLastD' + index] || 0;
  }

  render() {
    return <div style={{
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      visibility: this.state.show ? 'visible' : 'hidden',
    }}>
      {
        this.state.list.map((item, i) => {
          let py = -272 - i * 34;
          let tx = item[5] = item[0] * 16;
          let ty = item[6] = item[1] * 16;
          return <div ref={'player' + i}
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: 32,
                        height: 32,
                        translateX: tx,
                        translateY: ty,
                      }}>
            <span ref={'tank' + i}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    background: `url(tank.png) no-repeat 0 ${py}`,
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
