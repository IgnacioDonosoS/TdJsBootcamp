const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type':  "text/html; charset=UTF-8"})
    const params = url.parse(req.url, true).query;
    const archivo = params.archivo;
    const contenido = params.contenido;
    const nombre = params.nombre;
    const nuevoNombre = params.nuevoNombre;
    var date = new Date().toLocaleDateString();
    const respuesta = `fecha creación: ${date}, ${contenido}`;

    if (req.url.includes("/crear")) {
      fs.writeFile(archivo, respuesta, () => {
        res.write("Archivo creado con éxito!");
        res.end();
      });
    }

    if (req.url.includes("/leer")) {
      fs.readFile(archivo, (err, data) => {
        res.write(data);
        res.end();
      });
    }

    if (req.url.includes("/renombrar")) {
      fs.rename(nombre, nuevoNombre, (err, data) => {
        res.write(`Archivo ${nombre} renombrado por ${nuevoNombre}`);
        res.end();
      });
    }

    if (req.url.includes("/eliminar")) {
      fs.unlink(archivo, function (err) {
        res.write(
          `Espere un segundo porfa`,
          setTimeout(() => {
            resWrite(res, archivo);
          }, 3000)
        );

        if (err) {
          res.write(`murio ${err}`, () => {
            return res.end();
          });
        }
      });
    }
  })
  .listen(8080, () => console.log("Escuchando el puerto pepe"));

let resWrite = (res, archivo) => {
  res.write(`Archivo ${archivo} se ha eliminado con éxito`);
  res.end();
};
