import Cliente from "./modules/Cliente.js";
import Impuesto from "./modules/Impuesto.js";
var impuesto1 = new Impuesto(1000, 200);
var cliente1 = new Cliente("Juan", impuesto1);
console.log(`El cliente ${cliente1._nombre} debe cancelar un total de $${cliente1.calcularImpuesto()}`)
