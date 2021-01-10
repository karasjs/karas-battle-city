import karas from 'karas';
import data from './data';
import eventBus from './eventBus';

class Box extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      list: [],
      home: [],
      fail: false,
    };
  }

  componentDidMount() {
    // 开始游戏
    eventBus.on(eventBus.WILL_GAME, () => {
      this.setState({
        show: true,
        list: data.current.box,
        home: data.current.home,
        fail: false,
      });
    });
    eventBus.on(eventBus.HIT_HOME, () => {
      this.state.home.forEach(item => item.push(true));
      this.setState({
        fail: true,
      });
    });
    eventBus.on(eventBus.GET, type => {
      if(type === 'wall') {}
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
      visibility: this.state.show ? 'visible' : 'hidden',
    }}>
      {
        list.length ? <span style={{
          position: 'absolute',
          left: list[0] * 16,
          top: list[1] * 16,
          width: (list[2] - list[0]) * 16,
          height: (list[3] - list[1]) * 16,
          background: '#111',
        }}/> : null
      }
      {
        home.map(item => {
          let p = this.state.fail ? '-680px -170px' : '-646px -170px';
          return <span style={{
            position: 'absolute',
            left: item[0] * 16,
            top: item[1] * 16,
            width: 32,
            height: 32,
            background: `url(tank.png) no-repeat ${p}`,
          }}/>;
        })
      }
    </div>;
  }
}

export default Box;
