import Menu from './Menu';
import StageNum from './StageNum';
import Box from './Box';
import Brick from './Brick';
import Iron from './Iron';
import Fade from './Fade';
import Player from './Player';
import eventBus from './eventBus';

let root = karas.render(
  <canvas width={600} height={600}>
    <Box ref="box"/>
    <Brick ref="brick"/>
    <Iron ref="iron"/>
    <Fade ref="fade"/>
    <Player ref="player"/>
    <Menu ref="menu"/>
    <StageNum ref="stageNum"/>
  </canvas>,
  '#canvas'
);

document.addEventListener('keydown', function(e) {
  let keyCode = e.keyCode;
  // console.warn(e.keyCode, eventBus.gameState);
  if(eventBus.gameState === eventBus.MENUING) {
    if(keyCode === 87 || keyCode === 83) {
      root.ref.menu.altPlayerNum();
    }
    else if(e.keyCode === 74 || e.keyCode === 13) {
      eventBus.gameState = eventBus.BEFORE_GAME;
      root.ref.stageNum.show(1);
    }
  }
  else if(eventBus.gameState === eventBus.GAMEING) {
    if(keyCode === 87) {
      root.ref.player.move(0, 0);
    }
    else if(keyCode === 68) {
      root.ref.player.move(0, 1);
    }
    else if(keyCode === 83) {
      root.ref.player.move(0, 2);
    }
    else if(keyCode === 65) {
      root.ref.player.move(0, 3);
    }
  }
});

document.addEventListener('keyup', function(e) {
  let keyCode = e.keyCode;
  if(eventBus.gameState === eventBus.GAMEING) {
    if(keyCode === 87) {
      root.ref.player.stop(0);
    }
    else if(keyCode === 68) {
      root.ref.player.stop(0);
    }
    else if(keyCode === 83) {
      root.ref.player.stop(0);
    }
    else if(keyCode === 65) {
      root.ref.player.stop(0);
    }
  }
});
