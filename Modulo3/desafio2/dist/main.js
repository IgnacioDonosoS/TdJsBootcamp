"use strict";

var _Cliente1 = _interopRequireDefault(require("./modules/Cliente.js"));

var _Impuesto1 = _interopRequireDefault(require("./modules/Impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _Impuesto["default"](1000, 200);
var cliente1 = new _Cliente["default"]("Juan", impuesto1);
console.log(cliente1.impuesto.deducciones);
console.log(cliente1.calcularImpuesto());