const express = require("express");
const app = express();
const expressFileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(
  expressFileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit:
      "El peso del archivo que intentas subir supera el limite permitido",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/formulario.html");
});


app.post("/imagen", (req, res) => {
  const { target_file } = req.files;
  const { posicion } = req.body;
  target_file.mv(`${__dirname}/public/imgs/imagen-${posicion}.jpg`, (err) => {
    res.sendFile(__dirname + "/collage.html");
  });
});

app.use(express.static("public/"));

app.get("/deleteimg/:nombre", (req, res) => {
  const { nombre } = req.params;
  console.log(nombre);
  fs.unlink(`${__dirname}/public/imgs/${nombre}`, (err) => {
    res.sendFile(__dirname + "/formulario.html");
  });
});

app.get("*", (req, res) => {
  res.send("página no encontrada");
});
app.listen(3000);
