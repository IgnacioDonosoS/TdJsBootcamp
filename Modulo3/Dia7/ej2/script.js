class Pelicula {
  constructor(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
}
asdsafsadsadsa

class Largometraje extends Pelicula {
  constructor(name, runTime) {
    super(name);
    this._runTime = runTime;
  }
  getRuntime() {
    return this._runTime;
  }
  setRuntime(runTime) {
    this._runTime = runTime;
  }
}

class Cortometraje extends Pelicula {
  constructor(name, runTime) {
    super(name);
    this._runTime = runTime;
  }
  getRuntime() {
    return this._runTime;
  }
  setRuntime(runTime) {
    this._runTime = runTime;
  }
}

class MyApp {
  play(Pelicula) {
    const result = `la película ${Pelicula.getName()} se está
    reproduciendo...tiene una duración de ${Pelicula.getRuntime()}`;
    return result;
  }
}

const largometraje = new Largometraje("Sin City", "105min");
const cortometraje = new Cortometraje("Hulk vs Wolverine", "20min");

const myApp1 = new MyApp();
const playing = myApp1.play(cortometraje);
console.log(playing);

var peliculas = [largometraje, cortometraje];

$(document).ready(function () {
  peliculas.forEach((item, i) => {
    $("#mostrar").append(`<option id=${i}> ${item.getName()} </option>`);
  });
  $("#mostrar").change(function (e) {
    e.preventDefault();
    var valor = $("#mostrar").children(":selected").attr("id");
    if (valor == "juan") {
      $("#viva").html("ponte vioh");
    } else {
      $("#viva").html(myApp1.play(peliculas[parseInt(valor)]));
    }
  });
});
