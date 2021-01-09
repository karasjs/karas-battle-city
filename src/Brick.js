import karas from 'karas';
import data from './data';
import eventBus from './eventBus';

class Brick extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      list: [],
    };
  }

  componentDidMount() {
    // 开始游戏
    eventBus.on(eventBus.WILL_GAME, () => {
      this.setState({
        show: true,
        list: data.current.brick,
      });
    });
    eventBus.on(eventBus.HIT_BRICK, (id, x, y, data) => {
      let hash = {};
      data.forEach(item => {
        hash[item[0]] = hash[item[0]] || [];
        hash[item[0]].push(item[1]);
      });
      for(let list = this.state.list, i = 0, len = list.length; i < len; i++) {
        let item = list[i];
        if(!item[2] && hash.hasOwnProperty(item[0]) && hash[item[0]].indexOf(item[1]) > -1) {
          item.push(true);
          this.ref[item[0] + ',' + item[1]].updateStyle({
            display: 'none',
          });
        }
      }
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
        this.state.list.map(item => {
          let [x, y] = item;
          let left = x * 16;
          let top = y * 16;
          return <span ref={x + ',' + y}
                       style={{
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
