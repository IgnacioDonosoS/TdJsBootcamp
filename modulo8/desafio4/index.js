const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {
  nuevoCurso,
  getCursos,
  editCurso,
  deleteCurso,
} = require("./consultas");
app.use(bodyParser.json());

app.listen(3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/cursos", async (req, res) => {
  const respuesta = await getCursos();
  res.send(respuesta);
});

app.post("/curso", async (req, res) => {
  const { nombre, nivelTecnico, fechaInicio, duracion } = req.body;
  let data = { nombre, nivelTecnico, fechaInicio, duracion };
  const respuesta = await nuevoCurso(data);
  res.send(respuesta);
});

app.put("/curso", async (req, res) => {
  const { id, nombre, nivelTecnico, fechaInicio, duracion } = req.body;
  let data = { id, nombre, nivelTecnico, fechaInicio, duracion };
  const respuesta = await editCurso(data);
  res.send(respuesta);
});

app.delete("/curso/:id", async (req, res) => {
  const { id } = req.params;
  const respuesta = await deleteCurso(id);
  respuesta > 0
    ? res.send(`El actor de id ${id} fue elimado con éxito`)
    : res.send("No existe un actor registrado con ese id");
});
