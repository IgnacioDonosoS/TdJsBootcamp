const http = require("http");
const fs = require("fs");
const url = require("url");
const { v4: uuidv4 } = require("uuid");
const { getNewRoommate, saveRoommate } = require("./roommates");
const { saveGasto, recalcularDeudas } = require("./gastos");

http
  .createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
      res.setHeader("content-type", "text/html");
      res.end(fs.readFileSync("index.html", "utf8"));
    }

    if (req.url.startsWith("/roommate") && req.method == "POST") {
      getNewRoommate()
        .then(async (usuario) => {
          saveRoommate(usuario);
          res.end(JSON.stringify(usuario));
        })
        .catch((e) => {
          res.statusCode = 500;
          res.end();
          console.log("error en el registro", e);
        });
    }

    if (req.url.includes("/gasto") && req.method == "POST") {
      let body;
      req.on("data", (payload) => {
        body = JSON.parse(payload);
      });
      req.on("end", () => {
        gasto = {
          id: uuidv4().slice(-6),
          roommate: body.roommate,
          descripcion: body.descripcion,
          monto: body.monto,
        };
        saveGasto(gasto);
        recalcularDeudas();
        res.end();
      });
    }

    if (req.url.startsWith("/roommates") && req.method == "GET") {
      res.setHeader("Content-Type", "application/json");
      res.end(fs.readFileSync("roommates.json"));
    }

    if (req.url.includes("/gastos") && req.method == "GET") {
      res.setHeader("content-type", "application/json");
      res.end(fs.readFileSync("gastos.json"));
    }

    if (req.url.includes("/gasto?id=") && req.method == "DELETE") {
      const { id } = url.parse(req.url, true).query;
      let gastosJSON = JSON.parse(fs.readFileSync("gastos.json", "utf8"));
      gastosJSON.gastos = gastosJSON.gastos.filter((b) => b.id !== id);
      fs.writeFileSync("gastos.json", JSON.stringify(gastosJSON));
      recalcularDeudas();
      res.end();
    }

    if (req.url.includes("/gasto?id=") && req.method == "PUT") {
      const { id } = url.parse(req.url, true).query;
      let gastosJSON = JSON.parse(fs.readFileSync("gastos.json", "utf8"));
      let gastos = gastosJSON.gastos;
      let body;
      req.on("data", (payload) => {
        body = JSON.parse(payload);
      });
      req.on("end", () => {
        gastosJSON.gastos = gastos.map((b) => {
          if (b.id == id) {
            body.id = id;
            return body;
          }
          return b;
        });
        fs.writeFileSync("gastos.json", JSON.stringify(gastosJSON));
        recalcularDeudas();
        res.end();
      });
    }
  })
  .listen(3000, () => console.log("Escuchando el puerto 3000"));
