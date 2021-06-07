class Carta {
  constructor(numero, pinta) {
    (this.numero = numero), (this._pinta = pinta);
  }
  getNumero() {
    return this.numero;
  }

  setNumero(numero) {
    this.numero = numero;
  }
  getPica() {
    return this.pica;
  }

  setNumero(pica) {
    this.pica = pica;
  }
}

class Persona {
  constructor(nombre, rut) {
    this.nombre = nombre;
    this.rut = rut;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getRut() {
    return this.rut;
  }

  setRut(rut) {
    this.rut = rut;
  }
  saludar() {
    console.log(`Hola soy ${this.nombre} y mi rut es: ${this.rut}`);
  }
}

var carta = new Carta(1, "pica");
var p1 = new Persona("juan", 1234);
p1.saludar();
console.log(p1.getNombre())


class Vehiculo{
    constructor(marca) {
        this.marca = marca
    }
    getMarca(){
        return this.marca
    }
    setMarca(marca){
        this.marca = marca
    }

}

var v1 = new Vehiculo("ford")
console.log(v1)
v1.setMarca("Mazda")
console.log(v1.getMarca());

class Cuadrado{
    constructor(numero) {
        this.numero = numero
    }
    cuadrado(){
        return Math.pow(this.numero,2)
    }
}
let numero1 = new Cuadrado(3);
console.log(numero1.cuadrado());

class Casa{
  #pared;
  #color;
  constructor(pared = 0, color = "rojo"){
    this.#pared = pared;
    this.#color = color;
  }
  get getPared(){
    return this.#pared;
  }
  set setPared(pared){
    this.#pared = pared;
  }
  get getColor(){
    return this.#color;
  }
  set setColor(color){
    this.#color = color;
  }

}

var casa = new Casa();
casa.setColor = "verde";
console.log(casa.getColor)





