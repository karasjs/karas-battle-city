import karas from 'karas';
import data from './data';
import eventBus from './eventBus';

class Fade extends karas.Component {
  constructor(props) {
    super(props);
    this.state = {
      enemy: data[0].enemy,
      player: data[0].player,
    };
  }

  componentDidMount() {
    // 开始游戏
    eventBus.on(eventBus.GAMEING, () => {
      this.updateStyle({
        visibility: 'visible',
      });
      this.show(0);
    });
  }

  show(i) {
    let node = this.ref['player' + i];
    node.animate([
      {
        visibility: 'visible',
        backgroundPosition: '-204 0',
      },
      {
        visibility: 'visible',
        backgroundPosition: '0 0',
      },
    ], {
      duration: 300,
      iterations: 6,
      direction: 'alternate',
      easing: 'steps(6)',
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
        this.state.enemy.map((item, i) => {
          return <span ref={'player' + i}
                       style={{
                         position: 'absolute',
                         left: item[0] * 16,
                         top: item[1] * 16,
                         width: 32,
                         height: 32,
                         background: 'url(tank.png) no-repeat -204 0',
                       }}/>;
        })
      }
      {
        this.state.player.map((item, i) => {
          return <span ref={'player' + i}
                       style={{
                         position: 'absolute',
                         left: item[0] * 16,
                         top: item[1] * 16,
                         width: 32,
                         height: 32,
                         background: 'url(tank.png) no-repeat -204 0',
                       }}/>;
        })
      }
    </div>;
  }
}

export default Fade;
