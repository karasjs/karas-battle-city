import karas from 'karas';
import data from './data';
import eventBus from './eventBus';
import util from './util';

const TURN_COUNT = {
  0: 32,
  1: 16,
  2: 36,
  3: 48,
  4: 48,
  5: 48,
};
const MOVE_PX = {
  0: 2,
  1: 4,
  2: 2,
  3: 1,
  4: 1,
  5: 1,
};
const ENEMY_FIRE_COUNT = 50;

function getBgP(type, direction, red, life) {
  let p = '-136 -68';
  if(red) {
    switch(type) {
      case 0:
        if(direction === 0) {
          p = '0 -102';
        }
        else if(direction === 1) {
          p = '-68 -102';
        }
        else if(direction === 2) {
          p = '-136 -102';
        }
        else if(direction === 3) {
          p = '-204 -102';
        }
        break;
      case 1:
        if(direction === 0) {
          p = '-272 -102';
        }
        else if(direction === 1) {
          p = '-340 -102';
        }
        else if(direction === 2) {
          p = '-408 -102';
        }
        else if(direction === 3) {
          p = '-476 -102';
        }
        break;
      case 2:
        if(direction === 0) {
          p = '-544 -102';
        }
        else if(direction === 1) {
          p = '-612 -102';
        }
        else if(direction === 2) {
          p = '-680 -102';
        }
        else if(direction === 3) {
          p = '-748 -102';
        }
        break;
      case 3:
      case 4:
      case 5:
        if(direction === 0) {
          p = '-816 -102';
        }
        else if(direction === 1) {
          p = '-884 -102';
        }
        else if(direction === 2) {
          p = '-952 -102';
        }
        else if(direction === 3) {
          p = '-1020 -102';
        }
        break;
    }
  }
  else {
    switch(type) {
      case 0:
        if(direction === 0) {
          p = '0 -68';
        }
        else if(direction === 1) {
          p = '-68 -68';
        }
        else if(direction === 2) {
          p = '-136 -68';
        }
        else if(direction === 3) {
          p = '-204 -68';
        }
        break;
      case 1:
        if(direction === 0) {
          p = '-272 -68';
        }
        else if(direction === 1) {
          p = '-340 -68';
        }
        else if(direction === 2) {
          p = '-408 -68';
        }
        else if(direction === 3) {
          p = '-476 -68';
        }
        break;
      case 2:
        if(direction === 0) {
          p = '-544 -68';
        }
        else if(direction === 1) {
          p = '-612 -68';
        }
        else if(direction === 2) {
          p = '-680 -68';
        }
        else if(direction === 3) {
          p = '-748 -68';
        }
        break;
      case 3:
        if(direction === 0) {
          p = '-816 -68';
        }
        else if(direction === 1) {
          p = '-884 -68';
        }
        else if(direction === 2) {
          p = '-952 -68';
        }
        else if(direction === 3) {
          p = '-1020 -68';
        }
        break;
      case 4:
        if(life === 0) {
          return getBgP(3, direction, 0, 0);
        }
        if(direction === 0) {
          p = '-816 0';
        }
        else if(direction === 1) {
          p = '-884 0';
        }
        else if(direction === 2) {
          p = '-952 0';
        }
        else if(direction === 3) {
          p = '-1020 0';
        }
        break;
      case 5:
        if(life === 0) {
          return getBgP(3, direction, 0, 0);
        }
        if(life === 1) {
          return getBgP(4, direction, 0, 1);
        }
        if(direction === 0) {
          p = '-816 -34';
        }
        else if(direction === 1) {
          p = '-884 -34';
        }
        else if(direction === 2) {
          p = '-952 -34';
        }
        else if(direction === 3) {
          p = '-1020 -34';
        }
        break;
    }
  }
  return p;
}

function getFrame(type, direction, life) {
  let p = getBgP(type, direction, 0, life);
  let p2 = p.split(' ').map(i => parseInt(i));
  p2[0] -= 34;
  return [
    {
      backgroundPosition: p,
    },
    {
      backgroundPosition: p2.join(' '),
    },
  ];
}

