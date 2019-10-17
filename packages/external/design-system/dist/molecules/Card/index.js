"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CardHeader = props => {
  return _react.default.createElement(_index.Flex, {
    column: true,
    flex: 1,
    p: 15,
    minHeight: props.isExpanded ? 150 : 30
  }, _react.default.createElement(_index.BackgroundGradient, {
    gradient: "blue"
  }), props.imageCover && _react.default.createElement(_index.BackgroundImage, _extends({
    src: props.imageCover,
    opacity: 0.2,
    ratio: 0.3
  }, props.styledCover)), _react.default.createElement(_index.Flex, {
    alignCenter: true,
    between: true
  }, _react.default.createElement(_index.Box, null, _react.default.createElement(_index.Span, {
    xs: true,
    color: "white",
    highlight: "blue",
    alignSelf: "flex-start"
  }, props.timestamp)), props.tag && _react.default.createElement(_index.Span, {
    xxs: true,
    tag: "white",
    alignSelf: "flex-end"
  }, "Tag")));
};

var Card = (_ref) => {
  var {
    id,
    title,
    tagline,
    image
  } = _ref,
      props = _objectWithoutProperties(_ref, ["id", "title", "tagline", "image"]);

  var [isHeader, setHeader] = (0, _react.useState)(props.isHeader);
  var [isExpanded, setExpanded] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (props.imageCover) setHeader(true);
  }, [props.imageCover]);
  return _react.default.createElement(_index.Box, props.styled, _react.default.createElement(_index.Flex, {
    column: true,
    height: "100%"
  }, isHeader && _react.default.createElement(CardHeader, _extends({}, props, {
    isHeader: isHeader,
    setHeader: setHeader
  })), _react.default.createElement(_index.Box, {
    card: true,
    borderNone: true,
    flex: 1,
    textAlign: "center",
    p: 15,
    py: 30,
    zIndex: 20
  }, image && _react.default.createElement(_index.Box, {
    inlineBlock: true,
    circle: true,
    boxShadow: "sunset",
    p: 3,
    gradient: "white",
    maxWidth: 180,
    mx: "auto",
    mt: isExpanded ? -120 : -40
  }, _react.default.createElement(_index.Image, _extends({
    src: image
  }, props.styledImage))), _react.default.createElement(_index.Heading, {
    lg: true,
    mt: 0,
    fontWeight: 300
  }, title), _react.default.createElement(_index.Paragraph, {
    fontSize: [1],
    mb: [25]
  }, tagline), props.content && props.content)));
};

Card.defaultProps = {
  to: '/',
  label: 'Learn More',
  styled: {
    p: 3,
    width: '100%'
  },
  styledHeader: {
    variant: 'green'
  },
  styledFooter: {
    variant: 'green'
  },
  styledButton: {
    variant: 'green'
  },
  styledContent: {},
  styledImage: {
    maxWidth: 100
  },
  isHeader: false,
  isFooter: false
}; // Card.defaultProps = {
//   title: 'Interesting Title',
//   tagline: 'A Tagline to To Intrigue',
//   timestamp: 'Feb 27, 2019',
//   to: '/',
//   label: 'Learn More',
//   image: 'https://image.flaticon.com/icons/svg/2000/2000651.svg',
//   imageCover: 'https://cdn.dribbble.com/users/548267/screenshots/7009894/media/7c195a7fbbdb8faee533f8324219d399.jpg',
//   styledButton: {
//     variant: 'green'
//   }
// }

Card.propTypes = {
  styled: _propTypes.default.object,
  styledButton: _propTypes.default.object
};
var _default = Card;
exports.default = _default;