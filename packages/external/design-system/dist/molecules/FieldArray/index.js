"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Field = _interopRequireDefault(require("../Field"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* --- Component --- */
var FieldArray = (_ref) => {
  var props = Object.assign({}, _ref);
  var [fields, setFields] = (0, _react.useState)([]);

  var addField = () => {
    setFields([...fields, _objectSpread({}, props, {
      name: "".concat(props.name, "-").concat(fields.length + 1)
    })]);
  };

  var deleteField = index => {
    var fieldRemoved = fields.filter((f, i) => i !== index);
    console.log(fieldRemoved);
    setFields(fieldRemoved);
  };

  console.log(fields, 'fieldsfields');
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.Box, null, _react.default.createElement(_.Flex, {
    flex: 1,
    justifyEnd: true
  }, _react.default.createElement(_.Span, {
    xs: true,
    tag: "blue",
    onClick: addField
  }, "Add Field")), fields.map((field, index) => _react.default.createElement(_.Flex, {
    alignCenter: true
  }, _react.default.createElement(_Field.default, field), _react.default.createElement(_.Span, {
    ml: 3
  }, _react.default.createElement(_.Span, {
    xs: true,
    tag: "blue",
    onClick: () => deleteField(index)
  }, "Delete"))))));
};

FieldArray.defaultProps = {
  styled: {
    flex: 1
  }
};
var _default = FieldArray;
exports.default = _default;