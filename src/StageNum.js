import karas from 'karas';
import eventBus from './eventBus';

class StageNum extends karas.Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      num: 1,
    };
  }

  show(num) {
    // 设置数字
    this.setState({
      num,
    }, () => {
      // 上下遮盖屏幕动画
      this.ref.top.animate([
        {
          translateY: '-100%',
        },
        {
          translateY: 0,
        },
      ], {
        duration: 300,
        fill: 'forwards',
      });
      let a = this.ref.bottom.animate([
        {
          translateY: '100%',
        },
        {
          translateY: 0,
        },
      ], {
        duration: 300,
        fill: 'forwards',
      });
      // 遮盖完成显示局数
      a.on('finish', () => {
        this.ref.text.updateStyle({
          visibility: 'visible',
        }, () => {
          // 等待1s
          setTimeout(() => {
            // 隐藏主tank菜单和局数，显示游戏主场景
            eventBus.emit(eventBus.WILL_GAME);
            eventBus.gameState = eventBus.WILL_GAME;
            this.ref.text.updateStyle({
              visibility: 'hidden',
            });
            // 打开遮盖
            this.ref.top.animate([
              {
                translateY: 0,
              },
              {
                translateY: '-100%',
              },
            ], {
              duration: 300,
              fill: 'forwards',
            });
            let a = this.ref.bottom.animate([
              {
                translateY: 0,
              },
              {
                translateY: '100%',
              },
            ], {
              duration: 300,
              fill: 'forwards',
            });
            // 开始游戏
            a.on('finish', () => {
              eventBus.emit(eventBus.GAMEING);
              eventBus.gameState = eventBus.GAMEING;
            });
          }, 1000);
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
      <span ref="top"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '50%',
              background: '#ccc',
              translateY: '-100%',
            }}/>
      <span ref="bottom"
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              width: '100%',
              height: '50%',
              background: '#ccc',
              translateY: '100%',
            }}/>
      <span ref="text"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              translateX: '-50%',
              translateY: '-50%',
              visibility: 'hidden',
              fontSize: 48,
              fontWeight: 700,
            }}>Stage {this.state.num || 1}</span>
    </div>;
  }
}

export default StageNum;
