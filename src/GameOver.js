import karas from 'karas';
import eventBus from './eventBus';

class GameOver extends karas.Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      show: false,
    };
  }

  componentDidMount () {
    eventBus.on(eventBus.HIT_HOME, () => {
      eventBus.gameState = eventBus.GAME_OVER;
      eventBus.emit(eventBus.GAME_OVER);

      this.setState({
        show: true,
      }, () => {
        let a = this.shadowRoot.animate([
          {},
          {
            translateY: '0%',
          },
        ], {
          duration: 2000,
          fill: 'forwards',
        });
        a.on('finish', () => {
          eventBus.gameState = eventBus.GAME_OVER_WAIT;
        });
      });
    });
  }

  render () {
    return <div style={{
      position: 'absolute',
      left: 0,
      top: 0,
      display: this.state.show ? 'block' : 'none',
      width: '100%',
      height: '100%',
      translateY: '100%',
    }}>
      <span ref="text"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 62,
          height: 30,
          background: 'url(tank.png) no-repeat -138 -137',
          translateX: '-50%',
          translateY: '-50%',
        }} />
    </div>;
  }
}

export default GameOver;
