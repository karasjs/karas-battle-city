import karas from 'karas';
import eventBus from './eventBus';

class Boom extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: {},
    };
  }

  componentDidMount() {
    eventBus.on(eventBus.HIT_ENEMY, (id, x, y, enemy) => {
      let hash = this.state.hash;
      enemy.forEach(item => {
        hash[id] = {
          x: item[5] + 16,
          y: item[6] + 16,
        };
        this.setState({
          hash,
        }, () => {
          let node = this.ref[id];
          let a = node.animate([
            {
              visibility: 'visible',
            },
            {
              visibility: 'visible',
              backgroundPosition: '-851px -137px',
            },
          ], {
            duration: 100,
            iterations: 3,
            direction: 'alternate',
            easing: 'steps(1)',
          });
          a.on('finish', () => {
            delete hash[id];
            this.setState({
              hash,
            });
          });
        });
      });
    });
    eventBus.on(eventBus.HIT_US, (id, x, y, us) => {
      let hash = this.state.hash;
      us.forEach(item => {
        // 保护状态
        if(item[3] === 1) {
          return;
        }
        hash[id] = {
          x: item[5] + 16,
          y: item[6] + 16,
        };
        this.setState({
          hash,
        }, () => {
          let node = this.ref[id];
          let a = node.animate([
            {
              visibility: 'visible',
            },
            {
              visibility: 'visible',
              backgroundPosition: '-851px -137px',
            },
          ], {
            duration: 100,
            iterations: 3,
            direction: 'alternate',
            easing: 'steps(1)',
          });
          a.on('finish', () => {
            delete hash[id];
            this.setState({
              hash,
            });
          });
        });
      });
    });
    eventBus.on([eventBus.HIT_HOME], (id, x, y, home) => {
      let hash = this.state.hash;
      home.forEach(item => {
        hash[id] = {
          x: item[0] * 16 + 16,
          y: item[1] * 16 + 16,
        };
        this.setState({
          hash,
        }, () => {
          let node = this.ref[id];
          let a = node.animate([
            {
              visibility: 'visible',
            },
            {
              visibility: 'visible',
              backgroundPosition: '-851px -137px',
            },
          ], {
            duration: 100,
            iterations: 3,
            direction: 'alternate',
            easing: 'steps(1)',
          });
          a.on('finish', () => {
            delete hash[id];
            this.setState({
              hash,
            });
          });
        });
      });
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
          let d = this.state.hash[id];
          return <span ref={id}
                       key={id}
                       style={{
                         position: 'absolute',
                         left: d.x,
                         top: d.y,
                         width: 64,
                         height: 64,
                         translateX: '-50%',
                         translateY: '-50%',
                         background: 'url(tank.png) no-repeat -783px -137px',
                         visibility: 'hidden',
                       }}/>;
        })
      }
    </div>;
  }
}

export default Boom;
