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
        res.push([x0, y0, x1, y1, x2, y2]);
      }
    }
    else if(direction === 1) {
      if(x + 36 >=x1 && x + 28 <= x2 && y + 20 >= y1 && y + 12 <= y2) {
        res.push([x0, y0, x1, y1, x2, y2]);
      }
    }
    else if(direction === 2) {
      if(y + 36 >= y1 && y + 28 <= y2 && x + 20 >= x1 && x + 12 <= x2) {
        res.push([x0, y0, x1, y1, x2, y2]);
      }
    }
    else if(direction === 3) {
      if(x - 4 <= x2 && x + 4 >= x1 && y + 20 >= y1 && y + 12 <= y2) {
        res.push([x0, y0, x1, y1, x2, y2]);
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

let uuid = 0;
const MOVE_PX = 4;

class Bullet extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      hash: {},
    };
  }

  componentDidMount() {
    eventBus.on(eventBus.GAMEING, () => {
      this.state.show = true;
      this.updateStyle({
        visibility: 'visible',
      });
    });
  }

  move(index, position, direction) {
    let id = uuid++;
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
        if(checkBox(position, direction, d.x, d.y, data.current.box)) {
          emitHit(node, id, direction, d.x, d.y, eventBus.HIT_BOX);
          karas.animate.frame.offFrame(frame);
          delete hash[id];
          this.setState({
            hash,
          });
          return;
        }
        let brick = checkHit(position, direction, d.x, d.y, data.current.brick);
        if(brick) {
          emitHit(node, id, direction, d.x, d.y, eventBus.HIT_BRICK, brick);
          karas.animate.frame.offFrame(frame);
          delete hash[id];
          this.setState({
            hash,
          });
          return;
        }
        let iron = checkHit(position, direction, d.x, d.y, data.current.iron);
        if(iron) {
          emitHit(node, id, direction, d.x, d.y, eventBus.HIT_IRON, brick);
          karas.animate.frame.offFrame(frame);
          delete hash[id];
          this.setState({
            hash,
          });
          return;
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
      visibility: this.state.show ? 'visible' : 'hidden',
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
