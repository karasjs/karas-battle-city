import karas from 'karas';
import data from './data';

let eventBus = new karas.Event();

eventBus.BEFORE_MENU = 0;
eventBus.MENUING = 1;
eventBus.BEFORE_GAME = 2;
eventBus.WILL_GAME = 3;
eventBus.GAMEING = 4;

eventBus.gameState = eventBus.BEFORE_MENU;

eventBus.brick = karas.util.clone(data[0].brick);
eventBus.iron = karas.util.clone(data[0].iron);

export default eventBus;
