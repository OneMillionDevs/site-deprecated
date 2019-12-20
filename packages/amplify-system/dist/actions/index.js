"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrapContext = void 0;

var _types = require("./types");

/* -------------------------------- */

/* Initialization
/* -------------------------------- */

/**
 * @name bootstrapContext
 * @param {Object} provider
 */
var bootstrapContext = (state, dispatch) => payload => dispatch({
  type: _types.BOOTSTRAP_CONTEXT,
  payload: payload
});

exports.bootstrapContext = bootstrapContext;