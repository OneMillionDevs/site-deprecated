"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n$color: #5C8DF6;\n$colorRight: darken(#5C8DF6, 15%);\n$colorLeft: darken(#5C8DF6, 5%);\n$shadow: #DBE3F4;\n--size: 32px;\n--duration: 800ms;\n\n\nheight: calc(var(--size) * 2);\nwidth: calc(var(--size) * 3);\nposition: relative;\ntransform-style: preserve-3d;\ntransform-origin: 50% 50%;\nmargin-top: calc(var(--size) * 1.5 * -1);\ntransform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);\n\n    & > .box {\n        width: 32px;\n        height: 32px;\n        top: 0;\n        left: 0;\n        position: absolute;\n        transform-style: preserve-3d;\n        &:nth-child(1) {\n            transform: translate(100%, 0);\n            animation: box1 var(--duration) linear infinite;\n        }\n        &:nth-child(2) {\n            transform: translate(0, 100%);\n            animation: box2 var(--duration) linear infinite;\n        }\n        &:nth-child(3) {\n            transform: translate(100%, 100%);\n            animation: box3 var(--duration) linear infinite;\n        }\n        &:nth-child(4) {\n            transform: translate(200%, 0);\n            animation: box4 var(--duration) linear infinite;\n        }\n        & > div {\n            --background: #5C8DF6;\n            --top: auto;\n            --right: auto;\n            --bottom: auto;\n            --left: auto;\n            --translateZ: calc(var(--size) / 2);\n            --rotateY: 0deg;\n            --rotateX: 0deg;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            background: var(--background);\n            top: var(--top);\n            right: var(--right);\n            bottom: var(--bottom);\n            left: var(--left);\n            transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));\n            &:nth-child(1) {\n                --top: 0;\n                --left: 0;\n            }\n            &:nth-child(2) {\n                --background: #{$colorRight};\n                --right: 0;\n                --rotateY: 90deg;\n            }\n            &:nth-child(3) {\n                --background: #145af2;\n                --rotateX: -90deg;\n            }\n            &:nth-child(4) {\n                --background: #{$shadow};\n                --top: 0;\n                --left: 0;\n                --translateZ: calc(var(--size) * 3 * -1);\n            }\n        }\n    }\n}\n\n@keyframes box1 {\n    0%,\n    50% {\n        transform: translate(100%, 0);\n    }\n    100% {\n        transform: translate(200%, 0);\n    }\n}\n\n@keyframes box2 {\n    0%{\n        transform: translate(0, 100%);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(100%, 0);\n    }\n}\n\n@keyframes box3 {\n    0%,\n    50% {\n        transform: translate(100%, 100%);\n    }\n    100% {\n        transform: translate(0, 100%);\n    }\n}\n\n@keyframes box4 {\n    0%{\n        transform: translate(200%, 0);\n    }\n    50% {\n        transform: translate(200%, 100%);\n    }\n    100% {\n        transform: translate(100%, 100%);\n    }\n}\n\nhtml {\n    -webkit-font-smoothing: antialiased;\n}\n\n* {\n    box-sizing: border-box;\n    &:before,\n    &:after {\n        box-sizing: border-box;\n    }\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Boxes = _styledComponents.default.div(_templateObject());

var _default = props => _react.default.createElement(Boxes, {
  className: "boxes"
}, _react.default.createElement("div", {
  className: "box"
}, _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null)), _react.default.createElement("div", {
  className: "box"
}, _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null)), _react.default.createElement("div", {
  className: "box"
}, _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null)), _react.default.createElement("div", {
  className: "box"
}, _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null)));

exports.default = _default;