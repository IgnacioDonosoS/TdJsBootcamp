const https = require("https");
const fs = require("fs");
const axios = require("axios");
const [archivo, indicador, cantidad] = process.argv.slice(2);

axios.get('https://mindicador.cl/api')
  .then(function (response) {
    console.log(response.data)
    let valorCambio = response.data[`${indicador}`].valor;
    let tipoDato = response.data[`${indicador}`].unidad_medida;
    if (tipoDato == "Pesos") {cantidadTotal = cantidad/valorCambio};
    if (tipoDato == "Dólar") {cantidadTotal = (cantidad/valorCambio)/misDatos.dolar.valor};
    let fecha = new Date();
fs.writeFile(
  `${archivo}`,
  `A la fecha: ${fecha}
  Fue realizada cotización con los siguientes datos:
  Cantidad de pesos a convertir: ${cantidad} pesos
  Convertido a ${indicador} da un total de:
  $${cantidadTotal}`,
      "utf8",
      () => {
        fs.readFile(`${archivo}`, "utf8", (err, data) => {
          console.log(data);
        });
      }
    );
  }
  ).catch((err) => {console.error(err);});