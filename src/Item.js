import karas from 'karas';
import eventBus from './eventBus';
import data from './data';

const TYPE = {
  pause: {
    px: 476,
    py: 204,
  },
  protect: {
    px: 612,
    py: 204,
  },
  boom: {
    px: 680,
    py: 204,
  },
  wall: {
    px: 748,
    py: 204,
  },
  life: {
    px: 816,
    py: 204,
  },
};

class Item extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: {},
    };
  }

  componentDidMount() {
    let list = ['pause', 'protect', 'boom', 'wall', 'life'];
    eventBus.on(eventBus.OCCUR, () => {
      let i = Math.floor(Math.random() * list.length);
      let x = Math.floor(Math.random() * (data.current.box[2] - data.current.box[0]) * 8) + data.current.box[2] * 8;
      let y = Math.floor(Math.random() * (data.current.box[3] - data.current.box[1]) * 8) + data.current.box[1] * 8;
      let hash = this.state.hash;
      let type = list[i];
      type = 'protect';
      let o = hash[type] = {
        x,
        y,
      };
      data.current.item = Object.keys(hash).map(k => [k, hash[k].x, hash[k].y]);
      this.setState({
        hash,
      }, () => {
        let node = this.ref[type];
        let a = node.animate([
          {},
          {
            visibility: 'hidden',
          },
        ], {
          duration: 200,
          iterations: 1196,
          direction: 'alternate',
        });
        a.on('finish', () => {
          if(hash[type] === o) {
            delete hash[type];
            data.current.item = Object.keys(hash).map(k => [k, hash[k].x, hash[k].y]);
            this.setState({
              hash,
            });
          }
        });
      });
    });
    eventBus.on([eventBus.LIFE, eventBus.GET], type => {
      let hash = this.state.hash;
      delete hash[type];
      data.current.item = Object.keys(hash).map(k => [k, hash[k].x, hash[k].y]);
      this.setState({
        hash,
      });
      let count = 0;
      karas.animate.frame.offFrame(this.cb);
      if(type === 'pause') {
        data.current.enemyPause = true;
        let cb = this.cb = (diff) => {
          count += diff;
          if(count > 5000) {
            data.current.enemyPause = false;
          }
        };
        karas.animate.frame.onFrame(cb);
      }
    });
    eventBus.on([eventBus.GAME_OVER, eventBus.GAME_NEXT], () => {
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
    }}>
      {
        Object.keys(this.state.hash).map(type => {
          let data = this.state.hash[type];
          let { x, y } = data;
          let { px, py } = TYPE[type];
          return <span ref={type}
                       key={type}
                       style={{
                         position: 'absolute',
                         left: x,
                         top: y,
                         width: 32,
                         height: 32,
                         background: `url(tank.png) no-repeat ${-px} ${-py}`,
                       }}/>;
        })
      }
    </div>;
  }
}

export default Item;
