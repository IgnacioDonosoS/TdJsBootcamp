import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Razas.js";
import Animales from "./consultas.js";

//inicializamos variables.
let i = 0;
let arrayRegistro = [];
let imagen;
let sonido;

//imagen a preview
document.querySelector("#animal").addEventListener("change", async () => {
  let nombre = $("#animal").val();
  const { animales } = await Animales;
  imagen = animales.find((a) => a.name == nombre).imagen;
  sonido = animales.find((a) => a.name == nombre).sonido;
  const imagePreview = document.querySelector("#preview");
  imagePreview.style.backgroundImage = `url(assets/imgs/${imagen})`;
  imagePreview.style.backgroundSize = "cover";
});

//registro y append de datos a pantalla
$("#btnRegistrar").click(async function (e) {
  e.preventDefault();
  let nombre = $("#animal").val();
  let edad = $("#edad").val();
  let comentarios = $("#comentarios").val();
  if (nombre && edad && comentarios) {
    switch (nombre) {
      case "Leon":
        let leon1 = new Leon(nombre, edad, imagen, comentarios, sonido);
        arrayRegistro.push(leon1);
        agregarIndex(imagen);
        break;
      case "Lobo":
        let lobo1 = new Lobo(nombre, edad, imagen, comentarios, sonido);
        arrayRegistro.push(lobo1);
        agregarIndex(imagen);
        break;
      case "Oso":
        let oso1 = new Oso(nombre, edad, imagen, comentarios, sonido);
        arrayRegistro.push(oso1);
        agregarIndex(imagen);
        break;
      case "Serpiente":
        let serpiente1 = new Serpiente(
          nombre,
          edad,
          imagen,
          comentarios,
          sonido
        );
        arrayRegistro.push(serpiente1);
        agregarIndex(imagen);
        break;
      default:
        let aguila1 = new Aguila(nombre, edad, imagen, comentarios, sonido);
        arrayRegistro.push(aguila1);
        agregarIndex(imagen);
        break;
    }
    //Reset form
    $("#animal").val("Seleccione un animal").change();
    $("#comentarios").val("");
    $("#edad").val("Seleccione un rango de años").change();

    const imagePreview = document.querySelector("#preview");
    imagePreview.style.backgroundImage = `url(assets/imgs/lion.svg)`;
    imagePreview.style.backgroundSize = "contain";

    //reproducir sonido
  } else {
    alert("Falta ingresar datos");
  }
});
//función para agregar registros a pantalla
let agregarIndex = (imagen) => {
  $("#Animales").append(`
  <div class="col-3">
  <img data-toggle="modal" data-target="#exampleModal" onClick= "modificarModal(${i})" src="assets/imgs/${imagen}" alt="" width="100%" height="200px">
  <btn onClick= "sound(${i})" class="btn"> <img src="assets/imgs/audio.svg" alt="" height="30px"> </btn> 
  </div>`);
  i++;
};

//funcion para reproducir sonido
window.sound = (index) => {
  arrayRegistro[index].Nombre == "Leon" ? arrayRegistro[index].rugir():
  arrayRegistro[index].Nombre == "Lobo" ? arrayRegistro[index].aullar():
  arrayRegistro[index].Nombre == "Oso" ? arrayRegistro[index].gruñir():
  arrayRegistro[index].Nombre == "Serpiente" ? arrayRegistro[index].sissear():
  arrayRegistro[index].Nombre == "Aguila" ? arrayRegistro[index].chillar(): undefined;
};

//funcion para agregar datos al modal
window.modificarModal = (index) => {
  let animal = arrayRegistro[index];
  let modal = document.querySelector("#exampleModal");
  modal.innerHTML = `<div class="modal-dialog modal-dialog-centered w-25" role="document">
  <div class="modal-content bg-dark">
    <div class="modal-body text-white text-center">
    <img src="assets/imgs/${animal.Imagen}" width = "100%" height = "400pxs">
    <p>Edad: ${animal.Edad}</p>
    <h4> Comentarios: </h4>
    <p>${animal.getComentarios()}</p>
    </div>
  </div>
</div>`;
};
