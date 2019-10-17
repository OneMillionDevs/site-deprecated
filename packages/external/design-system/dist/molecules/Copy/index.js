"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Component = props => {
  var [data, setData] = (0, _react.useState)(props.data);
  var [message, setMessage] = (0, _react.useState)();
  var [copied, setCopied] = (0, _react.useState)();

  var toggleCopy = () => {
    setCopied(!copied);
  };

  (0, _react.useEffect)(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);
  (0, _react.useEffect)(() => {
    if (copied) {
      setMessage(true);
    }
  }, [copied]);
  return _react.default.createElement(_reactCopyToClipboard.CopyToClipboard, {
    text: data,
    onCopy: toggleCopy
  }, _react.default.createElement("span", null, "Copy "));
};

var _default = Component;
exports.default = _default;