var rectangulo = new Object();
rectangulo.ancho = 10;
rectangulo.largo = 5;
console.log(rectangulo);
var cuadrado = { ancho: 10, largo: 5 };
var notebook = { marca: "Dell", processor: "I7" };
notebook.processor = "I9";
notebook["marca"] = "HP";
notebook;

var Persona = new Object();
Persona.nombre = "Juan";
Persona.edad = 35;

var Vaca = new Object();
Vaca.sonido = function () {
  console.log("muuu");
};
Vaca.sonido();

var Gato = {
  sonido: function () {
    console.log("miau");
  },
};
Gato.sonido();

var Camila = {
  nombre: "Camila",
  edad: 24,
  miEdad: function () {
    console.log("Mi edad es " + this.edad);
  },
};
Camila.miEdad();

var notebook = new Object();
notebook.marca = "Dell";
notebook.obtener_informacion = function () {
  console.log("Computador marca " + this.marca);
};
notebook.obtener_informacion();

function Estudiante(nombre) {
  // Función constructora
  this.nombre = nombre;
}
var e1 = new Estudiante("Ignacio");

Estudiante.prototype.saludar = function () {
  console.log("Mi nombre es: " + this.nombre);
};
e1.saludar();
var e2 = new Estudiante("juan");
e2.saludar();

class Val {
  constructor(pepe) {
    var lala = "";
    var lal2 = "";
    var lal3 = "";
    var lal4 = "";
  }
  get lala() {
    return this._lala;
  }
  set lala(in_lala) {
    this._lala = in_lala;
  }

  get lal2() {
    return this._lal2;
  }
  set lal2(in_lal2) {
    this._lal2 = in_lal2;
  }

  get lal3() {
    return this._lal3;
  }
  set lal3(in_lal3) {
    this._lal3 = in_lal3;
  }

  get lal4() {
    return this._lal4;
  }
  set lal4(in_lal4) {
    this._lal4 = in_lal4;
  }
}
