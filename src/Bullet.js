import karas from 'karas';
import eventBus from './eventBus';
import data from './data';

function checkBox(position, direction, dx, dy, box) {
  let [x, y] = position;
  x += dx;
  y += dy;
  let [x1, y1, x2, y2] = box;
  x1 *= 16;
  y1 *= 16;
  x2 *= 16;
  y2 *= 16;
  if(direction === 0) {
    if(y - 4 <= y1) {
      return true;
    }
  }
  else if(direction === 1) {
    if(x + 32 + 4 >= x2) {
      return true;
    }
  }
  else if(direction === 2) {
    if(y + 32 + 4 >= y2) {
      return true;
    }
  }
  else if(direction === 3) {
    if(x - 4 <= x1) {
      return true;
    }
  }
}

function checkHit(position, direction, dx, dy, list) {
  let [x, y] = position;
  x += dx;
  y += dy;
  let res = [];
  for(let i = 0, len = list.length; i < len; i++) {
    let [x0, y0, disappear] = list[i];
    if(disappear) {
      continue;
    }
    let x1 = x0 * 16;
    let y1 = y0 * 16;
    let x2 = x1 + 16;
    let y2 = y1 + 16;
    if(direction === 0) {
      if(y - 4 <= y2 && y + 4 >= y1 && x + 20 >= x1 && x + 12 <= x2) {
        res.push([x0, y0]);
      }
    }
    else if(direction === 1) {
      if(x + 36 >=x1 && x + 28 <= x2 && y + 20 >= y1 && y + 12 <= y2) {
        res.push([x0, y0]);
      }
    }
    else if(direction === 2) {
      if(y + 36 >= y1 && y + 28 <= y2 && x + 20 >= x1 && x + 12 <= x2) {
        res.push([x0, y0]);
      }
    }
    else if(direction === 3) {
      if(x - 4 <= x2 && x + 4 >= x1 && y + 20 >= y1 && y + 12 <= y2) {
        res.push([x0, y0]);
      }
    }
  }
  if(res.length) {
    return res;
  }
}

function checkHitEnemy(position, direction, dx, dy, list) {
  let [x, y] = position;
  x += dx;
  y += dy;
  let res = [];
  for(let i = 0, len = list.length; i < len; i++) {
    let item = list[i];
    // 只检查老tank，防止死tank和新tank
    if(item[3] !== 1) {
      continue;
    }
    let x1 = item[5];
    let y1 = item[6];
    let x2 = x1 + 32;
    let y2 = y1 + 32;
    if(direction === 0) {
      if(y - 4 <= y2 && y + 4 >= y1 && x + 20 >= x1 && x + 12 <= x2) {
        res.push(item);
      }
    }
    else if(direction === 1) {
      if(x + 36 >= x1 && x + 28 <= x2 && y + 20 >= y1 && y + 12 <= y2) {
        res.push(item);
      }
    }
    else if(direction === 2) {
      if(y + 36 >= y1 && y + 28 <= y2 && x + 20 >= x1 && x + 12 <= x2) {
        res.push(item);
      }
    }
    else if(direction === 3) {
      if(x - 4 <= x2 && x + 4 >= x1 && y + 20 >= y1 && y + 12 <= y2) {
        res.push(item);
      }
    }
  }
  if(res.length) {
    return res;
  }
}

