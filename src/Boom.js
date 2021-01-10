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
    eventBus.on(eventBus.BOOM, (x, y) => {
      let hash = this.state.hash;
      let id = x + ',' + y;console.log(x,y)
      hash[id] = {
        x,
        y,
      };
      this.setState({
        hash,
      }, () => {
        let node = this.ref[id];
        let a = node.animate([
          {
          },
          {
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
            },
            {
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
                       }}/>;
        })
      }
    </div>;
  }
}

export default Boom;
