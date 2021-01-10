import eventBus from './eventBus';
import data from './data';

class AudioController {
  constructor() {
    this.initialSuccess = false;
    try {
      this.init();
      this.initialSuccess = true;
    } catch (e) {
      console.log(e)
    }
  }
  init () {
    this.mainBGM = new Howl({
      src: 'sound/start.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.hitBrick = new Howl({
      src: 'sound/hit_brick.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.hitIron = new Howl({
      src: 'sound/hit_iron.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.boom = new Howl({
      src: 'sound/boom1.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.hitHome = new Howl({
      src: 'sound/boom2.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.shoot0 = new Howl({
      src: 'sound/shoot0.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.shoot1 = new Howl({
      src: 'sound/shoot1.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.shoot2 = new Howl({
      src: 'sound/shoot2.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.shoot3 = new Howl({
      src: 'sound/shoot3.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.occur = new Howl({
      src: 'sound/occur.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.get = new Howl({
      src: 'sound/get.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.life = new Howl({
      src: 'sound/life.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    eventBus.on(eventBus.OCCUR, () => {
      this.occur.play();
    });
    eventBus.on(eventBus.GET, () => {
      this.get.play();
    });
    eventBus.on(eventBus.LIFE, () => {
      this.life.play();
    });
    eventBus.on(eventBus.SHOOT, () => {
      this.shoot0.play();
    });
    eventBus.on(eventBus.ENEMY_FIRE, (i) => {
      switch(data.current.enemy[i][2]) {
        case 0:
          this.shoot2.play();
          break;
        case 1:
          this.shoot1.play();
          break;
        case 2:
          this.shoot2.play();
          break;
        default:
          this.shoot3.play();
      }
    });
    eventBus.on(eventBus.WILL_GAME, () => {
      this.mainBGM.play();
    });
    eventBus.on(eventBus.HIT_BRICK, (id, x, y, item) => {
      let brick = data.current.brick;
      // 先判断变铁的
      outer:
      for(let i = 0, len = brick.length; i < len; i++) {
        for(let j = item.length - 1; j >= 0; j--) {
          if(brick[i][3] && brick[i][0] === item[j][0] && brick[i][1] === item[j][1]) {
            item.splice(j, 1);
            this.hitIron.play();
          }
        }
      }
      if(!item.length) {
        return;
      }
      this.hitBrick.play();
    });
    eventBus.on(eventBus.HIT_BOX, () => {
      this.hitBrick.play();
    });
    eventBus.on([eventBus.HIT_IRON, eventBus.HIT_ENEMY], () => {
      this.hitIron.play();
    });
    eventBus.on(eventBus.BOOM, () => {
      this.boom.play();
    });
    eventBus.on(eventBus.HIT_HOME, () => {
      this.hitHome.play();
    });
    eventBus.on(eventBus.GET, () => {
      this.get.play();
    });
    eventBus.on(eventBus.LIFE, () => {
      this.life.play();
    });
  }
  play () {

  }

  mute (muted) {
    Howler.mute(muted);
  }
}

export default new AudioController();
