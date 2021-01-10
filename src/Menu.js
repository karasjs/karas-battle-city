import karas from 'karas';
import eventBus from './eventBus';

class Menu extends karas.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    let sr = this.shadowRoot;
    let tank = this.ref.tank;
    let animation = this.animation = sr.animate([
      {},
      {
        translateY: '-50%',
      }
    ], {
      duration: 1200,
      fill: 'forwards',
    });
    let tankAnimation;
    // 上移结束显示选择tank
    animation.on('finish', () => {
      this.animation = null;
      eventBus.emit(eventBus.MENUING);
      eventBus.gameState = eventBus.MENUING;
      tank.updateStyle({
        visibility: 'inherit',
      });
      tankAnimation = tank.animate([
        {},
        {
          backgroundPositionX: -102,
        }
      ], {
        duration: 100,
        iterations: Infinity,
        easing: 'steps(1)',
        direction: 'alternate-reverse',
      });
    });
    // 开始游戏隐藏
    eventBus.on(eventBus.WILL_GAME, () => {
      this.updateStyle({
        visibility: 'hidden',
      });
      sr.clearAnimate();
      tankAnimation.pause();
    });
  }

  show () {
    this.updateStyle({
      visibility: 'visible',
    });
    this.componentDidMount();
  }

  fastShow () {
    if (this.animation) {
      this.animation.finish();
      this.animation = null;
    }
  }

  altPlayerNum () {
    let n = eventBus.playerNum = eventBus.playerNum === 2 ? 1 : 2;
    if (n === 2) {
      this.ref.tank.updateStyle({
        translateY: 32,
      });
    }
    else {
      this.ref.tank.updateStyle({
        translateY: 0,
      });
    }
  }

  render () {
    return <div style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 396,
      height: 302,
      translateX: '-50%',
      translateY: 300,
    }}>
      <img src="menu.png"
        style={{
          width: '100%',
          height: '100%',
        }} />
      <div ref="tank"
        style={{
          position: 'absolute',
          left: 100,
          top: 216,
          width: 32,
          height: 32,
          background: 'url(tank.png) no-repeat -68px -272px',
          visibility: 'hidden',
        }} />
    </div>;
  }
}

export default Menu;
