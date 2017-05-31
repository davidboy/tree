webpackJsonp([5],{

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-tree/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcTree = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-tree\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _rcTree2 = _interopRequireDefault(_rcTree);

var _cssAnimation = __webpack_require__(79);

var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var STYLE = '\n.collapse {\n  overflow: hidden;\n  display: block;\n}\n\n.collapse-active {\n  transition: height 0.3s ease-out;\n}\n'; /* eslint no-console:0 */


function animate(node, show, done) {
  var height = node.offsetHeight;
  return (0, _cssAnimation2['default'])(node, 'collapse', {
    start: function start() {
      if (!show) {
        node.style.height = node.offsetHeight + 'px';
      } else {
        height = node.offsetHeight;
        node.style.height = 0;
      }
    },
    active: function active() {
      node.style.height = (show ? height : 0) + 'px';
    },
    end: function end() {
      node.style.height = '';
      done();
    }
  });
}

var animation = {
  enter: function enter(node, done) {
    return animate(node, true, done);
  },
  leave: function leave(node, done) {
    return animate(node, false, done);
  },
  appear: function appear(node, done) {
    return animate(node, true, done);
  }
};

var demo = _react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(
    'h2',
    null,
    'expanded'
  ),
  _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: STYLE } }),
  _react2['default'].createElement(
    _rcTree2['default'],
    {
      defaultExpandAll: false,
      defaultExpandedKeys: ['p1'],
      openAnimation: animation
    },
    _react2['default'].createElement(
      _rcTree.TreeNode,
      { title: 'parent 1', key: 'p1' },
      _react2['default'].createElement(_rcTree.TreeNode, { key: 'p10', title: 'leaf' }),
      _react2['default'].createElement(
        _rcTree.TreeNode,
        { title: 'parent 1-1', key: 'p11' },
        _react2['default'].createElement(
          _rcTree.TreeNode,
          { title: 'parent 2-1', key: 'p21' },
          _react2['default'].createElement(_rcTree.TreeNode, { title: 'leaf' }),
          _react2['default'].createElement(_rcTree.TreeNode, { title: 'leaf' })
        ),
        _react2['default'].createElement(_rcTree.TreeNode, { key: 'p22', title: 'leaf' })
      )
    )
  )
);

