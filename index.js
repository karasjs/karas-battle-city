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
      "player": [[13, 26, 2, 1], [21, 26, 2, 1]],
      "enemy": [[5, 2, 0, 0], [17, 2, 1, 0], [29, 2, 2, 0], [5, 2, 3, 0], [17, 2, 4, 0], [29, 2, 5, 0], [5, 2, 0, 0], [17, 2, 1, 0], [29, 2, 2, 0], [5, 2, 3, 0], [17, 2, 4, 0], [29, 2, 5, 0]],
      "box": [5, 2, 31, 28]
    },
    current: null
  };

  var eventBus = new karas$1.Event();
  eventBus.BEFORE_MENU = 0;
  eventBus.MENUING = 1;
  eventBus.BEFORE_GAME = 2;
  eventBus.WILL_GAME = 3;
  eventBus.GAMEING = 4;
  eventBus.GAME_OVER = 5;
  eventBus.GAME_OVER_WAIT = 6;
  eventBus.GAME_NEXT = 7;
  eventBus.gameState = eventBus.BEFORE_MENU;
  eventBus.activeEnemyNum = 0;
  eventBus.playerNum = 1;
  eventBus.HIT_BOX = 'HIT_BOX';
  eventBus.HIT_BRICK = 'HIT_BRICK';
  eventBus.HIT_IRON = 'HIT_IRON';
  eventBus.HIT_ENEMY = 'HIT_ENEMY';
  eventBus.HIT_HOME = 'HIT_HOME';
  eventBus.HIT_US = 'HIT_US';
  eventBus.HIT_US_BY_US = 'HIT_US_BY_US';
  eventBus.ADD_ENEMY = 'ADD_ENEMY';
  eventBus.ADDED_ENEMY = 'ADDED_ENEMY';
  eventBus.ENEMY_FIRE = 'ENEMY_FIRE';
  eventBus.SHOOT = 'SHOOT';
  eventBus.PLAY_REBONE = 'PLAY_REBONE';
  eventBus.PLAYER_NO_LIFE = 'PLAYER_NO_LIFE';
  eventBus.BOOM = 'BOOM';
  eventBus.OCCUR = 'OCCUR';
  eventBus.GET = 'GET';
  eventBus.LIFE = 'LIFE';

  var Menu = /*#__PURE__*/function (_karas$Component) {
    _inherits(Menu, _karas$Component);

    var _super = _createSuper(Menu);

    function Menu(props) {
      _classCallCheck(this, Menu);

      return _super.call(this, props);
    }

    _createClass(Menu, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this = this;

        var sr = this.shadowRoot;
        var tank = this.ref.tank;
        var animation = this.animation = sr.animate([{}, {
          translateY: '-50%'
        }], {
          duration: 1200,
          fill: 'forwards'
        });
        var tankAnimation; // 上移结束显示选择tank

        animation.on('finish', function () {
          _this.animation = null;
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
          _this.updateStyle({
            visibility: 'hidden'
          });

          sr.clearAnimate();
          tankAnimation.pause();
        });
      }
    }, {
      key: "show",
      value: function show() {
        this.updateStyle({
          visibility: 'visible'
        });
        this.componentDidMount();
      }
    }, {
      key: "fastShow",
      value: function fastShow() {
        if (this.animation) {
          this.animation.finish();
          this.animation = null;
        }
      }
    }, {
      key: "altPlayerNum",
      value: function altPlayerNum() {
        var n = eventBus.playerNum = eventBus.playerNum === 2 ? 1 : 2;

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
              eventBus.gameState = eventBus.WILL_GAME;
              eventBus.emit(eventBus.WILL_GAME); // 等待1s

              setTimeout(function () {
                // 隐藏主tank菜单和局数，显示游戏主场景
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

  var GameOver = /*#__PURE__*/function (_karas$Component) {
    _inherits(GameOver, _karas$Component);

    var _super = _createSuper(GameOver);

    function GameOver(prpos) {
      var _this;

      _classCallCheck(this, GameOver);

      _this = _super.call(this, prpos);
      _this.state = {
        show: false
      };
      return _this;
    }

    _createClass(GameOver, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        eventBus.on([eventBus.HIT_HOME, eventBus.PLAYER_NO_LIFE], function () {
          eventBus.gameState = eventBus.GAME_OVER;
          eventBus.emit(eventBus.GAME_OVER);

          _this2.setState({
            show: true
          }, function () {
            var a = _this2.shadowRoot.animate([{}, {
              translateY: '0%'
            }], {
              duration: 2000,
              fill: 'forwards'
            });

            a.on('finish', function () {
              eventBus.gameState = eventBus.GAME_OVER_WAIT;
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
            display: this.state.show ? 'block' : 'none',
            width: '100%',
            height: '100%',
            translateY: '100%'
          }
        }, karas$1.createElement("span", {
          ref: "text",
          style: {
            position: 'absolute',
            left: '50%',
            top: '40%',
            width: 62,
            height: 30,
            background: 'url(tank.png) no-repeat -138 -137',
            translateX: '-50%',
            translateY: '-50%'
          }
        }));
      }
    }]);

    return GameOver;
  }(karas$1.Component);

  var Box = /*#__PURE__*/function (_karas$Component) {
    _inherits(Box, _karas$Component);

    var _super = _createSuper(Box);

    function Box(props) {
      var _this;

      _classCallCheck(this, Box);

      _this = _super.call(this, props);
      _this.state = {
        show: false,
        list: [],
        home: [],
        fail: false
      };
      return _this;
    }

    _createClass(Box, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // 开始游戏
        eventBus.on(eventBus.WILL_GAME, function () {
          _this2.setState({
            show: true,
            list: data.current.box,
            home: data.current.home,
            fail: false
          });
        });
        eventBus.on(eventBus.HIT_HOME, function () {
          _this2.state.home.forEach(function (item) {
            return item.push(true);
          });

          _this2.setState({
            fail: true
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

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
            visibility: this.state.show ? 'visible' : 'hidden'
          }
        }, list.length ? karas$1.createElement("span", {
          style: {
            position: 'absolute',
            left: list[0] * 16,
            top: list[1] * 16,
            width: (list[2] - list[0]) * 16,
            height: (list[3] - list[1]) * 16,
            background: '#111'
          }
        }) : null, home.map(function (item) {
          var p = _this3.state.fail ? '-680px -170px' : '-646px -170px';
          return karas$1.createElement("span", {
            style: {
              position: 'absolute',
              left: item[0] * 16,
              top: item[1] * 16,
              width: 32,
              height: 32,
              background: "url(tank.png) no-repeat ".concat(p)
            }
          });
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
        show: false,
        list: []
      };
      return _this;
    }

    _createClass(Brick, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // 开始游戏
        eventBus.on(eventBus.WILL_GAME, function () {
          _this2.setState({
            show: true,
            list: data.current.brick
          });
        });
        eventBus.on(eventBus.HIT_BRICK, function (id, x, y, data) {
          var hash = {};
          data.forEach(function (item) {
            hash[item[0]] = hash[item[0]] || [];
            hash[item[0]].push(item[1]);
          });

          for (var list = _this2.state.list, i = 0, len = list.length; i < len; i++) {
            var item = list[i];

            if (!item[2] && !item[3] && hash.hasOwnProperty(item[0]) && hash[item[0]].indexOf(item[1]) > -1) {
              item[2] = 1;

              _this2.ref[item[0] + ',' + item[1]].updateStyle({
                display: 'none'
              });
            }
          }
        });
        eventBus.on(eventBus.GET, function (type) {
          if (type === 'wall') {
            var home = data.current.home;
            var len = home.length;
            var list = [];

            _this2.state.list.forEach(function (item) {
              var _item = _slicedToArray(item, 2),
                  x = _item[0],
                  y = _item[1];

              for (var i = 0; i < len; i++) {
                var _home$i = _slicedToArray(home[i], 2),
                    x1 = _home$i[0],
                    y1 = _home$i[1];

                var x2 = x1 + 1;
                var y2 = y1 + 1;

                if (Math.abs(x - x1) + Math.abs(y - y1) <= 2 || Math.abs(x - x1) + Math.abs(y - y2) <= 2 || Math.abs(x - x2) + Math.abs(y - y1) <= 2 || Math.abs(x - x2) + Math.abs(y - y2) <= 2) {
                  item[3] = 1;
                  var target = _this2.ref[x + ',' + y];
                  target.updateStyle({
                    display: 'block',
                    backgroundPosition: '0 -204px'
                  });
                  list.push({
                    item: item,
                    target: target
                  });
                }
              }
            });

            if (list.length) {
              _this2.timeout = setTimeout(function () {
                var a;
                list.forEach(function (o) {
                  var target = o.target;
                  a = target.animate([{}, {
                    backgroundPosition: '-612px -170px'
                  }], {
                    duration: 200,
                    iterations: 16,
                    easing: 'steps(1)',
                    direction: 'alternate'
                  });
                });
                a.on('finish', function () {
                  list.forEach(function (o) {
                    var item = o.item,
                        target = o.target;
                    item[2] = 0;
                    item[3] = 0;
                    target.clearAnimate();
                    target.updateStyle({
                      display: item[2] ? 'none' : 'block',
                      backgroundPosition: '-612px -170px'
                    });
                  });
                });
              }, 10000);
            }
          }
        });
        eventBus.on([eventBus.GAME_OVER, eventBus.GAME_NEXT], function () {
          clearTimeout(_this2.timeout);
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
            visibility: this.state.show ? 'visible' : 'hidden'
          }
        }, this.state.list.map(function (item) {
          var _item2 = _slicedToArray(item, 2),
              x = _item2[0],
              y = _item2[1];

          var left = x * 16;
          var top = y * 16;
          return karas$1.createElement("span", {
            ref: x + ',' + y,
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
        show: false,
        list: []
      };
      return _this;
    }

    _createClass(Brick, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // 开始游戏
        eventBus.on(eventBus.WILL_GAME, function () {
          _this2.setState({
            show: true,
            list: data.current.iron
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
            height: '100%',
            visibility: this.state.show ? 'visible' : 'hidden'
          }
        }, this.state.list.map(function (item) {
          var _item = _slicedToArray(item, 2),
              x = _item[0],
              y = _item[1];

          var left = x * 16;
          var top = y * 16;
          return karas$1.createElement("span", {
            ref: x + ',' + y,
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
        enemy: [],
        player: []
      };
      return _this;
    }

    _createClass(Fade, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // 开始游戏
        eventBus.on(eventBus.WILL_GAME, function () {
          eventBus.activeEnemyNum = 0;

          _this2.setState({
            enemy: data.current.enemy,
            player: data.current.player
          });
        });
        eventBus.on(eventBus.GAMEING, function () {
          _this2.show('player', 0);

          if (eventBus.playerNum === 2) {
            _this2.show('player', 1);
          }

          var count = 0;
          var interval = _this2.interval = setInterval(function () {
            if (eventBus.gameState !== eventBus.GAMEING) {
              clearInterval(interval);
              return;
            } // 限制数量


            if (eventBus.activeEnemyNum >= 4) {
              return;
            }

            eventBus.activeEnemyNum++;
            var id = count++;
            setTimeout(function () {
              eventBus.emit(eventBus.ADD_ENEMY, id);
            }, 1500);

            _this2.show('enemy', id % 3);

            if (count >= data.current.enemy.length) {
              clearInterval(interval);
            }
          }, 1000);
        });
        eventBus.on(eventBus.PLAY_REBONE, function (i) {
          _this2.show('player', i);
        });
        eventBus.on([eventBus.GAME_OVER, eventBus.GAME_NEXT], function () {
          clearInterval(_this2.interval);
        });
      }
    }, {
      key: "show",
      value: function show(name, i) {
        var node = this.ref[name + i];
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
      key: "render",
      value: function render() {
        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            opacity: 0.9
          }
        }, this.state.enemy.map(function (item, i) {
          return karas$1.createElement("span", {
            ref: 'enemy' + i,
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

  function checkBox(tx1, ty1, direction, box) {
    var tx2 = tx1 + 32;
    var ty2 = ty1 + 32;

    var _box = _slicedToArray(box, 4),
        x1 = _box[0],
        y1 = _box[1],
        x2 = _box[2],
        y2 = _box[3];

    x1 *= 16;
    y1 *= 16;
    x2 *= 16;
    y2 *= 16;

    if (direction === 0) {
      if (y1 === ty1) {
        return true;
      }
    } else if (direction === 1) {
      if (x2 === tx2) {
        return true;
      }
    } else if (direction === 2) {
      if (y2 === ty2) {
        return true;
      }
    } else if (direction === 3) {
      if (x1 === tx1) {
        return true;
      }
    }
  }

  function checkMove(tx1, ty1, direction, list) {
    var tx2 = tx1 + 32;
    var ty2 = ty1 + 32;

    for (var i = 0, len = list.length; i < len; i++) {
      var _list$i = _slicedToArray(list[i], 3),
          x1 = _list$i[0],
          y1 = _list$i[1],
          disappear = _list$i[2];

      if (disappear) {
        continue;
      }

      x1 *= 16;
      y1 *= 16;
      var x2 = x1 + 16;
      var y2 = y1 + 16;

      if (direction === 0) {
        if (x1 < tx2 && x2 > tx1 && ty1 - y2 === 0) {
          return true;
        }
      } else if (direction === 1) {
        if (y1 < ty2 && y2 > ty1 && tx2 - x1 === 0) {
          return true;
        }
      } else if (direction === 2) {
        if (x1 < tx2 && x2 > tx1 && ty2 - y1 === 0) {
          return true;
        }
      } else if (direction === 3) {
        if (y1 < ty2 && y2 > ty1 && tx1 - x2 === 0) {
          return true;
        }
      }
    }
  }

  function checkEnemy(tx1, ty1, direction, index, list) {
    var tx2 = tx1 + 32;
    var ty2 = ty1 + 32;

    for (var i = 0, len = list.length; i < len; i++) {
      // 自己
      if (i === index) {
        continue;
      }

      var item = list[i]; // 死tank

      if (item[3] === 2) {
        continue;
      }

      var x1 = item[5];
      var y1 = item[6];
      var x2 = x1 + 32;
      var y2 = y1 + 32;

      if (direction === 0) {
        if (x1 < tx2 && x2 > tx1 && ty1 <= y2 && ty1 >= y1) {
          return true;
        }
      } else if (direction === 1) {
        if (y1 < ty2 && y2 > ty1 && tx2 >= x1 && tx2 <= x2) {
          return true;
        }
      } else if (direction === 2) {
        if (x1 < tx2 && x2 > tx1 && ty2 >= y1 && ty2 <= y2) {
          return true;
        }
      } else if (direction === 3) {
        if (y1 < ty2 && y2 > ty1 && tx1 <= x2 && tx1 >= x1) {
          return true;
        }
      }
    }
  }

  function checkUs(tx1, ty1, direction, index, list) {
    var tx2 = tx1 + 32;
    var ty2 = ty1 + 32;

    for (var i = 0, len = list.length; i < len; i++) {
      var item = list[i]; // 自己

      if (index === i) {
        continue;
      } // 没命


      if (item[2] === 0) {
        continue;
      }

      var x1 = item[5];
      var y1 = item[6];
      var x2 = x1 + 32;
      var y2 = y1 + 32;

      if (direction === 0) {
        if (x1 < tx2 && x2 > tx1 && ty1 <= y2 && ty1 >= y1) {
          return true;
        }
      } else if (direction === 1) {
        if (y1 < ty2 && y2 > ty1 && tx2 >= x1 && tx2 <= x2) {
          return true;
        }
      } else if (direction === 2) {
        if (x1 < tx2 && x2 > tx1 && ty2 >= y1 && ty2 <= y2) {
          return true;
        }
      } else if (direction === 3) {
        if (y1 < ty2 && y2 > ty1 && tx1 <= x2 && tx1 >= x1) {
          return true;
        }
      }
    }
  }

  function checkHome(tx1, ty1, direction, list) {
    var tx2 = tx1 + 32;
    var ty2 = ty1 + 32;

    for (var i = 0, len = list.length; i < len; i++) {
      var item = list[i];
      var x1 = item[0] * 16;
      var y1 = item[1] * 16;
      var x2 = x1 + 32;
      var y2 = y1 + 32;

      if (direction === 0) {
        if (x1 < tx2 && x2 > tx1 && ty1 - y2 === 0) {
          return true;
        }
      } else if (direction === 1) {
        if (y1 < ty2 && y2 > ty1 && tx2 - x1 === 0) {
          return true;
        }
      } else if (direction === 2) {
        if (x1 < tx2 && x2 > tx1 && ty2 - y1 === 0) {
          return true;
        }
      } else if (direction === 3) {
        if (y1 < ty2 && y2 > ty1 && tx1 - x2 === 0) {
          return true;
        }
      }
    }
  }

  function checkItem(tx1, ty1, direction) {
    var list = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var tx2 = tx1 + 32;
    var ty2 = ty1 + 32;

    for (var i = 0, len = list.length; i < len; i++) {
      var item = list[i];
      var x1 = item[1];
      var y1 = item[2];
      var x2 = x1 + 32;
      var y2 = y1 + 32;

      if (direction === 0) {
        if (x1 < tx2 && x2 > tx1 && ty1 <= y2 && ty1 >= y1) {
          return item;
        }
      } else if (direction === 1) {
        if (y1 < ty2 && y2 > ty1 && tx2 >= x1 && tx2 <= x2) {
          return item;
        }
      } else if (direction === 2) {
        if (x1 < tx2 && x2 > tx1 && ty2 >= y1 && ty2 <= y2) {
          return item;
        }
      } else if (direction === 3) {
        if (y1 < ty2 && y2 > ty1 && tx1 <= x2 && tx1 >= x1) {
          return item;
        }
      }
    }
  }

  var util = {
    checkBox: checkBox,
    checkMove: checkMove,
    checkEnemy: checkEnemy,
    checkUs: checkUs,
    checkHome: checkHome,
    checkItem: checkItem
  };

  var MOVE_PX = 2;
  var PROTECT_COUNT = 32;

  var Player = /*#__PURE__*/function (_karas$Component) {
    _inherits(Player, _karas$Component);

    var _super = _createSuper(Player);

    function Player(props) {
      var _this;

      _classCallCheck(this, Player);

      _this = _super.call(this, props);
      _this.state = {
        show: false,
        list: [] // 0,1方块位置x,y；2命数，3状态012无保定，4type,5,6坐标位置x,y

      };
      return _this;
    }

    _createClass(Player, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // 开始游戏
        eventBus.on(eventBus.GAMEING, function () {
          var list = data.current.player;

          _this2.setState({
            show: true,
            list: list
          }, function () {
            _this2.state.list.forEach(function (item, i) {
              var player = _this2.ref['player' + i];
              var shield = _this2.ref['shield' + i];
              player.clearAnimate();
              item[3] = 1;
              var fadeIn = player.animate([{
                opacity: 0.85
              }, {
                opacity: 0.7
              }], {
                duration: 100,
                iterations: PROTECT_COUNT,
                direction: 'alternate',
                easing: 'steps(2)'
              });
              fadeIn.on('finish', function () {
                player.removeAnimate(fadeIn);
                item[3] = 0;
              });
              shield.clearAnimate();
              shield.animate([{
                backgroundPosition: '-442 -238'
              }, {
                backgroundPosition: '-510 -238'
              }], {
                duration: 100,
                iterations: PROTECT_COUNT,
                direction: 'alternate',
                easing: 'steps(2)'
              });
            });
          });
        });
        eventBus.on(eventBus.HIT_US, function (id, x, y, us) {
          us.forEach(function (item) {
            var i;

            if (item === _this2.state.list[0]) {
              i = 0;
            } else if (item === _this2.state.list[1]) {
              i = 1;
            }

            if (i !== undefined) {
              var _item = _this2.state.list[i];
              var player = _this2.ref['player' + i];
              var tank = _this2.ref['tank' + i]; // 保护状态

              if (_item[3] === 1) {
                return;
              }

              eventBus.emit(eventBus.BOOM, _item[5] + 16, _item[6] + 16);
              var life = _item[2]--;

              if (life <= 0) {
                player.updateStyle({
                  visibility: 'hidden'
                });
                return;
              }

              _this2['playerCurrentD' + i] = null;
              tank.updateStyle({
                backgroundPositionX: 0
              });
              eventBus.emit(eventBus.PLAY_REBONE, i);
              var shield = _this2.ref['shield' + i];
              _item[3] = 1;
              var tx = _item[5] = _item[0] * 16;
              var ty = _item[6] = _item[1] * 16;
              player.updateStyle({
                translateX: tx,
                translateY: ty
              });
              player.clearAnimate();
              var fadeIn = player.animate([{
                opacity: 0.85
              }, {
                opacity: 0.7
              }], {
                duration: 100,
                iterations: 32,
                direction: 'alternate',
                easing: 'steps(2)'
              });
              fadeIn.on('finish', function () {
                player.removeAnimate(fadeIn);
                _item[3] = 0;
              });
              shield.clearAnimate();
              shield.animate([{
                backgroundPosition: '-442 -238'
              }, {
                backgroundPosition: '-510 -238'
              }], {
                duration: 100,
                iterations: 32,
                direction: 'alternate',
                easing: 'steps(2)'
              });
            }
          });
          var n = 0;
          data.current.player.forEach(function (item) {
            n += item[2];
          });

          if (n < 0) {
            eventBus.gameState = eventBus.GAME_OVER;
            eventBus.emit(eventBus.PLAYER_NO_LIFE);
          }
        });
        eventBus.on(eventBus.HIT_US_BY_US, function (id, x, y, us) {
          us.forEach(function (item) {
            var i;

            if (item === _this2.state.list[0]) {
              i = 0;
            } else if (item === _this2.state.list[1]) {
              i = 1;
            }

            if (i !== undefined) {
              var _item2 = _this2.state.list[i];
              var player = _this2.ref['player' + i];

              if (_item2[3] === 1) {
                return;
              } // 2以上为定住，倒计时数字


              if (_item2[3] > 1) {
                _item2[3] = 200;
                return;
              }

              _item2[3] = 200;

              var cb = function cb() {
                // 销毁结束
                if (player.isDestroyed) {
                  karas$1.animate.frame.offFrame(cb);
                  return;
                }

                _item2[3]--;
                var n = (_item2[3] - 2) % 16;

                if (n < 8) {
                  player.updateStyle({
                    visibility: 'visible'
                  });
                } else {
                  player.updateStyle({
                    visibility: 'hidden'
                  });
                }

                if (_item2[3] === 2) {
                  _item2[3] = 0;
                  karas$1.animate.frame.offFrame(cb);
                }
              };

              karas$1.animate.frame.onFrame(cb);
            }
          });
        });
      }
    }, {
      key: "move",
      value: function move(index, direction) {
        var _this3 = this;

        var player = this.ref['player' + index];
        var tank = this.ref['tank' + index];

        if (!tank) {
          return;
        } // 播放坦克移动本身帧动画


        var currentD = this['playerCurrentD' + index];

        if (currentD !== direction) {
          this['playerCurrentD' + index] = direction;
          tank.clearAnimate();
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

          tank.animate(frame, {
            duration: 100,
            iterations: Infinity,
            easing: 'steps(1)',
            direction: 'alternate'
          });
        } else {
          return;
        }

        this['playerLastD' + index] = direction;
        var cb = this['ma' + index];
        karas$1.animate.frame.offFrame(cb); // 检查是否被挡住

        var item = this.state.list[index]; // 坦克坐标移动，每2帧移动1次2px，便于控制

        var frameJump = 0;

        cb = this['ma' + index] = function () {
          if (frameJump++ < 1) {
            return;
          }

          frameJump = 0;

          if (util.checkBox(item[5], item[6], direction, data.current.box)) {
            return;
          }

          if (util.checkMove(item[5], item[6], direction, data.current.brick)) {
            return;
          }

          if (util.checkMove(item[5], item[6], direction, data.current.iron)) {
            return;
          }

          if (util.checkEnemy(item[5], item[6], direction, -1, data.current.enemy)) {
            return;
          }

          if (util.checkUs(item[5], item[6], direction, index, data.current.player)) {
            return;
          }

          if (util.checkHome(item[5], item[6], direction, data.current.home)) {
            return;
          }

          var items = util.checkItem(item[5], item[6], direction, data.current.item);

          if (items) {
            switch (items[0]) {
              case 'life':
                _this3.state.list[index][2]++;
                eventBus.emit(eventBus.LIFE, items[0]);
                break;

              case 'pause':
                eventBus.emit(eventBus.GET, items[0]);
                break;

              case 'protect':
                _this3.state.list[index][3] = 1;
                var _player = _this3.ref['player' + index];
                var shield = _this3.ref['shield' + index];

                _player.clearAnimate();

                var fadeIn = _player.animate([{
                  opacity: 0.85
                }, {
                  opacity: 0.7
                }], {
                  duration: 100,
                  iterations: PROTECT_COUNT * 4,
                  direction: 'alternate',
                  easing: 'steps(2)'
                });

                fadeIn.on('finish', function () {
                  _player.removeAnimate(fadeIn);

                  item[3] = 0;
                });
                shield.clearAnimate();
                shield.animate([{
                  backgroundPosition: '-442 -238'
                }, {
                  backgroundPosition: '-510 -238'
                }], {
                  duration: 100,
                  iterations: PROTECT_COUNT * 4,
                  direction: 'alternate',
                  easing: 'steps(2)'
                });
                eventBus.emit(eventBus.GET, items[0]);
                break;

              case 'boom':
                eventBus.emit(eventBus.GET, items[0]);
                break;

              case 'wall':
                eventBus.emit(eventBus.GET, items[0]);
                break;
            }
          }

          if (direction === 0) {
            item[6] -= MOVE_PX;
            player.updateStyle({
              translateY: item[6]
            });
          } else if (direction === 1) {
            item[5] += MOVE_PX;
            player.updateStyle({
              translateX: item[5]
            });
          } else if (direction === 2) {
            item[6] += MOVE_PX;
            player.updateStyle({
              translateY: item[6]
            });
          } else if (direction === 3) {
            item[5] -= MOVE_PX;
            player.updateStyle({
              translateX: item[5]
            });
          }
        };

        karas$1.animate.frame.onFrame(cb);
        eventBus.on([eventBus.GAME_OVER, eventBus.GAME_NEXT], function () {
          karas$1.animate.frame.offFrame(cb);
        });
      }
    }, {
      key: "stop",
      value: function stop(index) {
        var player = this.ref['player' + index];
        var tank = this.ref['tank' + index];
        var item = this.state.list[index];
        tank.animationList.length && tank.animationList[0].pause();
        var cb = this['ma' + index];
        karas$1.animate.frame.offFrame(cb);
        var currentD = this['playerCurrentD' + index]; // 停止朝向，同时为了便于控制，设置tank停止位置为4的倍数，容易转向

        var x = item[5];
        var y = item[6];

        if (currentD === 0) {
          tank.updateStyle({
            backgroundPositionX: 0
          });

          if (y % 4 !== 0) {
            item[6] -= MOVE_PX;
            player.updateStyle({
              translateY: item[6]
            });
          }
        } else if (currentD === 1) {
          tank.updateStyle({
            backgroundPositionX: -68
          });

          if (x % 4 !== 0) {
            item[5] += MOVE_PX;
            player.updateStyle({
              translateX: item[5]
            });
          }
        } else if (currentD === 2) {
          tank.updateStyle({
            backgroundPositionX: -136
          });

          if (y % 4 !== 0) {
            item[6] += MOVE_PX;
            player.updateStyle({
              translateY: item[6]
            });
          }
        } else if (currentD === 3) {
          tank.updateStyle({
            backgroundPositionX: -204
          });

          if (x % 4 !== 0) {
            item[5] -= MOVE_PX;
            player.updateStyle({
              translateX: item[5]
            });
          }
        }

        this['playerCurrentD' + index] = null;
      }
    }, {
      key: "getPosition",
      value: function getPosition(index) {
        return this.state.list[index].slice(5, 7);
      }
    }, {
      key: "getDirection",
      value: function getDirection(index) {
        return this['playerLastD' + index] || 0;
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
            visibility: this.state.show ? 'visible' : 'hidden'
          }
        }, this.state.list.map(function (item, i) {
          var py = -272 - i * 34;
          var tx = item[5] = item[0] * 16;
          var ty = item[6] = item[1] * 16;
          return karas$1.createElement("div", {
            ref: 'player' + i,
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              width: 32,
              height: 32,
              translateX: tx,
              translateY: ty
            }
          }, karas$1.createElement("span", {
            ref: 'tank' + i,
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              background: "url(tank.png) no-repeat 0 ".concat(py)
            }
          }), karas$1.createElement("span", {
            ref: 'shield' + i,
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

  var TURN_COUNT = {
    0: 32,
    1: 16,
    2: 36,
    3: 48,
    4: 48,
    5: 48
  };
  var MOVE_PX$1 = {
    0: 2,
    1: 4,
    2: 2,
    3: 1,
    4: 1,
    5: 1
  };
  var ENEMY_FIRE_COUNT = 5;

  function getBgP(type, direction, red, life) {
    var p = '-136 -68';

    if (red) {
      switch (type) {
        case 0:
          if (direction === 0) {
            p = '0 -102';
          } else if (direction === 1) {
            p = '-68 -102';
          } else if (direction === 2) {
            p = '-136 -102';
          } else if (direction === 3) {
            p = '-204 -102';
          }

          break;

        case 1:
          if (direction === 0) {
            p = '-272 -102';
          } else if (direction === 1) {
            p = '-340 -102';
          } else if (direction === 2) {
            p = '-408 -102';
          } else if (direction === 3) {
            p = '-476 -102';
          }

          break;

        case 2:
          if (direction === 0) {
            p = '-544 -102';
          } else if (direction === 1) {
            p = '-612 -102';
          } else if (direction === 2) {
            p = '-680 -102';
          } else if (direction === 3) {
            p = '-748 -102';
          }

          break;

        case 3:
        case 4:
        case 5:
          if (direction === 0) {
            p = '-816 -102';
          } else if (direction === 1) {
            p = '-884 -102';
          } else if (direction === 2) {
            p = '-952 -102';
          } else if (direction === 3) {
            p = '-1020 -102';
          }

          break;
      }
    } else {
      switch (type) {
        case 0:
          if (direction === 0) {
            p = '0 -68';
          } else if (direction === 1) {
            p = '-68 -68';
          } else if (direction === 2) {
            p = '-136 -68';
          } else if (direction === 3) {
            p = '-204 -68';
          }

          break;

        case 1:
          if (direction === 0) {
            p = '-272 -68';
          } else if (direction === 1) {
            p = '-340 -68';
          } else if (direction === 2) {
            p = '-408 -68';
          } else if (direction === 3) {
            p = '-476 -68';
          }

          break;

        case 2:
          if (direction === 0) {
            p = '-544 -68';
          } else if (direction === 1) {
            p = '-612 -68';
          } else if (direction === 2) {
            p = '-680 -68';
          } else if (direction === 3) {
            p = '-748 -68';
          }

          break;

        case 3:
          if (direction === 0) {
            p = '-816 -68';
          } else if (direction === 1) {
            p = '-884 -68';
          } else if (direction === 2) {
            p = '-952 -68';
          } else if (direction === 3) {
            p = '-1020 -68';
          }

          break;

        case 4:
          if (life === 0) {
            return getBgP(3, direction, 0, 0);
          }

          if (direction === 0) {
            p = '-816 0';
          } else if (direction === 1) {
            p = '-884 0';
          } else if (direction === 2) {
            p = '-952 0';
          } else if (direction === 3) {
            p = '-1020 0';
          }

          break;

        case 5:
          if (life === 0) {
            return getBgP(3, direction, 0, 0);
          }

          if (life === 1) {
            return getBgP(4, direction, 0, 1);
          }

          if (direction === 0) {
            p = '-816 -34';
          } else if (direction === 1) {
            p = '-884 -34';
          } else if (direction === 2) {
            p = '-952 -34';
          } else if (direction === 3) {
            p = '-1020 -34';
          }

          break;
      }
    }

    return p;
  }

  function getFrame(type, direction, life) {
    var p = getBgP(type, direction, 0, life);
    var p2 = p.split(' ').map(function (i) {
      return parseInt(i);
    });
    p2[0] -= 34;
    return [{
      backgroundPosition: p
    }, {
      backgroundPosition: p2.join(' ')
    }];
  }

  var Enemy = /*#__PURE__*/function (_karas$Component) {
    _inherits(Enemy, _karas$Component);

    var _super = _createSuper(Enemy);

    function Enemy(props) {
      var _this;

      _classCallCheck(this, Enemy);

      _this = _super.call(this, props);
      _this.state = {
        show: false,
        list: [] // 0,1方块位置x,y；2类型；3状态012新老死；4方向；5,6坐标位置x,y；7停止计时；8射击计时；9红坦克；10血

      };
      return _this;
    }

    _createClass(Enemy, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // 开始游戏
        eventBus.on(eventBus.GAMEING, function () {
          _this2.setState({
            show: true
          }); // 坦克坐标移动


          var frameJump = 0;

          var cb = _this2.cb = function () {
            if (frameJump++ < 1) {
              return;
            }

            frameJump = 0;

            _this2.state.list.forEach(function (item, i) {
              // 暂停道具
              if (data.current.enemyPause) {
                return;
              }

              var _item = _slicedToArray(item, 7),
                  x = _item[0],
                  y = _item[1],
                  type = _item[2],
                  state = _item[3],
                  direction = _item[4],
                  px = _item[5],
                  py = _item[6];

              var red = item[9];
              var life = item[10]; // 防止死tank

              if (state < 2) {
                var tank = _this2.ref['tank' + i];
                var movePx = MOVE_PX$1[type] || 1; // 积累一定随机时间后开火

                var fire = --item[8];

                if (fire <= 0) {
                  item[8] = ENEMY_FIRE_COUNT + Math.floor(Math.random() * ENEMY_FIRE_COUNT);
                  eventBus.emit(eventBus.ENEMY_FIRE, i, [px, py], direction);
                } // 检测移动，积累count到一定后没有一定随机更换方向


                if (util.checkBox(px, py, direction, data.current.box) || util.checkMove(px, py, direction, data.current.brick) || util.checkMove(px, py, direction, data.current.iron) // || util.checkEnemy(px, py, direction, i, data.current.enemy)
                || util.checkUs(px, py, direction, -1, data.current.player) || util.checkHome(px, py, direction, data.current.home)) {
                  // tank.clearAnimate();
                  var count = item[7]++;

                  if (count >= (TURN_COUNT[type] || 1)) {
                    item[7] = 0;

                    while (true) {
                      var list = [0, 1, 2, 3];

                      var _i = Math.floor(Math.random() * list.length);

                      var nd = item[4] = list[_i];

                      if (nd !== direction) {
                        direction = item[4] = nd;
                        break;
                      }
                    }

                    var p = getBgP(type, direction, red, life);
                    tank.updateStyle({
                      backgroundPosition: p
                    });
                    tank.clearAnimate();

                    if (red) {
                      var p2 = getBgP(type, direction, 1, life);
                      tank.children[0].updateStyle({
                        backgroundPosition: p2
                      });
                    }

                    var frame = getFrame(type, direction, life);
                    tank.animate(frame, {
                      duration: 100,
                      iterations: Infinity,
                      easing: 'steps(1)',
                      direction: 'alternate'
                    });
                  }

                  return;
                }

                if (direction === 0) {
                  item[6] -= movePx;
                  tank.updateStyle({
                    translateY: item[6]
                  });
                } else if (direction === 1) {
                  item[5] += movePx;
                  tank.updateStyle({
                    translateX: item[5]
                  });
                } else if (direction === 2) {
                  item[6] += movePx;
                  tank.updateStyle({
                    translateY: item[6]
                  });
                } else if (direction === 3) {
                  item[5] -= movePx;
                  tank.updateStyle({
                    translateX: item[5]
                  });
                }
              }
            });
          };

          karas$1.animate.frame.onFrame(cb);
        });
        eventBus.on(eventBus.ADD_ENEMY, function (id) {
          var list = _this2.state.list;
          var item = data.current.enemy[id];
          list.push(item);

          _this2.setState({
            list: list
          }, function () {
            eventBus.emit(eventBus.ADDED_ENEMY);
            var tank = _this2.ref['tank' + id]; // 红闪

            if (item[9]) {
              tank.children[0].animate([{}, {
                visibility: 'visible'
              }], {
                duration: 80,
                iterations: Infinity,
                direction: 'alternate'
              });
            } // 移动


            var frame = getFrame(item[2], item[4], item[10]);
            tank.animate(frame, {
              duration: 100,
              iterations: Infinity,
              easing: 'steps(1)',
              direction: 'alternate'
            });
          });
        });
        eventBus.on(eventBus.HIT_ENEMY, function (id, x, y, data) {
          for (var list = _this2.state.list, i = 0, len = list.length; i < len; i++) {
            var item = list[i];

            for (var j = 0, len2 = data.length; j < len2; j++) {
              if (item === data[j]) {
                var tank = _this2.ref['tank' + i]; // 红先消失

                if (item[9]) {
                  item[9] = 0;
                  tank.children[0].clearAnimate();
                  tank.children[0].updateStyle({
                    display: 'none'
                  });
                } // 厚tank减皮
                else if (item[10]--) {
                    tank.clearAnimate();
                    var frame = getFrame(item[2], item[4], item[10]);
                    tank.animate(frame, {
                      duration: 100,
                      iterations: Infinity,
                      easing: 'steps(1)',
                      direction: 'alternate'
                    });
                  } // 其它挂
                  else {
                      item[3] = 2;

                      _this2.setState({
                        list: list
                      });

                      eventBus.emit(eventBus.BOOM, item[5] + 16, item[6] + 16);
                    }
              }
            }
          }
        });
        eventBus.on(eventBus.GET, function (type) {
          if (type === 'boom') {
            var list = _this2.state.list;
            list.forEach(function (item, i) {
              var state = item[3]; // 防止死tank

              if (state < 2) {
                item[9] = 0;
                item[10] = 0;
                item[3] = 2;
                var tank = _this2.ref['tank' + i];
                tank.clearAnimate();

                _this2.setState({
                  list: list
                });

                eventBus.emit(eventBus.BOOM, item[5] + 16, item[6] + 16);
              }
            });
          }
        });
        eventBus.on(eventBus.BEFORE_MENU, function () {
          karas$1.animate.frame.offFrame(_this2.cb);
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
            visibility: this.state.show ? 'visible' : 'hidden'
          }
        }, this.state.list.map(function (item, i) {
          var _item2 = _slicedToArray(item, 7),
              tx = _item2[0],
              ty = _item2[1],
              type = _item2[2],
              state = _item2[3],
              direction = _item2[4],
              px = _item2[5],
              py = _item2[6]; // 死tank


          if (state === 2) {
            return null;
          } // 新出生的tank随机选个可用方向右下左


          if (direction === undefined) {
            var list = [1, 2, 3];

            var _i2 = Math.floor(Math.random() * list.length);

            direction = list[_i2];
          } // 新出生的tank


          if (state === 0) {
            item[3] = 1; // 变老tank

            item[4] = direction;
            item[5] = px = tx * 16;
            item[6] = py = ty * 16;
            item[7] = 0; // 计时初始化

            item[8] = Math.floor(Math.random() * ENEMY_FIRE_COUNT);
            item[9] = i && i % 5 === 0 ? 1 : 0; // 每5出红

            item[10] = item[2] > 3 ? item[2] - 3 : 0; // 3厚tank，4,5加厚tank
          }

          var life = item[10];
          var red = item[9];
          var p = getBgP(type, direction, red, life);

          if (red) {
            var p2 = getBgP(type, direction, 1, life);
            return karas$1.createElement("div", {
              ref: 'tank' + i,
              key: i,
              style: {
                position: 'absolute',
                left: 0,
                top: 0,
                width: 32,
                height: 32,
                translateX: px,
                translateY: py,
                background: "url(tank.png) no-repeat ".concat(p)
              }
            }, karas$1.createElement("span", {
              style: {
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                background: "url(tank.png) no-repeat ".concat(p2),
                visibility: 'hidden'
              }
            }));
          }

          return karas$1.createElement("div", {
            ref: 'tank' + i,
            key: i,
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              width: 32,
              height: 32,
              translateX: px,
              translateY: py,
              background: "url(tank.png) no-repeat ".concat(p)
            }
          });
        }));
      }
    }]);

    return Enemy;
  }(karas$1.Component);

  function checkBox$1(position, direction, dx, dy, box) {
    var _position = _slicedToArray(position, 2),
        x = _position[0],
        y = _position[1];

    x += dx;
    y += dy;

    var _box = _slicedToArray(box, 4),
        x1 = _box[0],
        y1 = _box[1],
        x2 = _box[2],
        y2 = _box[3];

    x1 *= 16;
    y1 *= 16;
    x2 *= 16;
    y2 *= 16;

    if (direction === 0) {
      if (y - 4 <= y1) {
        return true;
      }
    } else if (direction === 1) {
      if (x + 32 + 4 >= x2) {
        return true;
      }
    } else if (direction === 2) {
      if (y + 32 + 4 >= y2) {
        return true;
      }
    } else if (direction === 3) {
      if (x - 4 <= x1) {
        return true;
      }
    }
  }

  function checkHit(position, direction, dx, dy, list, _double) {
    var _position2 = _slicedToArray(position, 2),
        x = _position2[0],
        y = _position2[1];

    x += dx;
    y += dy;
    var res = [];

    for (var i = 0, len = list.length; i < len; i++) {
      var _list$i = _slicedToArray(list[i], 4),
          x0 = _list$i[0],
          y0 = _list$i[1],
          disappear = _list$i[2],
          change = _list$i[3];

      if (disappear && !change) {
        continue;
      }

      var x1 = x0 * 16;
      var y1 = y0 * 16;
      var x2 = x1 + 16 * (_double ? 2 : 1);
      var y2 = y1 + 16 * (_double ? 2 : 1);

      if (direction === 0) {
        if (y - 4 <= y2 && y + 4 >= y1 && x + 20 >= x1 && x + 12 <= x2) {
          res.push([x0, y0]);
        }
      } else if (direction === 1) {
        if (x + 36 >= x1 && x + 28 <= x2 && y + 20 >= y1 && y + 12 <= y2) {
          res.push([x0, y0]);
        }
      } else if (direction === 2) {
        if (y + 36 >= y1 && y + 28 <= y2 && x + 20 >= x1 && x + 12 <= x2) {
          res.push([x0, y0]);
        }
      } else if (direction === 3) {
        if (x - 4 <= x2 && x + 4 >= x1 && y + 20 >= y1 && y + 12 <= y2) {
          res.push([x0, y0]);
        }
      }
    }

    if (res.length) {
      return res;
    }
  }

  function checkHitEnemy(position, direction, dx, dy, list) {
    var _position3 = _slicedToArray(position, 2),
        x = _position3[0],
        y = _position3[1];

    x += dx;
    y += dy;
    var res = [];

    for (var i = 0, len = list.length; i < len; i++) {
      var item = list[i]; // 只检查老tank，防止死tank和新tank

      if (item[3] !== 1) {
        continue;
      }

      var x1 = item[5];
      var y1 = item[6];
      var x2 = x1 + 32;
      var y2 = y1 + 32;

      if (direction === 0) {
        if (y - 4 <= y2 && y + 4 >= y1 && x + 20 >= x1 && x + 12 <= x2) {
          res.push(item);
        }
      } else if (direction === 1) {
        if (x + 36 >= x1 && x + 28 <= x2 && y + 20 >= y1 && y + 12 <= y2) {
          res.push(item);
        }
      } else if (direction === 2) {
        if (y + 36 >= y1 && y + 28 <= y2 && x + 20 >= x1 && x + 12 <= x2) {
          res.push(item);
        }
      } else if (direction === 3) {
        if (x - 4 <= x2 && x + 4 >= x1 && y + 20 >= y1 && y + 12 <= y2) {
          res.push(item);
        }
      }
    }

    if (res.length) {
      return res;
    }
  }

  function checkHitUs(position, direction, dx, dy, index, list) {
    var _position4 = _slicedToArray(position, 2),
        x = _position4[0],
        y = _position4[1];

    x += dx;
    y += dy;
    var res = [];

    for (var i = 0, len = list.length; i < len; i++) {
      // 自己
      if (index === i) {
        continue;
      }

      var item = list[i]; // 防止自己没命了

      if (item[2] < 0) {
        continue;
      }

      var x1 = item[5];
      var y1 = item[6];
      var x2 = x1 + 32;
      var y2 = y1 + 32;

      if (direction === 0) {
        if (y - 4 <= y2 && y + 4 >= y1 && x + 20 >= x1 && x + 12 <= x2) {
          res.push(item);
        }
      } else if (direction === 1) {
        if (x + 36 >= x1 && x + 28 <= x2 && y + 20 >= y1 && y + 12 <= y2) {
          res.push(item);
        }
      } else if (direction === 2) {
        if (y + 36 >= y1 && y + 28 <= y2 && x + 20 >= x1 && x + 12 <= x2) {
          res.push(item);
        }
      } else if (direction === 3) {
        if (x - 4 <= x2 && x + 4 >= x1 && y + 20 >= y1 && y + 12 <= y2) {
          res.push(item);
        }
      }
    }

    if (res.length) {
      return res;
    }
  }

  function emitHit(node, id, direction, dx, dy, type, data) {
    var _node$getComputedStyl = node.getComputedStyle(),
        left = _node$getComputedStyl.left,
        top = _node$getComputedStyl.top;

    var x = left + dx;
    var y = top + dy;

    if (direction === 0) {
      x += 4;
    } else if (direction === 1) {
      x += 8;
      y += 4;
    } else if (direction === 2) {
      x += 4;
      y += 8;
    } else if (direction === 3) {
      y += 4;
    }

    eventBus.emit(type, id, x, y, data);
  }

  function removeBullet(target, id) {
    for (var i = 0, len = target.length; i < len; i++) {
      if (target[i].id === id) {
        target.splice(i, 1);
        return;
      }
    }
  }

  var uuid = 0;
  var limit = {};
  var MOVE_PX$2 = 4;

  var Bullet = /*#__PURE__*/function (_karas$Component) {
    _inherits(Bullet, _karas$Component);

    var _super = _createSuper(Bullet);

    function Bullet(props) {
      var _this;

      _classCallCheck(this, Bullet);

      _this = _super.call(this, props);
      _this.state = {
        hash: {}
      };
      return _this;
    }

    _createClass(Bullet, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        eventBus.on(eventBus.ENEMY_FIRE, function (id, position, direction) {
          var hash = _this2.state.hash;
          id += ',' + uuid++;
          var d = {
            id: id,
            position: position,
            direction: direction,
            x: 0,
            y: 0,
            enemy: true
          };
          hash[id] = d;

          _this2.setState({
            hash: hash
          }, function () {
            // 子弹每帧移动
            var frame = function frame() {
              var node = _this2.ref[id];

              if (direction === 0) {
                d.y -= MOVE_PX$2;
                node.updateStyle({
                  translateY: d.y
                });
              } else if (direction === 1) {
                d.x += MOVE_PX$2;
                node.updateStyle({
                  translateX: d.x
                });
              } else if (direction === 2) {
                d.y += MOVE_PX$2;
                node.updateStyle({
                  translateY: d.y
                });
              } else if (direction === 3) {
                d.x -= MOVE_PX$2;
                node.updateStyle({
                  translateX: d.x
                });
              } // 校验碰撞


              var box = checkBox$1(position, direction, d.x, d.y, data.current.box);

              if (box) {
                emitHit(node, id, direction, d.x, d.y, eventBus.HIT_BOX);
              }

              var brick = checkHit(position, direction, d.x, d.y, data.current.brick);

              if (brick) {
                emitHit(node, id, direction, d.x, d.y, eventBus.HIT_BRICK, brick);
              }

              var iron = checkHit(position, direction, d.x, d.y, data.current.iron);

              if (iron) {
                emitHit(node, id, direction, d.x, d.y, eventBus.HIT_IRON, iron);
              }

              var us = checkHitUs(position, direction, d.x, d.y, -1, data.current.player);

              if (us) {
                emitHit(node, id, direction, d.x, d.y, eventBus.HIT_US, us);
              }

              var home = checkHit(position, direction, d.x, d.y, data.current.home, true);

              if (home) {
                emitHit(node, id, direction, d.x, d.y, eventBus.HIT_HOME, home);
              } // 子弹消失


              if (box || brick || iron || us || home) {
                karas$1.animate.frame.offFrame(frame);
                delete hash[id];

                _this2.setState({
                  hash: hash
                });
              }
            };

            karas$1.animate.frame.onFrame(frame);
          });
        });
      }
    }, {
      key: "move",
      value: function move(index, position, direction) {
        var _this3 = this;

        // 防止子弹过多过于连续先检查index的player限制
        var target = limit[index] = limit[index] || [];
        var length = target.length;
        var now = Date.now();

        if (length) {
          var last = target[length - 1]; // 300ms限制

          if (now - last.time < 300) {
            return;
          } // 2发限制


          if (length >= 2) {
            return;
          }
        }

        eventBus.emit(eventBus.SHOOT); // 每个子弹相对于tank当时位置+方向生成唯一id

        var id = uuid++;
        target.push({
          id: id,
          time: now
        });
        var hash = this.state.hash;
        var d = {
          index: index,
          position: position,
          direction: direction,
          x: 0,
          y: 0
        };
        hash[id] = d;
        this.setState({
          hash: hash
        }, function () {
          // 子弹每帧移动
          var frame = function frame() {
            var node = _this3.ref[id];

            if (direction === 0) {
              d.y -= MOVE_PX$2;
              node.updateStyle({
                translateY: d.y
              });
            } else if (direction === 1) {
              d.x += MOVE_PX$2;
              node.updateStyle({
                translateX: d.x
              });
            } else if (direction === 2) {
              d.y += MOVE_PX$2;
              node.updateStyle({
                translateY: d.y
              });
            } else if (direction === 3) {
              d.x -= MOVE_PX$2;
              node.updateStyle({
                translateX: d.x
              });
            } // 校验碰撞


            var box = checkBox$1(position, direction, d.x, d.y, data.current.box);

            if (box) {
              emitHit(node, id, direction, d.x, d.y, eventBus.HIT_BOX);
            }

            var brick = checkHit(position, direction, d.x, d.y, data.current.brick);

            if (brick) {
              emitHit(node, id, direction, d.x, d.y, eventBus.HIT_BRICK, brick);
            }

            var iron = checkHit(position, direction, d.x, d.y, data.current.iron);

            if (iron) {
              emitHit(node, id, direction, d.x, d.y, eventBus.HIT_IRON, brick);
            }

            var enemy = checkHitEnemy(position, direction, d.x, d.y, data.current.enemy);

            if (enemy) {
              var n = 0; // 红和厚不减

              enemy.forEach(function (item) {
                if (item[9]) {
                  eventBus.emit(eventBus.OCCUR);
                }

                if (!item[10] && !item[9]) {
                  n++;
                }
              });
              eventBus.activeEnemyNum -= n;
              emitHit(node, id, direction, d.x, d.y, eventBus.HIT_ENEMY, enemy);
            }

            var us = checkHitUs(position, direction, d.x, d.y, index, data.current.player);

            if (us) {
              emitHit(node, id, direction, d.x, d.y, eventBus.HIT_US_BY_US, us);
            }

            var home = checkHit(position, direction, d.x, d.y, data.current.home, true);

            if (home) {
              emitHit(node, id, direction, d.x, d.y, eventBus.HIT_HOME, home);
            } // 子弹消失


            if (box || brick || iron || enemy || us || home) {
              karas$1.animate.frame.offFrame(frame);
              removeBullet(target, id);
              delete hash[id];

              _this3.setState({
                hash: hash
              });
            }
          };

          karas$1.animate.frame.onFrame(frame);
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }
        }, Object.keys(this.state.hash).map(function (id) {
          var data = _this4.state.hash[id];
          var position = data.position,
              direction = data.direction,
              x = data.x,
              y = data.y;
          var left, top, background;

          if (direction === 0) {
            left = position[0] + 12;
            top = position[1] - 4;
            background = 'url(tank.png) no-repeat 0 -170px';
          } else if (direction === 1) {
            left = position[0] + 28;
            top = position[1] + 12;
            background = 'url(tank.png) no-repeat -10px -179px';
          } else if (direction === 2) {
            left = position[0] + 12;
            top = position[1] + 28;
            background = 'url(tank.png) no-repeat -10px -170px';
          } else if (direction === 3) {
            left = position[0] - 4;
            top = position[1] + 12;
            background = 'url(tank.png) no-repeat 0 -179px';
          }

          return karas$1.createElement("span", {
            ref: id,
            key: id,
            style: {
              position: 'absolute',
              left: left,
              top: top,
              width: 8,
              height: 8,
              background: background,
              translateX: x,
              translateY: y
            }
          });
        }));
      }
    }]);

    return Bullet;
  }(karas$1.Component);

  var Hit = /*#__PURE__*/function (_karas$Component) {
    _inherits(Hit, _karas$Component);

    var _super = _createSuper(Hit);

    function Hit(props) {
      var _this;

      _classCallCheck(this, Hit);

      _this = _super.call(this, props);
      _this.state = {
        hash: {}
      };
      return _this;
    }

    _createClass(Hit, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        eventBus.on([eventBus.HIT_BOX, eventBus.HIT_BRICK, eventBus.HIT_IRON, eventBus.HIT_ENEMY], function (id, x, y) {
          var hash = _this2.state.hash;
          hash[id] = {
            x: x,
            y: y
          };

          _this2.setState({
            hash: hash
          }, function () {
            var node = _this2.ref[id];
            var a = node.animate([{
              visibility: 'visible'
            }, {
              visibility: 'visible',
              backgroundPosition: '-748px -136px'
            }], {
              duration: 100,
              iterations: 2,
              direction: 'alternate',
              easing: 'steps(2)'
            });
            a.on('finish', function () {
              delete hash[id];

              _this2.setState({
                hash: hash
              });
            });
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }
        }, Object.keys(this.state.hash).map(function (id) {
          var d = _this3.state.hash[id];
          return karas$1.createElement("span", {
            ref: id,
            key: id,
            style: {
              position: 'absolute',
              left: d.x,
              top: d.y,
              width: 32,
              height: 32,
              translateX: '-50%',
              translateY: '-50%',
              background: 'url(tank.png) no-repeat -680px -136px',
              visibility: 'hidden'
            }
          });
        }));
      }
    }]);

    return Hit;
  }(karas$1.Component);

  var Boom = /*#__PURE__*/function (_karas$Component) {
    _inherits(Boom, _karas$Component);

    var _super = _createSuper(Boom);

    function Boom(props) {
      var _this;

      _classCallCheck(this, Boom);

      _this = _super.call(this, props);
      _this.state = {
        hash: {}
      };
      return _this;
    }

    _createClass(Boom, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        eventBus.on(eventBus.BOOM, function (x, y) {
          var hash = _this2.state.hash;
          var id = x + ',' + y;
          hash[id] = {
            x: x,
            y: y
          };

          _this2.setState({
            hash: hash
          }, function () {
            var node = _this2.ref[id];
            var a = node.animate([{}, {
              backgroundPosition: '-851px -137px'
            }], {
              duration: 100,
              iterations: 3,
              direction: 'alternate',
              easing: 'steps(1)'
            });
            a.on('finish', function () {
              delete hash[id];

              _this2.setState({
                hash: hash
              });
            });
          });
        });
        eventBus.on([eventBus.HIT_HOME], function (id, x, y, home) {
          var hash = _this2.state.hash;
          home.forEach(function (item) {
            hash[id] = {
              x: item[0] * 16 + 16,
              y: item[1] * 16 + 16
            };

            _this2.setState({
              hash: hash
            }, function () {
              var node = _this2.ref[id];
              var a = node.animate([{}, {
                backgroundPosition: '-851px -137px'
              }], {
                duration: 100,
                iterations: 3,
                direction: 'alternate',
                easing: 'steps(1)'
              });
              a.on('finish', function () {
                delete hash[id];

                _this2.setState({
                  hash: hash
                });
              });
            });
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }
        }, Object.keys(this.state.hash).map(function (id) {
          var d = _this3.state.hash[id];
          return karas$1.createElement("span", {
            ref: id,
            key: id,
            style: {
              position: 'absolute',
              left: d.x,
              top: d.y,
              width: 64,
              height: 64,
              translateX: '-50%',
              translateY: '-50%',
              background: 'url(tank.png) no-repeat -783px -137px'
            }
          });
        }));
      }
    }]);

    return Boom;
  }(karas$1.Component);

  var TYPE = {
    pause: {
      px: 476,
      py: 204
    },
    protect: {
      px: 612,
      py: 204
    },
    boom: {
      px: 680,
      py: 204
    },
    wall: {
      px: 748,
      py: 204
    },
    life: {
      px: 816,
      py: 204
    }
  };

  var Item = /*#__PURE__*/function (_karas$Component) {
    _inherits(Item, _karas$Component);

    var _super = _createSuper(Item);

    function Item(props) {
      var _this;

      _classCallCheck(this, Item);

      _this = _super.call(this, props);
      _this.state = {
        hash: {}
      };
      return _this;
    }

    _createClass(Item, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var list = ['pause', 'protect', 'boom', 'wall', 'life'];
        eventBus.on(eventBus.OCCUR, function () {
          var i = Math.floor(Math.random() * list.length);
          var x = Math.floor(Math.random() * (data.current.box[2] - data.current.box[0]) * 8) + data.current.box[2] * 8;
          var y = Math.floor(Math.random() * (data.current.box[3] - data.current.box[1]) * 8) + data.current.box[1] * 8;
          var hash = _this2.state.hash;
          var type = list[i];
          type = 'life';
          var o = hash[type] = {
            x: x,
            y: y
          };
          data.current.item = Object.keys(hash).map(function (k) {
            return [k, hash[k].x, hash[k].y];
          });

          _this2.setState({
            hash: hash
          }, function () {
            var node = _this2.ref[type];
            var a = node.animate([{}, {
              visibility: 'hidden'
            }], {
              duration: 200,
              iterations: 1196,
              direction: 'alternate'
            });
            a.on('finish', function () {
              if (hash[type] === o) {
                delete hash[type];
                data.current.item = Object.keys(hash).map(function (k) {
                  return [k, hash[k].x, hash[k].y];
                });

                _this2.setState({
                  hash: hash
                });
              }
            });
          });
        });
        eventBus.on([eventBus.LIFE, eventBus.GET], function (type) {
          var hash = _this2.state.hash;
          delete hash[type];
          data.current.item = Object.keys(hash).map(function (k) {
            return [k, hash[k].x, hash[k].y];
          });

          _this2.setState({
            hash: hash
          });

          var count = 0;
          karas$1.animate.frame.offFrame(_this2.cb);

          if (type === 'pause') {
            data.current.enemyPause = true;

            var cb = _this2.cb = function (diff) {
              count += diff;

              if (count > 5000) {
                data.current.enemyPause = false;
              }
            };

            karas$1.animate.frame.onFrame(cb);
          }
        });
        eventBus.on([eventBus.GAME_OVER, eventBus.GAME_NEXT], function () {
          karas$1.animate.frame.offFrame(_this2.cb);
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }
        }, Object.keys(this.state.hash).map(function (type) {
          var data = _this3.state.hash[type];
          var x = data.x,
              y = data.y;
          var _TYPE$type = TYPE[type],
              px = _TYPE$type.px,
              py = _TYPE$type.py;
          return karas$1.createElement("span", {
            ref: type,
            key: type,
            style: {
              position: 'absolute',
              left: x,
              top: y,
              width: 32,
              height: 32,
              background: "url(tank.png) no-repeat ".concat(-px, " ").concat(-py)
            }
          });
        }));
      }
    }]);

    return Item;
  }(karas$1.Component);

  var Status = /*#__PURE__*/function (_karas$Component) {
    _inherits(Status, _karas$Component);

    var _super = _createSuper(Status);

    function Status() {
      var _this;

      _classCallCheck(this, Status);

      _this = _super.call(this);
      _this.state = {
        show: false,
        life: 0,
        list: []
      };
      return _this;
    }

    _createClass(Status, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        eventBus.on([eventBus.WILL_GAME], function () {
          _this2.setState({
            show: true,
            life: data.current.player[0][2],
            list: data.current.enemy || []
          });
        });
        eventBus.on(eventBus.LIFE, function () {
          _this2.setState({
            life: _this2.state.life + 1
          });
        });
        eventBus.on(eventBus.HIT_US, function () {
          _this2.setState({
            life: _this2.state.life - 1
          });
        });
        eventBus.on(eventBus.ADDED_ENEMY, function () {
          _this2.setState({
            list: data.current.enemy || []
          });
        });
        eventBus.on(eventBus.BEFORE_MENU, function () {
          _this2.setState({
            show: false,
            life: 0,
            list: []
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return karas$1.createElement("div", {
          style: {
            position: 'absolute',
            left: 20,
            right: 20,
            bottom: 20,
            display: this.state.show ? 'block' : 'none'
          }
        }, karas$1.createElement("div", {
          ref: "life",
          style: {
            display: 'flex',
            alignItems: 'center'
          }
        }, karas$1.createElement("span", {
          style: {
            width: 32,
            height: 32,
            background: 'url(tank.png) no-repeat -748px -170px'
          }
        }), karas$1.createElement("strong", {
          style: {
            color: '#000'
          }
        }, this.state.life || 0)), karas$1.createElement("div", {
          ref: "list"
        }, this.state.list.map(function (item) {
          if (item[3] !== 0) {
            return null;
          }

          return karas$1.createElement("span", {
            style: {
              width: 32,
              height: 32,
              background: 'url(tank.png) no-repeat -340 -204'
            }
          });
        })));
      }
    }]);

    return Status;
  }(karas$1.Component);

  var AudioController = /*#__PURE__*/function () {
    function AudioController() {
      _classCallCheck(this, AudioController);

      this.initialSuccess = false;

      try {
        this.init();
        this.initialSuccess = true;
      } catch (e) {
        console.log(e);
      }
    }

    _createClass(AudioController, [{
      key: "init",
      value: function init() {
        var _this = this;

        this.mainBGM = new Howl({
          src: 'sound/start.mp3',
          format: 'mp3',
          loop: false,
          preload: true,
          volume: 0.5
        });
        this.hitBrick = new Howl({
          src: 'sound/hit_brick.mp3',
          format: 'mp3',
          loop: false,
          preload: true,
          volume: 0.5
        });
        this.hitIron = new Howl({
          src: 'sound/hit_iron.mp3',
          format: 'mp3',
          loop: false,
          preload: true,
          volume: 0.5
        });
        this.boom = new Howl({
          src: 'sound/boom1.mp3',
          format: 'mp3',
          loop: false,
          preload: true,
          volume: 0.5
        });
        this.hitHome = new Howl({
          src: 'sound/boom2.mp3',
          format: 'mp3',
          loop: false,
          preload: true,
          volume: 0.5
        });
        this.shoot0 = new Howl({
          src: 'sound/shoot0.mp3',
          format: 'mp3',
          loop: false,
          preload: true,
          volume: 0.5
        });
        this.shoot1 = new Howl({
          src: 'sound/shoot1.mp3',
          format: 'mp3',
          loop: false,
          preload: true,
          volume: 0.5
        });
        this.shoot2 = new Howl({
          src: 'sound/shoot2.mp3',
          format: 'mp3',
          loop: false,
          preload: true,
          volume: 0.5
        });
        this.shoot3 = new Howl({
          src: 'sound/shoot3.mp3',
          format: 'mp3',
          loop: false,
          preload: true,
          volume: 0.5
        });
        this.occur = new Howl({
          src: 'sound/occur.mp3',
          format: 'mp3',
          loop: false,
          preload: true,
          volume: 0.5
        });
        this.get = new Howl({
          src: 'sound/get.mp3',
          format: 'mp3',
          loop: false,
          preload: true,
          volume: 0.5
        });
        this.life = new Howl({
          src: 'sound/life.mp3',
          format: 'mp3',
          loop: false,
          preload: true,
          volume: 0.5
        });
        eventBus.on(eventBus.OCCUR, function () {
          _this.occur.play();
        });
        eventBus.on(eventBus.GET, function () {
          _this.get.play();
        });
        eventBus.on(eventBus.LIFE, function () {
          _this.life.play();
        });
        eventBus.on(eventBus.SHOOT, function () {
          _this.shoot0.play();
        });
        eventBus.on(eventBus.ENEMY_FIRE, function (i) {
          switch (data.current.enemy[i][2]) {
            case 0:
              _this.shoot2.play();

              break;

            case 1:
              _this.shoot1.play();

              break;

            case 2:
              _this.shoot2.play();

              break;

            default:
              _this.shoot3.play();

          }
        });
        eventBus.on(eventBus.WILL_GAME, function () {
          _this.mainBGM.play();
        });
        eventBus.on(eventBus.HIT_BRICK, function (id, x, y, item) {
          var brick = data.current.brick; // 先判断变铁的

           for (var i = 0, len = brick.length; i < len; i++) {
            for (var j = item.length - 1; j >= 0; j--) {
              if (brick[i][3] && brick[i][0] === item[j][0] && brick[i][1] === item[j][1]) {
                item.splice(j, 1);

                _this.hitIron.play();
              }
            }
          }

          if (!item.length) {
            return;
          }

          _this.hitBrick.play();
        });
        eventBus.on(eventBus.HIT_BOX, function () {
          _this.hitBrick.play();
        });
        eventBus.on([eventBus.HIT_IRON, eventBus.HIT_ENEMY], function () {
          _this.hitIron.play();
        });
        eventBus.on(eventBus.BOOM, function () {
          _this.boom.play();
        });
        eventBus.on(eventBus.HIT_HOME, function () {
          _this.hitHome.play();
        });
        eventBus.on(eventBus.GET, function () {
          _this.get.play();
        });
        eventBus.on(eventBus.LIFE, function () {
          _this.life.play();
        });
      }
    }, {
      key: "play",
      value: function play() {}
    }, {
      key: "mute",
      value: function mute(muted) {
        Howler.mute(muted);
      }
    }]);

    return AudioController;
  }();

  new AudioController();

  var root = karas.render(karas.createElement("svg", {
    width: 600,
    height: 600,
    cache: "1"
  }, karas.createElement(Box, {
    ref: "box"
  }), karas.createElement(Brick, {
    ref: "brick"
  }), karas.createElement(Brick$1, {
    ref: "iron"
  }), karas.createElement(Player, {
    ref: "player"
  }), karas.createElement(Enemy, {
    ref: "enemy"
  }), karas.createElement(Fade, {
    ref: "fade"
  }), karas.createElement(Item, {
    ref: "item"
  }), karas.createElement(Bullet, {
    ref: "bullet"
  }), karas.createElement(Boom, {
    ref: "boom"
  }), karas.createElement(Hit, {
    ref: "hit"
  }), karas.createElement(Status, {
    ref: "status"
  }), karas.createElement(Menu, {
    ref: "menu"
  }), karas.createElement(StageNum, {
    ref: "stageNum"
  }), karas.createElement(GameOver, {
    ref: "gameOver"
  })), '#canvas');
  document.addEventListener('keydown', function (e) {
    var keyCode = e.keyCode; // console.warn(e.keyCode, eventBus.gameState);
    // 菜单进入，快速进入完毕

    if (eventBus.gameState === eventBus.BEFORE_MENU) {
      if (e.keyCode === 74) {
        root.ref.menu.fastShow();
      }
    } // 菜单选择
    else if (eventBus.gameState === eventBus.MENUING) {
        if (keyCode === 87 || keyCode === 83) {
          root.ref.menu.altPlayerNum();
        } // 开始游戏，赋予data的current为第1局数值
        else if (e.keyCode === 74) {
            eventBus.gameState = eventBus.BEFORE_GAME;
            eventBus.emit(eventBus.BEFORE_GAME);
            root.ref.stageNum.show(1);
            data.current = karas.util.clone(data[0]);

            if (eventBus.playerNum === 1) {
              data.current.player.splice(1);
            }
          }
      } // 游戏控制
      else if (eventBus.gameState === eventBus.GAMEING) {
          if (keyCode === 87) {
            root.ref.player.move(0, 0);
          } else if (keyCode === 68) {
            root.ref.player.move(0, 1);
          } else if (keyCode === 83) {
            root.ref.player.move(0, 2);
          } else if (keyCode === 65) {
            root.ref.player.move(0, 3);
          } // p1开火
          else if (keyCode === 74) {
              var position = root.ref.player.getPosition(0);
              var direction = root.ref.player.getDirection(0);
              root.ref.bullet.move(0, position.slice(0), direction);
            }
        } else if (eventBus.gameState === eventBus.GAME_OVER_WAIT) {
          if (keyCode === 74) {
            root.ref.player.setState({
              show: false,
              list: []
            });
            root.ref.enemy.setState({
              show: false,
              list: []
            });
            root.ref.brick.setState({
              show: false,
              list: []
            });
            root.ref.iron.setState({
              show: false,
              list: []
            });
            root.ref.box.setState({
              show: false,
              list: [],
              home: []
            });
            root.ref.gameOver.setState({
              show: false
            });
            root.ref.menu.show();
            eventBus.gameState = eventBus.BEFORE_MENU;
            eventBus.emit(eventBus.BEFORE_MENU);
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
  var w = document.querySelector('#w');
  var a = document.querySelector('#a');
  var s = document.querySelector('#s');
  var d = document.querySelector('#d');
  var j = document.querySelector('#j');
  w.addEventListener('touchstart', function () {
    if (eventBus.gameState === eventBus.MENUING) {
      root.ref.menu.altPlayerNum();
    } else if (eventBus.gameState === eventBus.GAMEING) {
      root.ref.player.move(0, 0);
    }
  });
  a.addEventListener('touchstart', function () {
    if (eventBus.gameState === eventBus.GAMEING) {
      root.ref.player.move(0, 3);
    }
  });
  s.addEventListener('touchstart', function () {
    if (eventBus.gameState === eventBus.MENUING) {
      root.ref.menu.altPlayerNum();
    } else if (eventBus.gameState === eventBus.GAMEING) {
      root.ref.player.move(0, 2);
    }
  });
  d.addEventListener('touchstart', function () {
    if (eventBus.gameState === eventBus.GAMEING) {
      root.ref.player.move(0, 1);
    }
  });
  j.addEventListener('touchstart', function () {
    if (eventBus.gameState === eventBus.BEFORE_MENU) {
      root.ref.menu.fastShow();
    } else if (eventBus.gameState === eventBus.MENUING) {
      eventBus.gameState = eventBus.BEFORE_GAME;
      root.ref.stageNum.show(1);
      data.current = karas.util.clone(data[0]);
    } else if (eventBus.gameState === eventBus.GAMEING) {
      var position = root.ref.player.getPosition(0);
      var direction = root.ref.player.getDirection(0);
      root.ref.bullet.move(0, position.slice(0), direction);
    } else if (eventBus.gameState === eventBus.GAME_OVER_WAIT) {
      root.ref.player.setState({
        show: false,
        list: []
      });
      root.ref.enemy.setState({
        show: false,
        list: []
      });
      root.ref.brick.setState({
        show: false,
        list: []
      });
      root.ref.iron.setState({
        show: false,
        list: []
      });
      root.ref.box.setState({
        show: false,
        list: [],
        home: []
      });
      root.ref.gameOver.setState({
        show: false
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

})));
//# sourceMappingURL=index.js.map
