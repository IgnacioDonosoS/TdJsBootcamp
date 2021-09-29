const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

let vegetales = [
  "banana",
  "cebollas",
  "lechuga",
  "papas",
  "pimenton",
  "tomate",
];

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});

app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  exphbs({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/componentes/",
  })
);
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/")
);
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));

app.use(express.static("./assets"));

app.get("/", (req, res) => {
  res.render("main", { vegetales: vegetales });
});
