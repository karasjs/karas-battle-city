import karas from 'karas';
import data from './data';
import eventBus from './eventBus';

class Brick extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data[0].brick,
    };
  }

  componentDidMount() {
    // 开始游戏
    eventBus.on(eventBus.WILL_GAME, () => {
      this.updateStyle({
        visibility: 'visible',
      });
    });
  }

  updateList(list) {
    this.setState({
      list,
    });
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
        this.state.list.map(item => {
          let [x, y] = item;
          let left = x * 16;
          let top = y * 16;
          return <span style={{
            position: 'absolute',
            left,
            top,
            width: 16,
            height: 16,
            background: 'url(tank.png) no-repeat -612px -170px',
          }}/>;
        })
      }
    </div>;
  }
}

export default Brick;
