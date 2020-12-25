(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('karas')) :
  typeof define === 'function' && define.amd ? define(['karas'], factory) :
  (global = global || self, factory(global.karas));
}(this, (function (karas$1) { 'use strict';

  karas$1 = karas$1 && Object.prototype.hasOwnProperty.call(karas$1, 'default') ? karas$1['default'] : karas$1;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var data = {
    "0": {
      "brick": [[7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9], [7, 10], [7, 11], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8], [8, 9], [8, 10], [8, 11], [11, 4], [12, 4], [12, 5], [11, 5], [11, 6], [12, 6], [12, 7], [11, 7], [11, 8], [12, 8], [12, 9], [11, 9], [11, 10], [12, 10], [11, 11], [12, 11], [9, 14], [9, 15], [10, 15], [10, 14], [11, 14], [11, 15], [12, 15], [12, 14], [7, 18], [8, 18], [7, 19], [8, 19], [7, 20], [8, 20], [7, 21], [8, 21], [7, 22], [8, 22], [7, 23], [8, 23], [7, 24], [8, 24], [7, 25], [8, 25], [11, 18], [12, 18], [12, 19], [12, 20], [12, 21], [12, 22], [11, 22], [11, 20], [11, 19], [11, 21], [11, 23], [12, 23], [12, 24], [11, 24], [11, 25], [12, 25], [15, 9], [16, 9], [16, 8], [15, 8], [15, 7], [16, 7], [16, 6], [15, 6], [15, 5], [15, 4], [16, 4], [16, 5], [19, 9], [20, 9], [20, 8], [19, 8], [19, 7], [20, 7], [20, 6], [19, 6], [19, 5], [19, 4], [20, 4], [20, 5], [15, 12], [15, 13], [16, 13], [16, 12], [19, 12], [19, 13], [20, 13], [20, 12], [15, 17], [15, 16], [16, 16], [16, 17], [15, 18], [16, 18], [15, 19], [16, 19], [15, 20], [16, 20], [15, 21], [16, 21], [15, 22], [16, 22], [19, 16], [20, 16], [20, 17], [19, 17], [19, 18], [20, 18], [20, 19], [19, 19], [19, 20], [20, 20], [20, 21], [19, 21], [19, 22], [20, 22], [17, 17], [18, 17], [18, 18], [17, 18], [23, 4], [24, 4], [23, 5], [24, 5], [24, 6], [23, 6], [23, 8], [23, 7], [24, 7], [24, 8], [23, 9], [24, 9], [23, 10], [24, 10], [23, 11], [24, 11], [27, 4], [28, 4], [28, 5], [27, 5], [27, 6], [28, 6], [28, 7], [27, 7], [27, 8], [28, 8], [28, 9], [27, 10], [27, 9], [28, 10], [27, 11], [28, 11], [23, 14], [23, 15], [24, 14], [24, 15], [26, 14], [26, 15], [25, 15], [25, 14], [23, 18], [24, 18], [23, 19], [24, 19], [23, 20], [24, 20], [23, 21], [24, 21], [23, 22], [24, 22], [23, 23], [24, 23], [23, 24], [24, 24], [23, 25], [24, 25], [27, 18], [28, 18], [27, 19], [28, 19], [27, 20], [28, 20], [27, 21], [28, 21], [27, 22], [28, 22], [27, 23], [28, 23], [27, 25], [28, 25], [28, 24], [27, 24], [29, 14], [30, 14], [6, 14], [5, 14], [16, 25], [17, 25], [18, 25], [19, 25], [16, 26], [16, 27], [19, 26], [19, 27]],
      "iron": [[30, 15], [29, 15], [6, 15], [5, 15], [17, 7], [18, 7], [18, 8], [17, 8]],
      "home": [[17, 26]],
      "player": [[13, 26], [21, 26]],
      "enemy": [[17, 2], [5, 2], [29, 2]],
      "box": [5, 2, 31, 28]
    }
  };

  var eventBus = new karas$1.Event();
  eventBus.BEFORE_MENU = 0;
  eventBus.MENUING = 1;
  eventBus.BEFORE_GAME = 2;
  eventBus.WILL_GAME = 3;
  eventBus.GAMEING = 4;
  eventBus.gameState = eventBus.BEFORE_MENU;
  eventBus.brick = karas$1.util.clone(data[0].brick);
  eventBus.iron = karas$1.util.clone(data[0].iron);

  var Menu = /*#__PURE__*/function (_karas$Component) {
    _inherits(Menu, _karas$Component);

    var _super = _createSuper(Menu);

    function Menu(props) {
      var _this;

      _classCallCheck(this, Menu);

      _this = _super.call(this, props);
      _this.playerNum = 1;
      return _this;
    }

    _createClass(Menu, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var sr = this.shadowRoot;
        var tank = this.ref.tank;
        var animation = sr.animate([{}, {
          translateY: '-50%'
        }], {
          duration: 200,
          fill: 'forwards'
        });
        var tankAnimation; // 上移结束显示选择tank

        animation.on('finish', function () {
          eventBus.emit(eventBus.MENUING);
          eventBus.gameState = eventBus.MENUING;
          tank.updateStyle({
            visibility: 'inherit'
          });
          tankAnimation = tank.animate([{}, {
            backgroundPositionX: -102
          }], {
            duration: 100,
            iterations: Infinity,
            easing: 'steps(1)',
            direction: 'alternate-reverse'
          });
        }); // 开始游戏隐藏

        eventBus.on(eventBus.WILL_GAME, function () {
          _this2.updateStyle({
            visibility: 'hidden'
          });

          tankAnimation.pause();
        });
      }
    }, {
      key: "altPlayerNum",
      value: function altPlayerNum() {
        var n = this.playerNum = this.playerNum === 2 ? 1 : 2;

        if (n === 2) {
          this.ref.tank.updateStyle({
            translateY: 32
          });
        } else {
          this.ref.tank.updateStyle({
            translateY: 0
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 396,
            height: 302,
            translateX: '-50%',
            translateY: 300
          }
        }, karas$1.createElement("img", {
          src: "menu.png",
          style: {
            width: '100%',
            height: '100%'
          }
        }), karas$1.createElement("div", {
          ref: "tank",
          style: {
            position: 'absolute',
            left: 100,
            top: 216,
            width: 32,
            height: 32,
            background: 'url(tank.png) no-repeat -68px -272px',
            visibility: 'hidden'
          }
        }));
      }
    }]);

    return Menu;
  }(karas$1.Component);

  var StageNum = /*#__PURE__*/function (_karas$Component) {
    _inherits(StageNum, _karas$Component);

    var _super = _createSuper(StageNum);

    function StageNum(prpos) {
      var _this;

      _classCallCheck(this, StageNum);

      _this = _super.call(this, prpos);
      _this.state = {
        num: 1
      };
      return _this;
    }

    _createClass(StageNum, [{
      key: "show",
      value: function show(num) {
        var _this2 = this;

        // 设置数字
        this.setState({
          num: num
        }, function () {
          // 上下遮盖屏幕动画
          _this2.ref.top.animate([{
            translateY: '-100%'
          }, {
            translateY: 0
          }], {
            duration: 300,
            fill: 'forwards'
          });

          var a = _this2.ref.bottom.animate([{
            translateY: '100%'
          }, {
            translateY: 0
          }], {
            duration: 300,
            fill: 'forwards'
          }); // 遮盖完成显示局数


          a.on('finish', function () {
            _this2.ref.text.updateStyle({
              visibility: 'visible'
            }, function () {
              // 等待1s
              setTimeout(function () {
                // 隐藏主tank菜单和局数，显示游戏主场景
                eventBus.emit(eventBus.WILL_GAME);
                eventBus.gameState = eventBus.WILL_GAME;

                _this2.ref.text.updateStyle({
                  visibility: 'hidden'
                }); // 打开遮盖


                _this2.ref.top.animate([{
                  translateY: 0
                }, {
                  translateY: '-100%'
                }], {
                  duration: 300,
                  fill: 'forwards'
                });

                var a = _this2.ref.bottom.animate([{
                  translateY: 0
                }, {
                  translateY: '100%'
                }], {
                  duration: 300,
                  fill: 'forwards'
                }); // 开始游戏


                a.on('finish', function () {
                  eventBus.emit(eventBus.GAMEING);
                  eventBus.gameState = eventBus.GAMEING;
                });
              }, 1000);
            });
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }
        }, karas$1.createElement("span", {
          ref: "top",
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '50%',
            background: '#ccc',
            translateY: '-100%'
          }
        }), karas$1.createElement("span", {
          ref: "bottom",
          style: {
            position: 'absolute',
            left: 0,
            top: '50%',
            width: '100%',
            height: '50%',
            background: '#ccc',
            translateY: '100%'
          }
        }), karas$1.createElement("span", {
          ref: "text",
          style: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            translateX: '-50%',
            translateY: '-50%',
            visibility: 'hidden',
            fontSize: 48,
            fontWeight: 700
          }
        }, "Stage ", this.state.num || 1));
      }
    }]);

    return StageNum;
  }(karas$1.Component);

  var Box = /*#__PURE__*/function (_karas$Component) {
    _inherits(Box, _karas$Component);

    var _super = _createSuper(Box);

    function Box(props) {
      var _this;

      _classCallCheck(this, Box);

      _this = _super.call(this, props);
      _this.state = {
        list: data[0].box,
        home: data[0].home
      };
      return _this;
    }

    _createClass(Box, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // 开始游戏
        eventBus.on(eventBus.WILL_GAME, function () {
          _this2.updateStyle({
            visibility: 'visible'
          });
        });
      }
    }, {
      key: "updateList",
      value: function updateList(list, home) {
        this.setState({
          list: list,
          home: home
        });
      }
    }, {
      key: "render",
      value: function render() {
        var list = this.state.list;
        var home = this.state.home;
        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: '#999',
            visibility: 'hidden'
          }
        }, karas$1.createElement("span", {
          style: {
            position: 'absolute',
            left: list[0] * 16,
            top: list[1] * 16,
            width: (list[2] - list[0]) * 16,
            height: (list[3] - list[1]) * 16,
            background: '#111'
          }
        }), karas$1.createElement("span", {
          style: {
            position: 'absolute',
            left: home[0][0] * 16,
            top: home[0][1] * 16,
            width: 32,
            height: 32,
            background: 'url(tank.png) no-repeat -646px -170px'
          }
        }));
      }
    }]);

    return Box;
  }(karas$1.Component);

  var Brick = /*#__PURE__*/function (_karas$Component) {
    _inherits(Brick, _karas$Component);

    var _super = _createSuper(Brick);

    function Brick(props) {
      var _this;

      _classCallCheck(this, Brick);

      _this = _super.call(this, props);
      _this.state = {
        list: data[0].brick
      };
      return _this;
    }

    _createClass(Brick, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // 开始游戏
        eventBus.on(eventBus.WILL_GAME, function () {
          _this2.updateStyle({
            visibility: 'visible'
          });
        });
      }
    }, {
      key: "updateList",
      value: function updateList(list) {
        this.setState({
          list: list
        });
      }
    }, {
      key: "render",
      value: function render() {
        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            visibility: 'hidden'
          }
        }, this.state.list.map(function (item) {
          var _item = _slicedToArray(item, 2),
              x = _item[0],
              y = _item[1];

          var left = x * 16;
          var top = y * 16;
          return karas$1.createElement("span", {
            style: {
              position: 'absolute',
              left: left,
              top: top,
              width: 16,
              height: 16,
              background: 'url(tank.png) no-repeat -612px -170px'
            }
          });
        }));
      }
    }]);

    return Brick;
  }(karas$1.Component);

  var Brick$1 = /*#__PURE__*/function (_karas$Component) {
    _inherits(Brick, _karas$Component);

    var _super = _createSuper(Brick);

    function Brick(props) {
      var _this;

      _classCallCheck(this, Brick);

      _this = _super.call(this, props);
      _this.state = {
        list: data[0].iron
      };
      return _this;
    }

    _createClass(Brick, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // 开始游戏
        eventBus.on(eventBus.WILL_GAME, function () {
          _this2.updateStyle({
            visibility: 'visible'
          });
        });
      }
    }, {
      key: "updateList",
      value: function updateList(list) {
        this.setState({
          list: list
        });
      }
    }, {
      key: "render",
      value: function render() {
        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            visibility: 'hidden'
          }
        }, this.state.list.map(function (item) {
          var _item = _slicedToArray(item, 2),
              x = _item[0],
              y = _item[1];

          var left = x * 16;
          var top = y * 16;
          return karas$1.createElement("span", {
            style: {
              position: 'absolute',
              left: left,
              top: top,
              width: 16,
              height: 16,
              background: 'url(tank.png) no-repeat 0 -204px'
            }
          });
        }));
      }
    }]);

    return Brick;
  }(karas$1.Component);

  var Fade = /*#__PURE__*/function (_karas$Component) {
    _inherits(Fade, _karas$Component);

    var _super = _createSuper(Fade);

    function Fade(props) {
      var _this;

      _classCallCheck(this, Fade);

      _this = _super.call(this, props);
      _this.state = {
        enemy: data[0].enemy,
        player: data[0].player
      };
      return _this;
    }

    _createClass(Fade, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // 开始游戏
        eventBus.on(eventBus.GAMEING, function () {
          _this2.updateStyle({
            visibility: 'visible'
          });

          _this2.show(0);
        });
      }
    }, {
      key: "show",
      value: function show(i) {
        var node = this.ref['player' + i];
        node.animate([{
          visibility: 'visible',
          backgroundPosition: '-204 0'
        }, {
          visibility: 'visible',
          backgroundPosition: '0 0'
        }], {
          duration: 300,
          iterations: 6,
          direction: 'alternate',
          easing: 'steps(6)'
        });
      }
    }, {
      key: "updateList",
      value: function updateList(list) {
        this.setState({
          list: list
        });
      }
    }, {
      key: "render",
      value: function render() {
        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            visibility: 'hidden'
          }
        }, this.state.enemy.map(function (item, i) {
          return karas$1.createElement("span", {
            ref: 'player' + i,
            style: {
              position: 'absolute',
              left: item[0] * 16,
              top: item[1] * 16,
              width: 32,
              height: 32,
              background: 'url(tank.png) no-repeat -204 0'
            }
          });
        }), this.state.player.map(function (item, i) {
          return karas$1.createElement("span", {
            ref: 'player' + i,
            style: {
              position: 'absolute',
              left: item[0] * 16,
              top: item[1] * 16,
              width: 32,
              height: 32,
              background: 'url(tank.png) no-repeat -204 0'
            }
          });
        }));
      }
    }]);

    return Fade;
  }(karas$1.Component);

  function checkMove(position, direction, list) {
    var _position = _slicedToArray(position, 2),
        tx1 = _position[0],
        ty1 = _position[1];

    var tx2 = tx1 + 32;
    var ty2 = ty1 + 32;

    for (var i = 0, len = list.length; i < len; i++) {
      var _list$i = _slicedToArray(list[i], 2),
          x1 = _list$i[0],
          y1 = _list$i[1];

      x1 *= 16;
      y1 *= 16;
      var x2 = x1 + 16;
      var y2 = y1 + 16;

      if (direction === 0) {
        if (x1 < tx2 - 1 && x2 > tx1 + 1 && ty1 - y2 === 0) {
          return true;
        }
      } else if (direction === 1) {
        if (y1 < ty2 - 1 && y2 > ty1 + 1 && tx2 - x1 === 0) {
          return true;
        }
      } else if (direction === 2) {
        if (x1 < tx2 - 1 && x2 > tx1 + 1 && ty2 - y1 === 0) {
          return true;
        }
      } else if (direction === 3) {
        if (y1 < ty2 - 1 && y2 > ty1 + 1 && tx1 - x2 === 0) {
          return true;
        }
      }
    }
  }

  var Player = /*#__PURE__*/function (_karas$Component) {
    _inherits(Player, _karas$Component);

    var _super = _createSuper(Player);

    function Player(props) {
      var _this;

      _classCallCheck(this, Player);

      _this = _super.call(this, props);
      _this.state = {
        list: data[0].player,
        position: data[0].player.map(function (item) {
          return item.map(function (n) {
            return n * 16;
          });
        })
      };
      return _this;
    }

    _createClass(Player, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // 开始游戏
        eventBus.on(eventBus.GAMEING, function () {
          _this2.updateStyle({
            visibility: 'visible'
          });

          _this2.state.list.forEach(function (item, i) {
            var player = _this2.ref['player' + i];
            player.children[0].animate([{
              backgroundPosition: '-442 -238'
            }, {
              backgroundPosition: '-510 -238'
            }], {
              duration: 100,
              iterations: 16,
              easing: 'steps(2)'
            });
          });
        });
      }
    }, {
      key: "move",
      value: function move(index, direction) {
        var player = this.ref['player' + index]; // 播放坦克移动本身帧动画

        var lastD = this['playerD' + index];

        if (lastD !== direction) {
          this['playerD' + index] = direction;
          player.clearAnimate();
          var frame = [];

          if (direction === 0) {
            frame = [{
              backgroundPositionX: 0
            }, {
              backgroundPositionX: -34
            }];
          } else if (direction === 1) {
            frame = [{
              backgroundPositionX: -68
            }, {
              backgroundPositionX: -102
            }];
          } else if (direction === 2) {
            frame = [{
              backgroundPositionX: -136
            }, {
              backgroundPositionX: -170
            }];
          } else if (direction === 3) {
            frame = [{
              backgroundPositionX: -204
            }, {
              backgroundPositionX: -238
            }];
          }

          player.animate(frame, {
            duration: 100,
            iterations: Infinity,
            easing: 'steps(1)',
            direction: 'alternate-reverse'
          });
        } // 检查是否被挡住


        var position = this.state.position[index];

        if (checkMove(position, direction, eventBus.brick)) {
          console.log(1);
          return;
        }

        if (checkMove(position, direction, eventBus.iron)) {
          return;
        } // 坦克坐标移动


        var cb = this['ma' + index];
        karas$1.animate.frame.offFrame(cb);

        cb = this['ma' + index] = function () {
          console.log(2, direction);

          if (checkMove(position, direction, eventBus.brick)) {
            console.log(3);
            return;
          }

          if (checkMove(position, direction, eventBus.iron)) {
            return;
          }

          if (direction === 0) {
            position[1]--;
            player.updateStyle({
              translateY: --player.getComputedStyle('translateY').translateY
            });
          } else if (direction === 1) {
            position[0]++;
            player.updateStyle({
              translateX: ++player.getComputedStyle('translateX').translateX
            });
          } else if (direction === 2) {
            position[1]++;
            player.updateStyle({
              translateY: ++player.getComputedStyle('translateY').translateY
            });
          } else if (direction === 3) {
            position[0]--;
            player.updateStyle({
              translateX: --player.getComputedStyle('translateX').translateX
            });
          }
        };

        karas$1.animate.frame.onFrame(cb);
      }
    }, {
      key: "stop",
      value: function stop(index) {
        var player = this.ref['player' + index];
        player.clearAnimate();
        var cb = this['ma' + index];
        karas$1.animate.frame.offFrame(cb);
        var lastD = this['playerD' + index];

        if (lastD === 0) {
          player.updateStyle({
            backgroundPositionX: 0
          });
        } else if (lastD === 1) {
          player.updateStyle({
            backgroundPositionX: -68
          });
        } else if (lastD === 2) {
          player.updateStyle({
            backgroundPositionX: -136
          });
        } else if (lastD === 3) {
          player.updateStyle({
            backgroundPositionX: -204
          });
        }

        this['playerD' + index] = null;
      }
    }, {
      key: "render",
      value: function render() {
        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            visibility: 'hidden'
          }
        }, this.state.list.map(function (item, i) {
          var y = -272 - i * 34;
          return karas$1.createElement("div", {
            ref: 'player' + i,
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              width: 32,
              height: 32,
              translateX: item[0] * 16,
              translateY: item[1] * 16,
              background: "url(tank.png) no-repeat 0 ".concat(y)
            }
          }, karas$1.createElement("span", {
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              background: "url(tank.png) no-repeat -476 -238"
            }
          }));
        }));
      }
    }]);

    return Player;
  }(karas$1.Component);

  var root = karas.render(karas.createElement("canvas", {
    width: 600,
    height: 600
  }, karas.createElement(Box, {
    ref: "box"
  }), karas.createElement(Brick, {
    ref: "brick"
  }), karas.createElement(Brick$1, {
    ref: "iron"
  }), karas.createElement(Fade, {
    ref: "fade"
  }), karas.createElement(Player, {
    ref: "player"
  }), karas.createElement(Menu, {
    ref: "menu"
  }), karas.createElement(StageNum, {
    ref: "stageNum"
  })), '#canvas');
  document.addEventListener('keydown', function (e) {
    var keyCode = e.keyCode; // console.warn(e.keyCode, eventBus.gameState);

    if (eventBus.gameState === eventBus.MENUING) {
      if (keyCode === 87 || keyCode === 83) {
        root.ref.menu.altPlayerNum();
      } else if (e.keyCode === 74 || e.keyCode === 13) {
        eventBus.gameState = eventBus.BEFORE_GAME;
        root.ref.stageNum.show(1);
      }
    } else if (eventBus.gameState === eventBus.GAMEING) {
      if (keyCode === 87) {
        root.ref.player.move(0, 0);
      } else if (keyCode === 68) {
        root.ref.player.move(0, 1);
      } else if (keyCode === 83) {
        root.ref.player.move(0, 2);
      } else if (keyCode === 65) {
        root.ref.player.move(0, 3);
      }
    }
  });
  document.addEventListener('keyup', function (e) {
    var keyCode = e.keyCode;

    if (eventBus.gameState === eventBus.GAMEING) {
      if (keyCode === 87) {
        root.ref.player.stop(0);
      } else if (keyCode === 68) {
        root.ref.player.stop(0);
      } else if (keyCode === 83) {
        root.ref.player.stop(0);
      } else if (keyCode === 65) {
        root.ref.player.stop(0);
      }
    }
  });

})));
//# sourceMappingURL=index.js.map
