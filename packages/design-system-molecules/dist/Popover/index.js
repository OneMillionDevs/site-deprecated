"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@blueprintjs/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PopoverExample extends _react.default.Component {
  render() {
    return _react.default.createElement(_core.Popover, {
      interactionKind: _core.PopoverInteractionKind.CLICK,
      position: _core.Position.BOTTOM
    }, _react.default.createElement("span", {
      intent: _core.Intent.PRIMARY
    }, this.props.children), this.props.content);
  }

}

exports.default = PopoverExample;