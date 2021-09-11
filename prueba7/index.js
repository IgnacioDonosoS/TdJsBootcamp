const http = require("http");
const fs = require("fs");
const url = require("url");
const {
  consultarUsuarios,
  consultarTransferencias,
  agregarUsuario,
  editarUsuario,
  borrarUsuario,
  realizarTransferencia,
} = require("./funciones");

http
  .createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
      res.setHeader("content-type", "text/html");
      res.end(fs.readFileSync("index.html", "utf8"));
    }

    if (req.url == "/usuarios" && req.method == "GET") {
      try {
        consultarUsuarios().then((resu) => {
          res.end(JSON.stringify(resu));
          res.statusCode = 200;
        });
      } catch (error) {
        console.error(error);
        res.statusCode = 500;
      }
    }

    if (req.url == "/transferencias" && req.method == "GET") {
      try {
        consultarTransferencias().then((resu) => {
          res.end(JSON.stringify(resu));
          res.statusCode = 200;
        });
      } catch (error) {
        console.error(error);
        res.statusCode = 500;
      }
    }

    if (req.url.includes("/usuario") && req.method == "POST") {
      let body;
      req.on("data", (payload) => {
        body = JSON.parse(payload);
      });
      req.on("end", () => {
        usuario = [body.nombre, body.balance];
        try {
          agregarUsuario(usuario);
          res.statusCode = 200;
          res.end();
        } catch (error) {
          console.error(error);
          res.statusCode = 500;
        }
      });
    }

    if (req.url.includes("/usuario?") && req.method == "PUT") {
      let { id } = url.parse(req.url, true).query;
      let body;
      req.on("data", (payload) => {
        body = JSON.parse(payload);
      });
      req.on("end", () => {
        body.id = id;
        editar = [body.name, body.balance, body.id];
        try {
          editarUsuario(editar);
          res.statusCode = 200;
          res.end();
        } catch (error) {
          console.error(error);
          res.statusCode = 500;
        }
      });
    }

    if (req.url.includes("/usuario?") && req.method == "DELETE") {
      const { id } = url.parse(req.url, true).query;
      try {
        borrarUsuario(id);
        res.statusCode = 200;
        res.end();
      } catch (error) {
        console.error(error);
        res.statusCode = 500;
      }
    }

    if (req.url.includes("/transferencia") && req.method == "POST") {
      let body;
      req.on("data", (payload) => {
        body = JSON.parse(payload);
      });
      req.on("end", () => {
        let datos = [body.emisor, body.receptor, parseInt(body.monto)];
        try {
          realizarTransferencia(datos);
          res.statusCode = 200;
          res.end();
        } catch (error) {
          console.log(error);
          res.statusCode = 500;
        }
      });
    }
  })
  .listen(3000, () => console.log("Escuchando el puerto 3000"));
