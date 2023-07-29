"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllerDB = require("../controller/controllerDB.js");
var router = (0, _express.Router)();
router.get("/", _controllerDB.getAllTask);
router.post("/tasks/add", _controllerDB.postTask);
router.put("/tasks/edit/:id", _controllerDB.putUpdateTask);
router["delete"]("/tasks/delete/:id", _controllerDB.deleteTask);
router.put("/tasks/done/:id", _controllerDB.putDone);
var _default = router;
exports["default"] = _default;