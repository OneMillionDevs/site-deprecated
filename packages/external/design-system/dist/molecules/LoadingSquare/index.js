"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  -webkit-transform: rotate(45deg) scale(1);\n          transform: rotate(45deg) scale(1);\n\n\n.stroke-still {\n  stroke: #4568dc;\n  stroke:  #b06ab3;\n}\n\n&.slow .stroke-animation {\n  -webkit-animation: stroke-slow 12.2s ease-in, stroke-colors 4.8s linear;\n          animation: stroke-slow 12.2s ease-in, stroke-colors 4.8s linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n  -webkit-animation-direction: normal;\n          animation-direction: normal;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n\n\n@-webkit-keyframes stroke-slow {\n  0% {\n    stroke-dasharray: 0 200;\n  }\n  45% {\n    stroke-dashoffset: 0;\n    stroke-dasharray: 200 200;\n  }\n  90% {\n    stroke-dashoffset: -200;\n    stroke-dasharray: 200 200;\n  }\n  100% {\n    stroke-dashoffset: -200;\n    stroke-dasharray: 200 200;\n  }\n}\n\n@keyframes stroke-slow {\n  0% {\n    stroke-dasharray: 0 200;\n  }\n  45% {\n    stroke-dashoffset: 0;\n    stroke-dasharray: 200 200;\n  }\n  90% {\n    stroke-dashoffset: -200;\n    stroke-dasharray: 200 200;\n  }\n  100% {\n    stroke-dashoffset: -200;\n    stroke-dasharray: 200 200;\n  }\n}\n\n@-webkit-keyframes stroke-colors {\n  0%  { stroke: #3498DB; }\n  24% { stroke: #643232; }\n  25% { stroke: #327864; }\n  49% { stroke: #327864; }\n  50% { stroke: #32326e; }\n  74% { stroke: #32326e; }\n  75% { stroke: #78325a; }\n  99% { stroke: #78325a; }\n}\n\n@keyframes stroke-colors {\n  0%  { stroke: #3498DB; }\n  24% { stroke: #643232; }\n  25% { stroke: #327864; }\n  49% { stroke: #327864; }\n  50% { stroke: #32326e; }\n  74% { stroke: #32326e; }\n  75% { stroke: #78325a; }\n  99% { stroke: #78325a; }\n}\n\n\n\n&.active .stroke-animation {\n  -webkit-animation: stroke-spacing 1.2s ease-in, stroke-color 3.1s linear;\n          animation: stroke-spacing 1.2s ease-in, stroke-color 3.1s linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n  -webkit-animation-direction: normal;\n          animation-direction: normal;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n@-webkit-keyframes stroke-spacing {\n  0% {\n    stroke-dasharray: 0 200;\n  }\n  45% {\n    stroke-dashoffset: 0;\n    stroke-dasharray: 200 200;\n  }\n  90% {\n    stroke-dashoffset: -200;\n    stroke-dasharray: 200 200;\n  }\n  100% {\n    stroke-dashoffset: -200;\n    stroke-dasharray: 200 200;\n  }\n}\n\n@keyframes stroke-spacing {\n  0% {\n    stroke-dasharray: 0 200;\n  }\n  45% {\n    stroke-dashoffset: 0;\n    stroke-dasharray: 200 200;\n  }\n  90% {\n    stroke-dashoffset: -200;\n    stroke-dasharray: 200 200;\n  }\n  100% {\n    stroke-dashoffset: -200;\n    stroke-dasharray: 200 200;\n  }\n}\n\n@-webkit-keyframes stroke-color {\n  0%  { stroke: #3498DB; }\n  24% { stroke: #f4516c; }\n  25% { stroke: #f4516c; }\n  49% { stroke: #f4516c; }\n  50% { stroke: #f4516c; }\n  74% { stroke: #32326e; }\n  75% { stroke: #78325a; }\n  99% { stroke: #78325a; }\n}\n\n@keyframes stroke-color {\n  0%  { stroke: #3498DB; }\n  24% { stroke: #f4516c; }\n  25% { stroke: #f4516c; }\n  49% { stroke: #f4516c; }\n  50% { stroke: #f4516c; }\n  74% { stroke: #32326e; }\n  75% { stroke: #78325a; }\n  99% { stroke: #78325a; }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoadingSquares = _styledComponents.default.svg(_templateObject());

LoadingSquares.defaultProps = {
  dimensions: 10
};

var _default = props => _react.default.createElement(LoadingSquares, {
  className: "loading-squares ".concat(props.className),
  width: props.dimensions || 10,
  height: props.dimensions || 10,
  viewBox: "0 0 100 100"
}, _react.default.createElement("polyline", {
  class: "line-cornered stroke-still",
  points: "0,0 100,0 100,100",
  "stroke-width": "40",
  fill: "none"
}), _react.default.createElement("polyline", {
  class: "line-cornered stroke-still",
  points: "0,0 0,100 100,100",
  "stroke-width": "40",
  fill: "none"
}), _react.default.createElement("polyline", {
  class: "line-cornered stroke-animation",
  points: "0,0 100,0 100,100",
  "stroke-width": "40",
  fill: "none"
}), _react.default.createElement("polyline", {
  class: "line-cornered stroke-animation",
  points: "0,0 0,100 100,100",
  "stroke-width": "40",
  fill: "none"
}));

exports.default = _default;