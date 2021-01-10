import karas from 'karas';
import data from './data';
import eventBus from './eventBus';

class Status extends karas.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      life: 0,
      list: [],
    };
  }

  componentDidMount() {
    eventBus.on([eventBus.WILL_GAME], () => {
      this.setState({
        show: true,
        life: data.current.player[0][2],
        list: data.current.enemy || [],
      });
    });
    eventBus.on(eventBus.LIFE, () => {
      this.setState({
        life: this.state.life + 1,
      });
    });
    eventBus.on(eventBus.HIT_US, () => {
      this.setState({
        life: this.state.life - 1,
      });
    });
    eventBus.on(eventBus.ADDED_ENEMY, () => {
      this.setState({
        list: data.current.enemy || [],
      });
    });
    eventBus.on(eventBus.BEFORE_MENU, () => {
      this.setState({
        show: false,
        life: 0,
        list: [],
      });
    });
  }

  render() {
    return <div style={{
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 20,
      display: this.state.show ? 'block' : 'none',
    }}>
      <div ref="life" style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <span style={{
          width: 32,
          height: 32,
          background: 'url(tank.png) no-repeat -748px -170px',
        }}/>
        <strong style={{ color: '#000' }}>{this.state.life || 0}</strong>
      </div>
      <div ref="list">
        {
          this.state.list.map(item => {
            if(item[3]) {
              return null;
            }
            return <span style={{
              width:32,
              height:32,
              background: 'url(tank.png) no-repeat -340 -204',
            }}/>;
          })
        }
      </div>
    </div>;
  }
}

export default Status;
