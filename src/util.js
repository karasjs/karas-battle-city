function checkBox(tx1, ty1, direction, box) {
  let tx2 = tx1 + 32;
  let ty2 = ty1 + 32;
  let [x1, y1, x2, y2] = box;
  x1 *= 16;
  y1 *= 16;
  x2 *= 16;
  y2 *= 16;
  if(direction === 0) {
    if(y1 === ty1) {
      return true;
    }
  }
  else if(direction === 1) {
    if(x2 === tx2) {
      return true;
    }
  }
  else if(direction === 2) {
    if(y2 === ty2) {
      return true;
    }
  }
  else if(direction === 3) {
    if(x1 === tx1) {
      return true;
    }
  }
}

function checkMove(tx1, ty1, direction, list) {
  let tx2 = tx1 + 32;
  let ty2 = ty1 + 32;
  for(let i = 0, len = list.length; i < len; i++) {
    let [x1, y1, disappear] = list[i];
    if(disappear) {
      continue;
    }
    x1 *= 16;
    y1 *= 16;
    let x2 = x1 + 16;
    let y2 = y1 + 16;
    if(direction === 0) {
      if(x1 < tx2 && x2 > tx1 && ty1 - y2 === 0) {
        return true;
      }
    }
    else if(direction === 1) {
      if(y1 < ty2 && y2 > ty1 && tx2 - x1 === 0) {
        return true;
      }
    }
    else if(direction === 2) {
      if(x1 < tx2 && x2 > tx1 && ty2 - y1 === 0) {
        return true;
      }
    }
    else if(direction === 3) {
      if(y1 < ty2 && y2 > ty1 && tx1 - x2 === 0) {
        return true;
      }
    }
  }
}

function checkEnemy(tx1, ty1, direction, index, list) {
  let tx2 = tx1 + 32;
  let ty2 = ty1 + 32;
  for(let i = 0, len = list.length; i < len; i++) {
    // 自己
    if(i === index) {
      continue;
    }
    let item = list[i];
    // 死tank或无
    if(item[3] === 2) {
      continue;
    }
    let x1 = item[5];
    let y1 = item[6];
    let x2 = x1 + 32;
    let y2 = y1 + 32;
    if(direction === 0) {
      if(x1 < tx2 && x2 > tx1 && ty1 <= y2 && ty1 >= y1) {
        return true;
      }
    }
    else if(direction === 1) {
      if(y1 < ty2 && y2 > ty1 && tx2 >= x1 && tx2 <= x2) {
        return true;
      }
    }
    else if(direction === 2) {
      if(x1 < tx2 && x2 > tx1 && ty2 >= y1 && ty2 <= y2) {
        return true;
      }
    }
    else if(direction === 3) {
      if(y1 < ty2 && y2 > ty1 && tx1 <= x2 && tx1 >= x1) {
        return true;
      }
    }
  }
}

function checkUs(tx1, ty1, direction, index, list) {
  let tx2 = tx1 + 32;
  let ty2 = ty1 + 32;
  for(let i = 0, len = list.length; i < len; i++) {
    let item = list[i];
    // 自己
    if(index === i) {
      continue;
    }
    // 没命
    if(item[2] === 0) {
      continue;
    }
    let x1 = item[5];
    let y1 = item[6];
    let x2 = x1 + 32;
    let y2 = y1 + 32;
    if(direction === 0) {
      if(x1 < tx2 && x2 > tx1 && ty1 <= y2 && ty1 >= y1) {
        return true;
      }
    }
    else if(direction === 1) {
      if(y1 < ty2 && y2 > ty1 && tx2 >= x1 && tx2 <= x2) {
        return true;
      }
    }
    else if(direction === 2) {
      if(x1 < tx2 && x2 > tx1 && ty2 >= y1 && ty2 <= y2) {
        return true;
      }
    }
    else if(direction === 3) {
      if(y1 < ty2 && y2 > ty1 && tx1 <= x2 && tx1 >= x1) {
        return true;
      }
    }
  }
}

function checkHome(tx1, ty1, direction, list) {
  let tx2 = tx1 + 32;
  let ty2 = ty1 + 32;
  for(let i = 0, len = list.length; i < len; i++) {
    let item = list[i];
    let x1 = item[0] * 16;
    let y1 = item[1] * 16;
    let x2 = x1 + 32;
    let y2 = y1 + 32;
    if(direction === 0) {
      if(x1 < tx2 && x2 > tx1 && ty1 - y2 === 0) {
        return true;
      }
    }
    else if(direction === 1) {
      if(y1 < ty2 && y2 > ty1 && tx2 - x1 === 0) {
        return true;
      }
    }
    else if(direction === 2) {
      if(x1 < tx2 && x2 > tx1 && ty2 - y1 === 0) {
        return true;
      }
    }
    else if(direction === 3) {
      if(y1 < ty2 && y2 > ty1 && tx1 - x2 === 0) {
        return true;
      }
    }
  }
}

export default {
  checkBox,
  checkMove,
  checkEnemy,
  checkUs,
  checkHome,
};
