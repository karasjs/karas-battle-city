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
        if(!item[2] && !item[3] && hash.hasOwnProperty(item[0]) && hash[item[0]].indexOf(item[1]) > -1) {
          item[2] = 1;
          this.ref[item[0] + ',' + item[1]].updateStyle({
            display: 'none',
          });
        }
      }
    });
    eventBus.on(eventBus.GET, type => {
      if(type === 'wall') {
        let home = data.current.home;
        let len = home.length;
        let list = [];
        this.state.list.forEach(item => {
          let [x, y] = item;
          for(let i = 0; i < len; i++) {
            let [x1, y1] = home[i];
            let x2 = x1 + 1;
            let y2 = y1 + 1;
            if((Math.abs(x - x1) + Math.abs(y - y1)) <= 2
              || (Math.abs(x - x1) + Math.abs(y - y2)) <= 2
              || (Math.abs(x - x2) + Math.abs(y - y1)) <= 2
              || (Math.abs(x - x2) + Math.abs(y - y2)) <= 2) {
              item[3] = 1;
              let target = this.ref[x + ',' + y];
              target.updateStyle({
                display: 'block',
                backgroundPosition: '0 -204px',
              });
              list.push({
                item,
                target,
              });
            }
          }
        });
        if(list.length) {
          this.timeout = setTimeout(() => {
            let a;
            list.forEach(o => {
              let { target } = o;
              a = target.animate([
                {},
                {
                  backgroundPosition: '-612px -170px',
                },
              ], {
                duration: 200,
                iterations: 16,
                easing: 'steps(1)',
                direction: 'alternate',
              });
            });
            a.on('finish', () => {
              list.forEach(o => {
                let { item, target } = o;
                item[2] = 0;
                item[3] = 0;
                target.clearAnimate();
                target.updateStyle({
                  display: item[2] ? 'none' : 'block',
                  backgroundPosition: '-612px -170px',
                });
              });
            });
          }, 10000);
        }
      }
    });
    eventBus.on([eventBus.GAME_OVER, eventBus.GAME_NEXT], () => {
      clearTimeout(this.timeout);
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
