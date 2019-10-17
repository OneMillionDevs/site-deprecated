"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

var _reactTransitionGroup = require("react-transition-group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FadeTransitionRouter = props => _react.default.createElement(_router.Location, null, (_ref) => {
  var {
    location
  } = _ref;
  return _react.default.createElement(_reactTransitionGroup.TransitionGroup, {
    className: "transition-group"
  }, _react.default.createElement(_reactTransitionGroup.CSSTransition, {
    key: location.key,
    classNames: "fade",
    timeout: 500
  }, _react.default.createElement(_router.Router, {
    location: location,
    className: "router",
    primary: false
  }, props.children)));
});

var _default = FadeTransitionRouter;
exports.default = _default;