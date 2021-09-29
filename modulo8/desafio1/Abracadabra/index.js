const express = require("express");
const app = express();

const usuarios = {
  usuarios: ["ignacio", "emilio", "jose", "ruth", "dani", "nico", "cristían"],
};

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});

app.use(express.static("./assets"));

app.get("/abracadabra/users", (req, res) => {
  res.send(usuarios);
});

app.use("/abracadabra/juego/:usuario", (req, res, next) => {
  let usuario = req.params.usuario;
  usuarios.usuarios.includes(usuario)
    ? next()
    : res.sendFile(__dirname + "/assets/who.jpeg");
});

app.get("/abracadabra/juego/:usuario", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/abracadabra/conejo/:n", (req, res) => {
  const numero = req.params.n;
  numeroRandom = Math.floor(Math.random() * (4 - 1)) + 1;
  numero == numeroRandom
    ? res.sendFile(__dirname + "/assets/conejito.jpg")
    : res.sendFile(__dirname + "/assets/voldemort.jpg");
});

app.get("*", (req, res) => {
  res.send("página no válida");
});