function checkHitUs(position, direction, dx, dy, index, list) {
  let [x, y] = position;
  x += dx;
  y += dy;
  let res = [];
  for(let i = 0, len = list.length; i < len; i++) {
    // 自己
    if(index === i) {
      continue;
    }
    let item = list[i];
    // 防止自己没命了
    if(item[2] === 0) {
      continue;
    }
    let x1 = item[5];
    let y1 = item[6];
    let x2 = x1 + 32;
    let y2 = y1 + 32;
    if(direction === 0) {
      if(y - 4 <= y2 && y + 4 >= y1 && x + 20 >= x1 && x + 12 <= x2) {
        res.push(item);
      }
    }
    else if(direction === 1) {
      if(x + 36 >= x1 && x + 28 <= x2 && y + 20 >= y1 && y + 12 <= y2) {
        res.push(item);
      }
    }
    else if(direction === 2) {
      if(y + 36 >= y1 && y + 28 <= y2 && x + 20 >= x1 && x + 12 <= x2) {
        res.push(item);
      }
    }
    else if(direction === 3) {
      if(x - 4 <= x2 && x + 4 >= x1 && y + 20 >= y1 && y + 12 <= y2) {
        res.push(item);
      }
    }
  }
  if(res.length) {
    return res;
  }
}

function emitHit(node, id, direction, dx, dy, type, data) {
  let { left, top } = node.getComputedStyle();
  let x = left + dx;
  let y = top + dy;
  if(direction === 0) {
    x += 4;
  }
  else if(direction === 1) {
    x += 8;
    y += 4;
  }
  else if(direction === 2) {
    x += 4;
    y += 8;
  }
  else if(direction === 3) {
    y += 4;
  }
  eventBus.emit(type, id, x, y, data);
}

function removeBullet(target, id) {
  for(let i = 0, len = target.length; i < len; i++) {
    if(target[i].id === id) {
      target.splice(i, 1);
      return;
    }
  }
}

let uuid = 0;
let limit = {};
const MOVE_PX = 4;

