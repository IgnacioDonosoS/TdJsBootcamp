class Personal {
  constructor(nombre, departamento, tipo, activo) {
    this._nombre = nombre;
    this._departamento = departamento;
    this._tipo = tipo;
    this._activo = activo;
  }
}
class Administrativo extends Personal {
  constructor(nombre, departamento, tipo, activo) {
    super(nombre, departamento, tipo, activo);
  }
}
class Docente extends Personal {
  constructor(nombre, departamento, tipo, activo) {
    super(nombre, departamento, tipo, activo);
  }
}
class Obrero extends Personal {}

var admi = new Administrativo("pepe", "JefeDocente", "planta", true);
var profeH = new Docente("pipi", "docente", ":o", false);
var obrero = new Obrero("pupu", "obrero", "planta", true);

console.log(admi);
console.log(profeH);
console.log(obrero);

class Producto {
  constructor(nombre, sku, precio, marca) {
    this._nombre = nombre;
    this._sku = sku;
    this._precio = precio;
    this._marca = marca;
  }
}

class Computador extends Producto {
  constructor(nombre, sku, precio, marca, procesador) {
    super(nombre, sku, precio, marca);
    this._procesador = procesador;
  }
}
class LineaBlanca extends Producto {
  constructor(nombre, sku, precio, marca, puertas) {
    super(nombre, sku, precio, marca);
    this._puertas = puertas;
  }
}
class Zapateria extends Producto {
  constructor(nombre, sku, precio, marca, talla) {
    super(nombre, sku, precio, marca);
    this._talla = talla;
  }
}

var comp = new Computador("hp pav", 1, 1000, "hp", "intel");
console.log(comp);

function FiguraGeometrica(lado) {
  this.lado = lado;
}
function Poligono(lado) {
  FiguraGeometrica.call(this, lado);
}
Poligono.prototype = Object.create(FiguraGeometrica.prototype);

Poligono.prototype.calcularArea = function () {
  return this.lado * this.lado;
};

var cuadrado = new Poligono(3);
console.log(cuadrado);
console.log(cuadrado.calcularArea());

function Comuna(nombre, poblacion) {
  this.nombre = nombre;
  this.poblacion = poblacion;
}
Comuna.prototype.calcularCenso = function () {
  console.log("Calculando el censo del sector...");
};
function Sector(nombre, poblacion, direccion) {
  Comuna.call(this, nombre, poblacion);
  this.direccion = direccion;
}
