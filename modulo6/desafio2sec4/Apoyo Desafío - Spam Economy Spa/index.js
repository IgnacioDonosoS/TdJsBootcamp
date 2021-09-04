const http = require("http");
const enviar = require("./mailer");
const fs = require("fs");
const url = require("url");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

http
  .createServer((req, res) => {
    if (req.url.includes("/index")) {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("index.html", (err, data) => {
        res.write(data);
        res.end();
      });
    }
    if (req.url.includes("/mailing")) {
      let { correos, asunto, contenido } = url.parse(req.url, true).query;

      getIndicadores()
        .then(async (contenidoFinal) => {
          if (correos != "" && asunto != "" && contenido != "") {F
            contenido += contenidoFinal;
            if (correos.includes(",")) {
              enviar(correos.split(","), asunto, contenido).then((res, rej) => {
                console.log(res), console.log(rej);
              });
              correosArray = correos.split(",");
              correosArray.forEach((element) => {
                fs.writeFile(
                  `./correos/${uuidv4().slice(-6)}.txt`,
                  `To: ${element}, Subject: ${asunto}, Body: ${contenido}`,
                  (err) => {
                    if (err) console.log(err);
                    else {
                      console.log("File written successfully\n");
                    }
                  }
                );
              });
            } else {
              enviar(correos, asunto, contenido).then((res, rej) => {
                console.log(res), console.log(rej);
              });
              fs.writeFile(
                `./correos/${uuidv4().slice(-6)}.txt`,
                `To: ${correos}, Subject: ${asunto}, Body: ${contenido}`,
                (err) => {
                  if (err) console.log(err);
                  else {
                    console.log("File written successfully\n");
                  }
                }
              );
            }
            res.end("enviado");
          } else {
            res.end("ponte vioh");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  })
  .listen(3000, () => console.log("escuchanding"));

let getIndicadores = async () => {
  const { data } = await axios.get("https://mindicador.cl/api");
  let euro = data.euro.valor;
  let dolar = data.dolar.valor;
  let uf = data.uf.valor;
  let utm = data.utm.valor;
  respuesta = `<br> El valor del Dolar del dia de hoy es: ${dolar} <br> 
      El valor del Euro del dia de hoy es: ${euro} <br> 
      El valor de la Uf del dia de hoy es: ${uf} <br> 
      El valor de la Utm del dia de hoy es: ${utm} <br>`;
  return respuesta;
};
