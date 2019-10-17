"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../../index");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 4px;\n\n  & .grandchild {\n    opacity: 0.75;\n  }\n\n  & .grandchild:hover {\n    opacity: 1;\n  }\n\n  &:hover {\n    background: rgba(0,0,0, 0.035);\n    opacity: 1;\n\n    & .child {\n      opacity: 1;\n    }\n  \n  }\n\n  & ul {\n    margin: 0;\n    margin-top: 10px;\n    padding-left: 25px;\n  }\n\n  & li {\n    opacity: 0.75;\n    font-size: 12px;\n    margin-bottom: 0;\n    margin-top: 7px;\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: inherit;\n  display: block;\n  font-size: 14px;\n  margin-left: 8px;\n  text-decoration: none;\n  opacity: 0.75;\n  &:hover {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinkStyledChild = (0, _styledComponents.default)(_index.Link)(_templateObject());

var MenuItem = (_ref) => {
  var {
    children,
    label,
    to,
    icon,
    vertical
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "label", "to", "icon", "vertical"]);

  var state = (0, _react.useState)(false);
  var isOpen = state[0];
  var setOpen = state[1];
  return vertical ? _react.default.createElement(_index.Flex, {
    column: true,
    fullWidth: true,
    width: 1
  }, _react.default.createElement(_index.Flex, {
    styled: props.styledItem,
    active: props.styledItemActive,
    alignCenter: true,
    fullWidth: true
  }, icon && _react.default.createElement(_index.Span, props.styledIcon, "icon"), _react.default.createElement(_index.Flex, {
    alignCenter: true,
    between: true,
    width: "100%"
  }, _react.default.createElement(WrapperLink, {
    to: to,
    styled: props.styledWrapper,
    active: props.styledWrapperActive,
    getProps: _helpers.activateMenu
  }, _react.default.createElement(_index.Span, props.styledLabel, label)), children &&
  /* Menu Item Children Toggle */
  _react.default.createElement(_index.Span, {
    pointer: true,
    p: 2,
    width: 30,
    ml: "auto",
    onClick: () => setOpen(!isOpen)
  }, _react.default.createElement(_index.Span, {
    xxs: true,
    opacity: .3,
    transform: isOpen ? 'rotate(90deg)' : ''
  }, isOpen ? '▶' : '▶')))), isOpen && children && children.map(c => _react.default.createElement(ChildContainer, {
    column: true
  }, _react.default.createElement(WrapperLink, {
    styled: {
      p: 2,
      width: '100%'
    },
    active: {
      bg: 'rgba(0,0,0, 0.035)'
    },
    className: "child",
    to: c.to
  }, _react.default.createElement(_index.Flex, {
    alignCenter: true,
    between: true,
    px: 2
  }, _react.default.createElement(_index.Span, {
    sm: true
  }, c.label), _react.default.createElement(_index.Span, null, c.icon && c.icon)))))) : _react.default.createElement(Horizontal, null);
};

MenuItem.defaultProps = {
  styledItem: {
    opacity: .75,
    '&:hover': {
      background: 'rgba(0,0,0, 0.035)',
      color: 'blue',
      opacity: 1
    }
  },
  styledItemActive: {},
  styledWrapper: {
    color: '#6e6767',
    fontSize: '1em',
    fontWeight: 'normal',
    p: 10
  },
  styledWrapperActive: {
    bg: 'rgba(0,0,0, 0.035)',
    color: '#3384d3'
  }
};
var ChildContainer = (0, _styledComponents.default)(_index.Flex)(_templateObject2());

var WrapperLink = (_ref2) => {
  var {
    to,
    children,
    active,
    styled
  } = _ref2;
  return _react.default.createElement(_router.Match, {
    path: "".concat(to)
  }, props => props.match ? _react.default.createElement(_index.Link, _extends({
    fullWidth: true,
    active: true,
    to: to
  }, styled, active), " ", children) : _react.default.createElement(_index.Link, _extends({
    fullWidth: true,
    to: to
  }, styled), children));
};

var Horizontal = (_ref3) => {
  var {
    styled,
    label,
    children,
    icon,
    to
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["styled", "label", "children", "icon", "to"]);

  var state = (0, _react.useState)(props.isOpen);
  var isOpen = state[0];
  var setOpen = state[1];
  return _react.default.createElement(_index.Flex, null, _react.default.createElement(WrapperLink, {
    p: 10,
    active: {
      bg: 'blue',
      color: 'white'
    },
    getProps: (_ref4) => {
      var {
        isCurrent,
        isPartiallyCurrent
      } = _ref4;
      return {
        style: {
          background: isPartiallyCurrent ? props.activeBackground : "inherit",
          color: isPartiallyCurrent ? props.activeColor : "inherit"
        }
      };
    },
    to: to
  }, _react.default.createElement(_index.Flex, {
    ac: true
  }, icon && _react.default.createElement(_index.Span, {
    mr: 10
  }, icon), _react.default.createElement(_index.Span, null, label))), children && _react.default.createElement(_index.Span, {
    pointer: true,
    width: 30,
    alignSelf: "flex-end",
    ml: "auto",
    onClick: () => setOpen(!isOpen)
  }, _react.default.createElement(_index.Span, {
    fontSize: [1],
    transform: isOpen ? 'rotate(90deg)' : ''
  }, isOpen ? '↴' : '▶')), isOpen && children && children.map(c => _react.default.createElement(ChildContainer, null, _react.default.createElement(_index.Flex, {
    alignCenter: true,
    mb: "8px"
  }, c.icon && c.icon, _react.default.createElement(LinkStyledChild, {
    className: "child",
    to: c.to
  }, c.label)), _react.default.createElement(_index.Flex, {
    column: true
  }, c.children && _react.default.createElement(_index.Flex, {
    column: true,
    ml: "8px"
  }, c.children.map(i => _react.default.createElement(_index.Link, {
    to: i.to
  }, _react.default.createElement(_index.Flex, {
    alignCenter: true,
    className: "grandchild",
    my: "4px"
  }, i.icon, _react.default.createElement(_index.Span, {
    fontSize: 1,
    ml: "8px"
  }, i.label)))))))));
};
/* ------- Component ------- */


var _default = (_ref5) => {
  var {
    items,
    label,
    vertical,
    fullWidth
  } = _ref5,
      props = _objectWithoutProperties(_ref5, ["items", "label", "vertical", "fullWidth"]);

  return _react.default.createElement(_index.Flex, _extends({
    column: true,
    overflow: "auto",
    fullWidth: true
  }, props), label && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.Heading, {
    fontSize: [2],
    as: "h5",
    noMargin: true
  }, label), _react.default.createElement(_index.HorizontalRule, {
    my: 2
  })), _react.default.createElement(_index.Flex, {
    column: true
  }, Array.isArray(items) && items.length > 0 && items.map(item => _react.default.createElement(MenuItem, _extends({
    vertical: vertical
  }, item, props)))));
};

exports.default = _default;