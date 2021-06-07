"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _nombre = /*#__PURE__*/new WeakMap();

var Cliente = /*#__PURE__*/function () {
  function Cliente() {
    var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Cliente);

    _nombre.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _nombre, nombre);

    this.impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "getNombre",
    get: function get() {
      _classPrivateFieldGet(this, _nombre);
    }
  }, {
    key: "setNombre",
    set: function set(nombre) {
      _classPrivateFieldSet(this, _nombre, nombre);
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      (this.impuesto.monto_bruto_anual - this.impuesto.deducciones) * 0, 21;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;