import eventBus from './eventBus';

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
      src: '../sound/start.mp3',
      format: 'mp3',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.hitBrick = new Howl({
      src: '../sound/hit_brick.wav',
      format: 'wav',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.hitIron = new Howl({
      src: '../sound/hit_iron.wav',
      format: 'wav',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.hitTank = new Howl({
      src: '../sound/hit_tank.wav',
      format: 'wav',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    this.hitHome = new Howl({
      src: '../sound/hit_home.wav',
      format: 'wav',
      loop: false,
      preload: true,
      volume: 0.5,
    });
    eventBus.on(eventBus.BEFORE_GAME, () => {
      this.mainBGM.play();
    });
    eventBus.on(eventBus.HIT_BRICK, () => {
      this.hitBrick.play();
    });
    eventBus.on(eventBus.HIT_BOX, () => {
      this.hitBrick.play();
    });
    eventBus.on(eventBus.HIT_IRON, () => {
      this.hitIron.play();
    });
    eventBus.on(eventBus.HIT_ENEMY, (id, x, y, enemy) => {
      if (enemy[0][10] === 0) {
        this.hitTank.play();
      } else {
        this.hitIron.play();
      }
    });
    eventBus.on(eventBus.HIT_US, () => {
      this.hitHome.play();
    });
    eventBus.on(eventBus.GAME_OVER, () => {
      this.hitHome.play();
    });
  }
  play () {

  }

  mute (muted) {
    Howler.mute(muted);
  }
}

export default new AudioController();