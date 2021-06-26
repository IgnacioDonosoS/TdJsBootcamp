const getDatos = async (id) => {
  const url =
    "https://pokeapi.co/api/v2/pokemon/" + id
  try {
    const response = await fetch(url);
    const datos = await response.json();
    let imagen = datos.sprites.back_default
    await $("#mostrar").append(`<div class="row">
    <div class="col-6"> <img src="${imagen}" id="${id}" alt="" height="300px" class="img-fluid"></div>`);
  } catch (err) {
    console.log(err);
  }
};
$("#nombrePoke").text("asdf");

inicioPagina();

function inicioPagina() {
  for (let i = 1; i <= 20; i++) {
    id = i;
    getDatos(id);
  }
}

const llenardatos = async (id) => {

  const url =
  "https://pokeapi.co/api/v2/pokemon/" + id
try {

} catch (err) {
  console.log(err);
}

}
