const http = require("http");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const chalk = require("chalk");
let _ = require("lodash");
let humanos = [];
const log = console.log
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    if (req.url.includes("/listar")) {
      _.forEach(humanos, (item, i) => {
        res.write(
          `${i+1}. Nombre: ${item.nombre} - Apellido: ${
            item.apellido
          } - ${item.id.substring(0, 5)} - TimeStamp : ${item.fechaRegistro} <br>`
        )
        log(chalk.blue.bgWhite(`Nombre: ${item.nombre} ${item.nombre} Id: ${item.id} fecha registro: ${item.fechaRegistro}`));
      });
      res.end();
    }
    if (req.url.includes("/crear")) {
      axios
        .get("https://randomuser.me/api/")
        .then((response) => {
          let data = response.data.results[0];
          let humano = {
            nombre: `${data.name.first}`,
            apellido: `${data.name.last}`,
            id: `${uuidv4()}`,
            fechaRegistro: `${moment().format("MMMM Do YYYY, h:mm:ss a")}`,
          };
          humanos.push(humano);
          _.forEach(humanos, (item, i) => {
            res.write(
                `${i+1}. Nombre: ${item.nombre} - Apellido: ${
                item.apellido
              } - ${item.id.substring(0, 5)} - TimeStamp : ${
                item.fechaRegistro
              } <br>`
            );
            log(chalk.blue.bgWhite(`Nombre: ${item.nombre} ${item.nombre} Id: ${item.id} fecha registro: ${item.fechaRegistro}`));
          });
          res.end();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  })
  .listen(8080, () => console.log("Escuchando el puerto 8080"));
