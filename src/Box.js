import karas from 'karas';
import data from './data';
import eventBus from './eventBus';

class Box extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data[0].box,
      home: data[0].home,
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

  updateList(list, home) {
    this.setState({
      list,
      home,
    });
  }

  render() {
    let list = this.state.list;
    let home = this.state.home;
    return <div style={{
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: '#999',
      visibility: 'hidden',
    }}>
      <span style={{
        position: 'absolute',
        left: list[0] * 16,
        top: list[1] * 16,
        width: (list[2] - list[0]) * 16,
        height: (list[3] - list[1]) * 16,
        background: '#111',
      }}/>
      <span style={{
        position: 'absolute',
        left: home[0][0] * 16,
        top: home[0][1] * 16,
        width: 32,
        height: 32,
        background: 'url(tank.png) no-repeat -646px -170px',
      }}/>
    </div>;
  }
}

export default Box;
