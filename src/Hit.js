import karas from 'karas';
import eventBus from './eventBus';

class Hit extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: {},
    };
  }

  componentDidMount() {
    eventBus.on([eventBus.HIT_BOX, eventBus.HIT_BRICK, eventBus.HIT_IRON, eventBus.HIT_ENEMY], (id, x, y) => {
      let hash = this.state.hash;
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
            visibility: 'visible',
          },
          {
            visibility: 'visible',
            backgroundPosition: '-748px -136px',
          },
        ], {
          duration: 100,
          iterations: 2,
          direction: 'alternate',
          easing: 'steps(2)',
        });
        a.on('finish', () => {
          delete hash[id];
          this.setState({
            hash,
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
                         width: 32,
                         height: 32,
                         translateX: '-50%',
                         translateY: '-50%',
                         background: 'url(tank.png) no-repeat -680px -136px',
                         visibility: 'hidden',
                       }}/>;
        })
      }
    </div>;
  }
}

export default Hit;
