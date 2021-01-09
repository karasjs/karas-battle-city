import karas from 'karas';
import data from './data';

let eventBus = new karas.Event();

eventBus.BEFORE_MENU = 0;
eventBus.MENUING = 1;
eventBus.BEFORE_GAME = 2;
eventBus.WILL_GAME = 3;
eventBus.GAMEING = 4;
eventBus.GAME_OVER = 5;
eventBus.GAME_OVER_WAIT = 6;

eventBus.gameState = eventBus.BEFORE_MENU;

eventBus.HIT_BOX = 'HIT_BOX';
eventBus.HIT_BRICK = 'HIT_BRICK';
eventBus.HIT_IRON = 'HIT_IRON';
eventBus.HIT_ENEMY = 'HIT_ENEMY';
eventBus.HIT_HOME = 'HIT_HOME';
eventBus.HIT_US = 'HIT_US';
eventBus.HIT_US_BY_US = 'HIT_US_BY_US';

eventBus.ADD_ENEMY = 'ADD_ENEMY';
eventBus.ENEMY_FIRE = 'ENEMY_FIRE';

eventBus.PLAY_REBONE = 'PLAY_REBONE';

export default eventBus;