class Enemy extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      list: [], // 0,1方块位置x,y；2类型；3状态012新老死；4方向；5,6坐标位置x,y；7停止计时；8射击计时；9红坦克；10血
    };
  }

  componentDidMount() {
    // 开始游戏
    eventBus.on(eventBus.WILL_GAME, () => {
      this.setState({
        list: [],
      });
    });
    eventBus.on(eventBus.GAMEING, () => {
      this.setState({
        show: true,
      });
      // 坦克坐标移动
      let frameJump = 0;
      let cb = this.cb = () => {
        if(frameJump++ < 1) {
          return;
        }
        frameJump = 0;
        this.state.list.forEach((item, i) => {
          // 暂停道具
          if(data.current.enemyPause) {
            return;
          }
          let [x, y, type, state, direction, px, py] = item;
          let red = item[9];
          let life = item[10];
          // 防止死tank
          if(state < 2) {
            let tank = this.ref['tank' + i];
            let movePx = MOVE_PX[type] || 1;
            // 积累一定随机时间后开火
            let fire = --item[8];
            if(fire <= 0) {
              item[8] = 20 + Math.floor(Math.random() * ENEMY_FIRE_COUNT);
              eventBus.emit(eventBus.ENEMY_FIRE, i, [px, py], direction);
            }
            // 检测移动，积累count到一定后没有一定随机更换方向
            if(util.checkBox(px, py, direction, data.current.box)
              || util.checkMove(px, py, direction, data.current.brick)
              || util.checkMove(px, py, direction, data.current.iron)
              // || util.checkEnemy(px, py, direction, i, data.current.enemy)
              || util.checkUs(px, py, direction, -1, data.current.player)
              || util.checkHome(px, py, direction, data.current.home)) {
              // tank.clearAnimate();
              let count = item[7]++;
              if(count >= (TURN_COUNT[type] || 1)) {
                item[7] = 0;
                while(true) {
                  let list = [0, 1, 2, 3];
                  let i = Math.floor(Math.random() * list.length);
                  let nd = item[4] = list[i];
                  if(nd !== direction) {
                    direction = item[4] = nd;
                    break;
                  }
                }
                let p = getBgP(type, direction, red, life);
                tank.updateStyle({
                  backgroundPosition: p,
                });
                tank.clearAnimate();
                if(red) {
                  let p2 = getBgP(type, direction, 1, life);
                  tank.children[0].updateStyle({
                    backgroundPosition: p2,
                  });
                }
                let frame = getFrame(type, direction, life);
                tank.animate(frame, {
                  duration: 100,
                  iterations: Infinity,
                  easing: 'steps(1)',
                  direction: 'alternate',
                });
              }
              return;
            }
            if(direction === 0) {
              item[6] -= movePx;
              tank.updateStyle({
                translateY: item[6],
              });
            }
            else if(direction === 1) {
              item[5] += movePx;
              tank.updateStyle({
                translateX: item[5],
              });
            }
            else if(direction === 2) {
              item[6] += movePx;
              tank.updateStyle({
                translateY: item[6],
              });
            }
            else if(direction === 3) {
              item[5] -= movePx;
              tank.updateStyle({
                translateX: item[5],
              });
            }
          }
        });
      };
      karas.animate.frame.onFrame(cb);
    });
    eventBus.on(eventBus.ADD_ENEMY, (id) => {
      let list = this.state.list;
      let item = data.current.enemy[id];
      list.push(item);
      this.setState({
        list,
      }, () => {
        eventBus.emit(eventBus.ADDED_ENEMY);
        let tank = this.ref['tank' + id];
        // 红闪
        if(item[9]) {
          tank.children[0].animate([
            {},
            {
              visibility: 'visible',
            },
          ], {
            duration: 80,
            iterations: Infinity,
            direction: 'alternate',
          });
        }
        // 移动
        let frame = getFrame(item[2], item[4], item[10]);
        tank.animate(frame, {
          duration: 100,
          iterations: Infinity,
          easing: 'steps(1)',
          direction: 'alternate',
        });
      });
    });
    eventBus.on(eventBus.HIT_ENEMY, (id, x, y, d) => {
      for(let list = this.state.list, i = 0, len = list.length; i < len; i++) {
        let item = list[i];
        for(let j = 0, len2 = d.length; j < len2; j++) {
          if(item === d[j]) {
            let tank = this.ref['tank' + i];
            // 红先消失
            if(item[9]) {
              item[9] = 0;
              tank.children[0].clearAnimate();
              tank.children[0].updateStyle({
                display: 'none',
              });
            }
            // 厚tank减皮
            else if(item[10]--) {
              tank.clearAnimate();
              let frame = getFrame(item[2], item[4], item[10]);
              tank.animate(frame, {
                duration: 100,
                iterations: Infinity,
                easing: 'steps(1)',
                direction: 'alternate',
              });
            }
            // 其它挂
            else {
              item[3] = 2;
              this.setState({
                list,
              });
              eventBus.emit(eventBus.BOOM, item[5] + 16, item[6] + 16);
              let n = 0;
              data.current.enemy.forEach(item => {
                if(item[3] !== 2) {
                  n++;
                }
              });
              if(!n) {
                setTimeout(() => {
                  data.num++;
                  data.num %= data.total;
                  eventBus.emit(eventBus.GAME_NEXT);
                }, 2000);
              }
            }
          }
        }
      }
    });
    eventBus.on(eventBus.GET, type => {
      if(type === 'boom') {
        let list = this.state.list;
        list.forEach((item, i) => {
          let state = item[3];
          // 防止死tank
          if(state < 2) {
            item[9] = 0;
            item[10] = 0;
            item[3] = 2;
            let tank = this.ref['tank' + i];
            tank.clearAnimate();
            this.setState({
              list,
            });
            eventBus.emit(eventBus.BOOM, item[5] + 16, item[6] + 16);
          }
        });
      }
    })
    eventBus.on([eventBus.BEFORE_MENU, eventBus.WILL_GAME], () => {
      karas.animate.frame.offFrame(this.cb);
    });
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
          let [tx, ty, type, state, direction, px, py] = item;
          // 死tank
          if(state === 2) {
            return null;
          }
          // 新出生的tank随机选个可用方向右下左
          if(direction === undefined) {
            let list = [1, 2, 3];
            let i = Math.floor(Math.random() * list.length);
            direction = list[i];
          }
          // 新出生的tank
          if(!state) {
            item[3] = 1; // 变老tank
            item[4] = direction;
            item[5] = px = tx * 16;
            item[6] = py = ty * 16;
            item[7] = 0; // 计时初始化
            item[8] = Math.floor(Math.random() * ENEMY_FIRE_COUNT);
            item[9] = i && i % 5 === 0 ? 1 : 0; // 每5出红
            item[10] = item[2] > 3 ? item[2] - 3 : 0; // 3厚tank，4,5加厚tank
          }
          let life = item[10];
          let red = item[9];
          let p = getBgP(type, direction, red, life);
          if(red) {
            let p2 = getBgP(type, direction, 1, life);
            return <div ref={'tank' + i}
                        key={i}
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: 32,
                          height: 32,
                          translateX: px,
                          translateY: py,
                          background: `url(tank.png) no-repeat ${p}`,
                        }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              background: `url(tank.png) no-repeat ${p2}`,
              visibility: 'hidden',
            }}/>
            </div>;
          }
          return <div ref={'tank' + i}
                      key={i}
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: 32,
                        height: 32,
                        translateX: px,
                        translateY: py,
                        background: `url(tank.png) no-repeat ${p}`,
                      }}/>;
        })
      }
    </div>;
  }
}

export default Enemy;