class Bullet extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: {},
    };
  }

  componentDidMount() {
    eventBus.on(eventBus.ENEMY_FIRE, (id, position, direction) => {
      let hash = this.state.hash;
      id += ',' + uuid++;
      let d = {
        id,
        position,
        direction,
        x: 0,
        y: 0,
        enemy: true,
      };
      hash[id] = d;
      this.setState({
        hash,
      }, () => {
        // 子弹每帧移动
        let frame = () => {
          let node = this.ref[id];
          if(direction === 0) {
            d.y -= MOVE_PX;
            node.updateStyle({
              translateY: d.y,
            });
          }
          else if(direction === 1) {
            d.x += MOVE_PX;
            node.updateStyle({
              translateX: d.x,
            });
          }
          else if(direction === 2) {
            d.y += MOVE_PX;
            node.updateStyle({
              translateY: d.y,
            });
          }
          else if(direction === 3) {
            d.x -= MOVE_PX;
            node.updateStyle({
              translateX: d.x,
            });
          }
          // 校验碰撞
          let box = checkBox(position, direction, d.x, d.y, data.current.box);
          if(box) {
            emitHit(node, id, direction, d.x, d.y, eventBus.HIT_BOX);
          }
          let brick = checkHit(position, direction, d.x, d.y, data.current.brick);
          if(brick) {
            emitHit(node, id, direction, d.x, d.y, eventBus.HIT_BRICK, brick);
          }
          let iron = checkHit(position, direction, d.x, d.y, data.current.iron);
          if(iron) {
            emitHit(node, id, direction, d.x, d.y, eventBus.HIT_IRON, brick);
          }
          let us = checkHitUs(position, direction, d.x, d.y, -1, data.current.player);
          if(us) {
            emitHit(node, id, direction, d.x, d.y, eventBus.HIT_US, us);
          }
          let home = checkHit(position, direction, d.x, d.y, data.current.home);
          if(home) {
            emitHit(node, id, direction, d.x, d.y, eventBus.HIT_HOME, home);
          }
          // 子弹消失
          if(box || brick || iron || us || home) {
            karas.animate.frame.offFrame(frame);
            delete hash[id];
            this.setState({
              hash,
            });
          }
        };
        karas.animate.frame.onFrame(frame);
      });
    });
  }

  move(index, position, direction) {
    // 防止子弹过多过于连续先检查index的player限制
    let target = limit[index] = limit[index] || [];
    let length = target.length;
    let now = Date.now();
    if(length) {
      let last = target[length - 1];
      // 200ms限制
      if(now - last.time < 200) {
        return;
      }
      // 3发限制
      if(length >= 3) {
        return;
      }
    }
    // 每个子弹相对于tank当时位置+方向生成唯一id
    let id = uuid++;
    target.push({
      id,
      time: now,
    });
    let hash = this.state.hash;
    let d = {
      index,
      position,
      direction,
      x: 0,
      y: 0,
    };
    hash[id] = d;
    this.setState({
      hash,
    }, () => {
      // 子弹每帧移动
      let frame = () => {
        let node = this.ref[id];
        if(direction === 0) {
          d.y -= MOVE_PX;
          node.updateStyle({
            translateY: d.y,
          });
        }
        else if(direction === 1) {
          d.x += MOVE_PX;
          node.updateStyle({
            translateX: d.x,
          });
        }
        else if(direction === 2) {
          d.y += MOVE_PX;
          node.updateStyle({
            translateY: d.y,
          });
        }
        else if(direction === 3) {
          d.x -= MOVE_PX;
          node.updateStyle({
            translateX: d.x,
          });
        }
        // 校验碰撞
        let box = checkBox(position, direction, d.x, d.y, data.current.box);
        if(box) {
          emitHit(node, id, direction, d.x, d.y, eventBus.HIT_BOX);
        }
        let brick = checkHit(position, direction, d.x, d.y, data.current.brick);
        if(brick) {
          emitHit(node, id, direction, d.x, d.y, eventBus.HIT_BRICK, brick);
        }
        let iron = checkHit(position, direction, d.x, d.y, data.current.iron);
        if(iron) {
          emitHit(node, id, direction, d.x, d.y, eventBus.HIT_IRON, brick);
        }
        let enemy = checkHitEnemy(position, direction, d.x, d.y, data.current.enemy);
        if(enemy) {
          emitHit(node, id, direction, d.x, d.y, eventBus.HIT_ENEMY, enemy);
        }
        let us = checkHitUs(position, direction, d.x, d.y, index, data.current.player);
        if(us) {
          emitHit(node, id, direction, d.x, d.y, eventBus.HIT_US_BY_US, us);
        }
        let home = checkHit(position, direction, d.x, d.y, data.current.home);
        if(home) {
          emitHit(node, id, direction, d.x, d.y, eventBus.HIT_HOME, home);
        }
        // 子弹消失
        if(box || brick || iron || enemy || us || home) {
          karas.animate.frame.offFrame(frame);
          removeBullet(target, id);
          delete hash[id];
          this.setState({
            hash,
          });
        }
      }
      karas.animate.frame.onFrame(frame);
    });
  }

  render() {
    return <div style={{
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
    }}>
      {
        Object.keys(this.state.hash).map(id => {
          let data = this.state.hash[id];
          let { position, direction, x, y } = data;
          let left, top, background;
          if(direction === 0) {
            left = position[0] + 12;
            top = position[1] - 4;
            background = 'url(tank.png) no-repeat 0 -170px';
          }
          else if(direction === 1) {
            left = position[0] + 28;
            top = position[1] + 12;
            background = 'url(tank.png) no-repeat -10px -179px';
          }
          else if(direction === 2) {
            left = position[0] + 12;
            top = position[1] + 28;
            background = 'url(tank.png) no-repeat -10px -170px';
          }
          else if(direction === 3) {
            left = position[0] - 4;
            top = position[1] + 12;
            background = 'url(tank.png) no-repeat 0 -179px';
          }
          return <span ref={id}
                       key={id}
                       style={{
                         position: 'absolute',
                         left,
                         top,
                         width: 8,
                         height: 8,
                         background,
                         translateX: x,
                         translateY: y,
                       }}/>;
        })
      }
    </div>;
  }
}

export default Bullet;
