"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _markdownToJsx = _interopRequireDefault(require("markdown-to-jsx"));

var _index = require("../../index");

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Styled = (0, _styledComponents.default)(_markdownToJsx.default)(_templateObject(), _styledSystem.flexbox, _styledSystem.grid, _styledSystem.position, _styledSystem.border, _styledSystem.background, _styledSystem.typography, _styledSystem.color, _styledSystem.shadow, _styledSystem.space, _styledSystem.layout);
var ComponentOverrides = {
  p: {
    component: _index.Paragraph,
    props: {
      as: 'p',
      className: 'p',
      serif: true
    }
  },
  h1: {
    component: _index.Heading,
    props: {
      as: 'h1'
    }
  },
  h2: {
    component: _index.Heading,
    props: {
      as: 'h2'
    }
  }
};

var MarkdownFormat = (_ref) => {
  var {
    children,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "styled"]);

  return _react.default.createElement(Styled, _extends({}, styled, {
    options: {
      overrides: ComponentOverrides
    },
    children: children
  }));
};

var _default = MarkdownFormat;
exports.default = _default;