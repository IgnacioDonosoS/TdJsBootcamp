const child_process = require("child_process");
// 2
let nombre = null;
let apellido = null;
// 3
function ejecutar(archivo) {
  // 4
  return new Promise((resolve) => {
    // 5
    child_process.exec(`node ${archivo}`, function (err, result) {
      resolve(String(result));
    });
  });
}
// 6
ejecutar("nombre.js").then((nombre1) => {
  nombre = nombre1;
  // 7
  ejecutar("apellido.js").then((apellido1) => {
    apellido = apellido1;
    console.log(nombre + apellido);
  });
});
