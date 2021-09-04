const http = require("http");
const jimp = require("jimp");
const url = require("url");
const fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    const params = url.parse(req.url, true).query;
    const urlImagen = params.image;

    if (req.url.includes("/index.html")) {
      fs.readFile("index.html", "utf-8", (err, data) => {
        res.end(data);
      });
    }
    if (req.url == "/estilos") {
      res.writeHead(200, { "Content-Type": "text/css" });
      fs.readFile("estilos.css", (err, css) => {
        res.end(css);
      });
    }
    if (req.url.includes("/imagen.html")) {
      jimp.read(`${urlImagen}`, (err, imagen) => {
        imagen
          .resize(350, jimp.AUTO)
          .greyscale()
          .quality(60)
          .writeAsync("newImg.jpg")
          .then(() => {
            fs.readFile("newImg.jpg", (err, Imagen) => {
              res.writeHead(200, { "Content-Type": "image/jpeg" });
              res.end(Imagen);
            });
          });
      });
    }
  })
  .listen(8080, () => console.log("Escuchando el puerto 8080"));
