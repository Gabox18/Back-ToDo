"use strict";

var _app = _interopRequireDefault(require("./app.js"));
var _db = _interopRequireDefault(require("./db.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen(3001);
console.log("server runing", 3001);