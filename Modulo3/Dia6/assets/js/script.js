$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    var dueno = $("#propietario").val();
    var telefono = $("#telefono").val();
    var direccion = $("#direccion").val();
    var mascota = $("#nombreMascota").val();
    var tipo = $("#tipo").val();
    var motivo = $("#enfermedad").val();

    switch (tipo) {
      case "perro":
        var perro = new Mascota(
          tipo,
          dueno,
          direccion,
          telefono,
          mascota,
          motivo
        );
        var resultado = `<li>${perro.datosPropietario()}</li><li>${
          perro.getTipo
        }, mientras que el nombre de la mascota es: ${
          perro.getNombre
        } y la enfermedad es: ${perro.getEnfermedad}</li> `;
        break;
      case "gato":
        var gato = new Mascota(
          tipo,
          dueno,
          direccion,
          telefono,
          mascota,
          motivo
        );
        var resultado = `<li>${gato.datosPropietario()}</li><li>${
          gato.getTipo
        }, mientras que el nombre de la mascota es: ${
          gato.getNombre
        } y la enfermedad es: ${gato.getEnfermedad}</li> `;
        break;

      default:
        var conejo = new Mascota(
          tipo,
          dueno,
          direccion,
          telefono,
          mascota,
          motivo
        );
        var resultado = `<li>${conejo.datosPropietario()}</li><li>${
          conejo.getTipo
        }, mientras que el nombre de la mascota es: ${
          conejo.getNombre
        } y la enfermedad es: ${conejo.getEnfermedad}</li> `;
        break;
    }

    $("#resultado > ul").append(resultado);
    $("form")[0].reset();
  });
});

class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  datosPropietario() {
    return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion}, y su número telefónico de contacto es : ${this._telefono}`;
  }
}
class Animal extends Propietario {
  constructor(tipo, nombre, direccion, telefono) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get getTipo() {
    return `el tipo de animal es un ${this._tipo}`;
  }
}
class Mascota extends Animal {
  constructor(tipo, nombre, direccion, telefono, nombreMascota, enfermedad) {
    super(tipo, nombre, direccion, telefono);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get getNombre() {
    return this._nombreMascota;
  }
  get getEnfermedad() {
    return this._enfermedad;
  }

  set setNombre(nombre) {
    this._nombre = nombre;
  }
  set setEnfermedad(enfermedad) {
    this._enfermedad = enfermedad;
  }
}
