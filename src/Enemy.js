import karas from 'karas';
import data from './data';
import eventBus from './eventBus';
import util from './util';

const TURN_COUNT = {
  0: 32,
  1: 8,
  2: 48,
};
const MOVE_PX = {
  0: 1,
  1: 2,
  2: 1,
};
const ENEMY_FIRE_COUNT = 1000;

function getBgP(type, direction) {
  let p = '-136 -68';
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
  }
  return p;
}

class Enemy extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      list: [], // 0,1方块位置x,y；2类型；3状态012新老死；4方向；5,6坐标位置x,y；7停止计时；8射击计时
    };
  }

  componentDidMount() {
    // 开始游戏
    eventBus.on(eventBus.GAMEING, () => {
      this.setState({
        show: true,
      });
      // 坦克坐标移动
      let cb = this.cb = () => {
        this.state.list.forEach((item, i) => {
          // console.log(item);
          let [x, y, type, state, direction, px, py] = item;
          // 防止死tank
          if(state < 2) {
            let tank = this.ref['tank' + i];
            let movePx = MOVE_PX[type] || 1;
            // 积累一定随机时间后开火
            let fire = --item[8];
            if(fire === 0) {
              item[8] = ENEMY_FIRE_COUNT + Math.floor(Math.random() * ENEMY_FIRE_COUNT);
              eventBus.emit(eventBus.ENEMY_FIRE, i, [px, py], direction);
            }
            // 检测移动，积累count到一定后没有一定随机更换方向
            if(util.checkBox(px, py, direction, data.current.box)
              || util.checkMove(px, py, direction, data.current.brick)
              || util.checkMove(px, py, direction, data.current.iron)
              || util.checkEnemy(px, py, direction, i, data.current.enemy)
              || util.checkUs(px, py, direction, -1, data.current.player)
              || util.checkHome(px, py, direction, data.current.home)) {
              let count = item[7]++;
              if(count >= TURN_COUNT[type] || 1) {
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
                let p = getBgP(type, direction);
                tank.updateStyle({
                  backgroundPosition: p,
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
      });
    });
    eventBus.on(eventBus.HIT_ENEMY, (id, x, y, data) => {
      for(let list = this.state.list, i = 0, len = list.length; i < len; i++) {
        let item = list[i];
        for(let j = 0, len2 = data.length; j < len2; j++) {
          if(item === data[j]) {
            item[3] = 2;
            this.setState({
              list,
            });
          }
        }
      }
    });
    eventBus.on(eventBus.BEFORE_MENU, () => {
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
          let p = getBgP(type, direction);
          // 新出生的tank
          if(state === 0) {
            item[3] = 1; // 变老tank
            item[4] = direction;
            item[5] = px = tx * 16;
            item[6] = py = ty * 16;
            item[7] = 0; // 计时初始化
            item[8] = Math.floor(Math.random() * ENEMY_FIRE_COUNT);
          }
          // 老tank
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