_reactDom2['default'].render(demo, document.getElementById('__react-content'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzXFxhbmltYXRpb24uanMiXSwibmFtZXMiOlsiU1RZTEUiLCJhbmltYXRlIiwibm9kZSIsInNob3ciLCJkb25lIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3RhcnQiLCJzdHlsZSIsImFjdGl2ZSIsImVuZCIsImFuaW1hdGlvbiIsImVudGVyIiwibGVhdmUiLCJhcHBlYXIiLCJkZW1vIiwiX19odG1sIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsa0lBQU4sQyxDQVBBOzs7QUFrQkEsU0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLElBQXZCLEVBQTZCQyxJQUE3QixFQUFtQztBQUNqQyxNQUFJQyxTQUFTSCxLQUFLSSxZQUFsQjtBQUNBLFNBQU8sK0JBQWFKLElBQWIsRUFBbUIsVUFBbkIsRUFBK0I7QUFDcENLLFNBRG9DLG1CQUM1QjtBQUNOLFVBQUksQ0FBQ0osSUFBTCxFQUFXO0FBQ1RELGFBQUtNLEtBQUwsQ0FBV0gsTUFBWCxHQUF1QkgsS0FBS0ksWUFBNUI7QUFDRCxPQUZELE1BRU87QUFDTEQsaUJBQVNILEtBQUtJLFlBQWQ7QUFDQUosYUFBS00sS0FBTCxDQUFXSCxNQUFYLEdBQW9CLENBQXBCO0FBQ0Q7QUFDRixLQVJtQztBQVNwQ0ksVUFUb0Msb0JBUzNCO0FBQ1BQLFdBQUtNLEtBQUwsQ0FBV0gsTUFBWCxJQUF1QkYsT0FBT0UsTUFBUCxHQUFnQixDQUF2QztBQUNELEtBWG1DO0FBWXBDSyxPQVpvQyxpQkFZOUI7QUFDSlIsV0FBS00sS0FBTCxDQUFXSCxNQUFYLEdBQW9CLEVBQXBCO0FBQ0FEO0FBQ0Q7QUFmbUMsR0FBL0IsQ0FBUDtBQWlCRDs7QUFFRCxJQUFNTyxZQUFZO0FBQ2hCQyxPQURnQixpQkFDVlYsSUFEVSxFQUNKRSxJQURJLEVBQ0U7QUFDaEIsV0FBT0gsUUFBUUMsSUFBUixFQUFjLElBQWQsRUFBb0JFLElBQXBCLENBQVA7QUFDRCxHQUhlO0FBSWhCUyxPQUpnQixpQkFJVlgsSUFKVSxFQUlKRSxJQUpJLEVBSUU7QUFDaEIsV0FBT0gsUUFBUUMsSUFBUixFQUFjLEtBQWQsRUFBcUJFLElBQXJCLENBQVA7QUFDRCxHQU5lO0FBT2hCVSxRQVBnQixrQkFPVFosSUFQUyxFQU9IRSxJQVBHLEVBT0c7QUFDakIsV0FBT0gsUUFBUUMsSUFBUixFQUFjLElBQWQsRUFBb0JFLElBQXBCLENBQVA7QUFDRDtBQVRlLENBQWxCOztBQVlBLElBQU1XLE9BQ0o7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURGO0FBRUUsOENBQU8seUJBQXlCLEVBQUVDLFFBQVFoQixLQUFWLEVBQWhDLEdBRkY7QUFHRTtBQUFBO0FBQUE7QUFDRSx3QkFBa0IsS0FEcEI7QUFFRSwyQkFBcUIsQ0FBQyxJQUFELENBRnZCO0FBR0UscUJBQWVXO0FBSGpCO0FBS0U7QUFBQTtBQUFBLFFBQVUsT0FBTSxVQUFoQixFQUEyQixLQUFJLElBQS9CO0FBQ0UsMkRBQVUsS0FBSSxLQUFkLEVBQW9CLE9BQU0sTUFBMUIsR0FERjtBQUVFO0FBQUE7QUFBQSxVQUFVLE9BQU0sWUFBaEIsRUFBNkIsS0FBSSxLQUFqQztBQUNFO0FBQUE7QUFBQSxZQUFVLE9BQU0sWUFBaEIsRUFBNkIsS0FBSSxLQUFqQztBQUNFLCtEQUFVLE9BQU0sTUFBaEIsR0FERjtBQUVFLCtEQUFVLE9BQU0sTUFBaEI7QUFGRixTQURGO0FBS0UsNkRBQVUsS0FBSSxLQUFkLEVBQW9CLE9BQU0sTUFBMUI7QUFMRjtBQUZGO0FBTEY7QUFIRixDQURGOztBQXVCQSxzQkFBU00sTUFBVCxDQUFnQkYsSUFBaEIsRUFBc0JHLFNBQVNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXRCIiwiZmlsZSI6ImFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9DUy9Eb2N1bWVudHMvUGRmUmV2aWV3Q2xpZW50L3JjLXRyZWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tY29uc29sZTowICovXHJcbmltcG9ydCAncmMtdHJlZS9hc3NldHMvaW5kZXgubGVzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgVHJlZSwgeyBUcmVlTm9kZSB9IGZyb20gJ3JjLXRyZWUnO1xyXG5pbXBvcnQgY3NzQW5pbWF0aW9uIGZyb20gJ2Nzcy1hbmltYXRpb24nO1xyXG5cclxuY29uc3QgU1RZTEUgPSBgXHJcbi5jb2xsYXBzZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNvbGxhcHNlLWFjdGl2ZSB7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGUobm9kZSwgc2hvdywgZG9uZSkge1xyXG4gIGxldCBoZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodDtcclxuICByZXR1cm4gY3NzQW5pbWF0aW9uKG5vZGUsICdjb2xsYXBzZScsIHtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICBpZiAoIXNob3cpIHtcclxuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IGAke25vZGUub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodDtcclxuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhY3RpdmUoKSB7XHJcbiAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gYCR7c2hvdyA/IGhlaWdodCA6IDB9cHhgO1xyXG4gICAgfSxcclxuICAgIGVuZCgpIHtcclxuICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgYW5pbWF0aW9uID0ge1xyXG4gIGVudGVyKG5vZGUsIGRvbmUpIHtcclxuICAgIHJldHVybiBhbmltYXRlKG5vZGUsIHRydWUsIGRvbmUpO1xyXG4gIH0sXHJcbiAgbGVhdmUobm9kZSwgZG9uZSkge1xyXG4gICAgcmV0dXJuIGFuaW1hdGUobm9kZSwgZmFsc2UsIGRvbmUpO1xyXG4gIH0sXHJcbiAgYXBwZWFyKG5vZGUsIGRvbmUpIHtcclxuICAgIHJldHVybiBhbmltYXRlKG5vZGUsIHRydWUsIGRvbmUpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBkZW1vID0gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDI+ZXhwYW5kZWQ8L2gyPlxyXG4gICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogU1RZTEUgfX0vPlxyXG4gICAgPFRyZWVcclxuICAgICAgZGVmYXVsdEV4cGFuZEFsbD17ZmFsc2V9XHJcbiAgICAgIGRlZmF1bHRFeHBhbmRlZEtleXM9e1sncDEnXX1cclxuICAgICAgb3BlbkFuaW1hdGlvbj17YW5pbWF0aW9ufVxyXG4gICAgPlxyXG4gICAgICA8VHJlZU5vZGUgdGl0bGU9XCJwYXJlbnQgMVwiIGtleT1cInAxXCI+XHJcbiAgICAgICAgPFRyZWVOb2RlIGtleT1cInAxMFwiIHRpdGxlPVwibGVhZlwiLz5cclxuICAgICAgICA8VHJlZU5vZGUgdGl0bGU9XCJwYXJlbnQgMS0xXCIga2V5PVwicDExXCI+XHJcbiAgICAgICAgICA8VHJlZU5vZGUgdGl0bGU9XCJwYXJlbnQgMi0xXCIga2V5PVwicDIxXCI+XHJcbiAgICAgICAgICAgIDxUcmVlTm9kZSB0aXRsZT1cImxlYWZcIi8+XHJcbiAgICAgICAgICAgIDxUcmVlTm9kZSB0aXRsZT1cImxlYWZcIi8+XHJcbiAgICAgICAgICA8L1RyZWVOb2RlPlxyXG4gICAgICAgICAgPFRyZWVOb2RlIGtleT1cInAyMlwiIHRpdGxlPVwibGVhZlwiLz5cclxuICAgICAgICA8L1RyZWVOb2RlPlxyXG4gICAgICA8L1RyZWVOb2RlPlxyXG4gICAgPC9UcmVlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKGRlbW8sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX3JlYWN0LWNvbnRlbnQnKSk7XHJcbiJdfQ==

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(215);


/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(53);
} catch (err) {
  var index = __webpack_require__(53);
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];
      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },


  endEvents: endEvents,

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports["default"] = TransitionEvents;
module.exports = exports['default'];

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Event = __webpack_require__(78);

var _Event2 = _interopRequireDefault(_Event);

var _componentClasses = __webpack_require__(77);

var _componentClasses2 = _interopRequireDefault(_componentClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isCssAnimationSupported = _Event2["default"].endEvents.length !== 0;


var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = (0, _componentClasses2["default"])(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  _Event2["default"].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  _Event2["default"].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

exports["default"] = cssAnimation;
module.exports = exports['default'];

/***/ })

},[339]);
//# sourceMappingURL=animation.js.map