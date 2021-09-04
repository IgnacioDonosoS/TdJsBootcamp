const axios = require("axios");

let getData = async (imprimir) => {
  await axios
    .get("https://api.gael.cloud/general/public/sismos")
    .then((response) => {
      let  {data} = response;
      let {Fecha, Magnitud} = data[0];
      imprimir(Fecha, Magnitud);
    })
};
let imprimir = (Fecha, Magnitud) => {
  console.log(`Último temblor fue el ${Fecha} con un grado ${Magnitud}`);
};
getData(imprimir)
