function Consultorio(nombre, paciente) {
  this._nombre = function () {
    return nombre;
  };
  this._paciente = function () {
    return paciente || [];
  };

  Consultorio.prototype.getNombre = function () {
    return this._nombre;
  };
  Consultorio.prototype.getPaciente = function () {
    return this._paciente;
  };
  Consultorio.prototype.setNombre = function (nombre) {
    this._nombre = nombre;
  };
  Consultorio.prototype.setPaciente = function (paciente) {
    this._paciente = paciente;
  };
  Consultorio.prototype.buscarPorNombre = function (nombre) {
    var pacientesEncontrados = [];
    for (let i = 0; i < this.getPaciente().length; i++) {
      if ((nombre == this.getPaciente()[i].getNombre())) {
        pacientesEncontrados.push(this.getPaciente()[i]);
      }
    }
    console.log(pacientesEncontrados);
  };

  Consultorio.prototype.imprimirPacientes = function () {
    for (let i = 0; i < this.getPaciente().length; i++) {
      console.log("El paciente " + (i+1) +
          " es: " +
          this.getPaciente()[i].getNombre() +
          " su edad es: " +
          this.getPaciente()[i].getEdad() +
          " con un rut: " +
          this.getPaciente()[i].getRut() +
          " y con diagnóstico: " +
          this.getPaciente()[i].getDiagnostico()
      );
    }
  };
}

function Paciente(nombre, edad, rut, diagnostico) {
  this._nombre = function () {
  return nombre}
  this._edad = function () {
    return edad
  }
  this._rut = function () {
    return rut
  }
  this._diagnostico = function () {
    return diagnostico
  }

  Paciente.prototype.getNombre = function () {
    return this._nombre;
  };
  Paciente.prototype.setNombre = function (nombre) {
    this._nombre = nombre;
  };
  Paciente.prototype.getEdad = function () {
    return this._edad;
  };
  Paciente.prototype.setEdad = function (edad) {
    this._edad = edad;
  };
  Paciente.prototype.getRut = function () {
    return this._rut;
  };
  Paciente.prototype.setRut = function (rut) {
    this._rut = rut;
  };
  Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico;
  };
  Paciente.prototype.setDiagnostico = function (diagnostico) {
    this._diagnostico = diagnostico;
  };
}

var c1 = new Consultorio();
c1.setNombre("Consultorio1");

var p1 = new Paciente();
p1.setNombre("Ignacio");
p1.setEdad(34);
p1.setRut("16308761-8");
p1.setDiagnostico("vivo :(");

var p2 = new Paciente();
p2.setNombre("juan");
p2.setEdad(99);
p2.setRut("6308761-8");
p2.setDiagnostico("clinicamente muerto");

var p3 = new Paciente();
p3.setNombre("pepe");
p3.setEdad(1);
p3.setRut("96308761-8");
p3.setDiagnostico("sano");

var p4 = new Paciente();
p4.setNombre("pepo");
p4.setEdad(15);
p4.setRut("34308761-8");
p4.setDiagnostico("cerdo");

var p5 = new Paciente();
p5.setNombre("blue");
p5.setEdad(5);
p5.setRut("37308761-8");
p5.setDiagnostico("Tez azul");

var p6 = new Paciente();
p6.setNombre("blue");
p6.setEdad(55);
p6.setRut("373208761-8");
p6.setDiagnostico("Tez Gris?!");

c1.setPaciente([p1, p2, p3, p4, p5, p6]);
c1.buscarPorNombre("blue");
c1.imprimirPacientes();


