import Menu from './Menu';
import StageNum from './StageNum';
import GameOver from './GameOver';
import Box from './Box';
import Brick from './Brick';
import Iron from './Iron';
import Fade from './Fade';
import Player from './Player';
import Enemy from './Enemy';
import Bullet from './Bullet';
import Hit from './Hit';
import Boom from './Boom';
import Item from './Item';
import Status from './Status';
import eventBus from './eventBus';
import Grass from './Grass';
import Sound from './Sound';

let root = karas.render(
  <canvas width={600} height={600} cache="1">
    <Box ref="box" />
    <Brick ref="brick" />
    <Iron ref="iron" />
    <Player ref="player" />
    <Enemy ref="enemy" />
    <Grass ref="grass" />
    <Fade ref="fade" />
    <Item ref="item"/>
    <Bullet ref="bullet" />
    <Boom ref="boom" />
    <Hit ref="hit" />
    <Status ref="status"/>
    <Menu ref="menu" />
    <StageNum ref="stageNum" />
    <GameOver ref="gameOver" />
  </canvas>,
  '#canvas'
);

document.addEventListener('keydown', function (e) {
  let keyCode = e.keyCode;
  // console.warn(e.keyCode, eventBus.gameState);
  // 菜单进入，快速进入完毕
  if (eventBus.gameState === eventBus.BEFORE_MENU) {
    if (e.keyCode === 74) {
      root.ref.menu.fastShow();
    }
  }
  // 菜单选择
  else if (eventBus.gameState === eventBus.MENUING) {
    if (keyCode === 87 || keyCode === 83) {
      root.ref.menu.altPlayerNum();
    }
    // 开始游戏，赋予data的current为第1局数值
    else if (e.keyCode === 74) {
      eventBus.gameState = eventBus.BEFORE_GAME;
      eventBus.emit(eventBus.BEFORE_GAME);
    }
  }
  // 游戏控制
  else if (eventBus.gameState === eventBus.GAMEING) {
    if (keyCode === 87) {
      root.ref.player.move(0, 0);
    }
    else if (keyCode === 68) {
      root.ref.player.move(0, 1);
    }
    else if (keyCode === 83) {
      root.ref.player.move(0, 2);
    }
    else if (keyCode === 65) {
      root.ref.player.move(0, 3);
    }
    // p1开火
    else if (keyCode === 74) {
      let position = root.ref.player.getPosition(0);
      let direction = root.ref.player.getDirection(0);
      root.ref.bullet.move(0, position.slice(0), direction);
    }
  }
  else if (eventBus.gameState === eventBus.GAME_OVER_WAIT) {
    if (keyCode === 74) {
      root.ref.player.setState({
        show: false,
        list: [],
      });
      root.ref.enemy.setState({
        show: false,
        list: [],
      });
      root.ref.brick.setState({
        show: false,
        list: [],
      });
      root.ref.iron.setState({
        show: false,
        list: [],
      });
      root.ref.box.setState({
        show: false,
        list: [],
        home: [],
      });
      root.ref.gameOver.setState({
        show: false,
      });
      root.ref.menu.show();
      eventBus.gameState = eventBus.BEFORE_MENU;
      eventBus.emit(eventBus.BEFORE_MENU);
    }
  }
});

document.addEventListener('keyup', function (e) {
  let keyCode = e.keyCode;
  if (eventBus.gameState === eventBus.GAMEING) {
    if (keyCode === 87) {
      root.ref.player.stop(0);
    }
    else if (keyCode === 68) {
      root.ref.player.stop(0);
    }
    else if (keyCode === 83) {
      root.ref.player.stop(0);
    }
    else if (keyCode === 65) {
      root.ref.player.stop(0);
    }
  }
});

let w = document.querySelector('#w');
let a = document.querySelector('#a');
let s = document.querySelector('#s');
let d = document.querySelector('#d');
let j = document.querySelector('#j');

w.addEventListener('touchstart', function (e) {
  e.preventDefault();
  if (eventBus.gameState === eventBus.MENUING) {
    root.ref.menu.altPlayerNum();
  }
  else if (eventBus.gameState === eventBus.GAMEING) {
    root.ref.player.move(0, 0);
  }
});

a.addEventListener('touchstart', function (e) {
  e.preventDefault();
  if (eventBus.gameState === eventBus.GAMEING) {
    root.ref.player.move(0, 3);
  }
});

s.addEventListener('touchstart', function (e) {
  e.preventDefault();
  if (eventBus.gameState === eventBus.MENUING) {
    root.ref.menu.altPlayerNum();
  }
  else if (eventBus.gameState === eventBus.GAMEING) {
    root.ref.player.move(0, 2);
  }
});

d.addEventListener('touchstart', function (e) {
  e.preventDefault();
  if (eventBus.gameState === eventBus.GAMEING) {
    root.ref.player.move(0, 1);
  }
});

j.addEventListener('touchstart', function (e) {
  e.preventDefault();
  if (eventBus.gameState === eventBus.BEFORE_MENU) {
    root.ref.menu.fastShow();
  }
  else if (eventBus.gameState === eventBus.MENUING) {
    eventBus.gameState = eventBus.BEFORE_GAME;
    eventBus.emit(eventBus.BEFORE_GAME);
  }
  else if (eventBus.gameState === eventBus.GAMEING) {
    let position = root.ref.player.getPosition(0);
    let direction = root.ref.player.getDirection(0);
    root.ref.bullet.move(0, position.slice(0), direction);
  }
  else if (eventBus.gameState === eventBus.GAME_OVER_WAIT) {
    root.ref.player.setState({
      show: false,
      list: [],
    });
    root.ref.enemy.setState({
      show: false,
      list: [],
    });
    root.ref.brick.setState({
      show: false,
      list: [],
    });
    root.ref.iron.setState({
      show: false,
      list: [],
    });
    root.ref.box.setState({
      show: false,
      list: [],
      home: [],
    });
    root.ref.gameOver.setState({
      show: false,
    });
    root.ref.menu.show();
    eventBus.gameState = eventBus.BEFORE_MENU;
    eventBus.emit(eventBus.BEFORE_MENU);
  }
});

w.addEventListener('touchend', function () {
  if (eventBus.gameState === eventBus.GAMEING) {
    root.ref.player.stop(0);
  }
});

a.addEventListener('touchend', function () {
  if (eventBus.gameState === eventBus.GAMEING) {
    root.ref.player.stop(0);
  }
});

s.addEventListener('touchend', function () {
  if (eventBus.gameState === eventBus.GAMEING) {
    root.ref.player.stop(0);
  }
});

d.addEventListener('touchend', function () {
  if (eventBus.gameState === eventBus.GAMEING) {
    root.ref.player.stop(0);
  }
});
