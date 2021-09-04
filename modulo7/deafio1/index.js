const argumentos = process.argv.slice(2);
let tipoQuery = String(argumentos[0]);

const { Client } = require("pg");
const config = {
  user: "postgres",
  host: "localhost",
  database: "desafio1",
  password: "7261",
  port: 5432,
};
const client = new Client(config);

let crearTabla = async (client) => {
  client.connect();
  const query = `CREATE TABLE curso (rut varchar, nombre varchar, curso varchar, nivel varchar )`;
  await client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Tabla creada");
    client.end();
  });
};
let nuevoEstudiante = async (client, nombre, rut, curso, nivel) => {
  client.connect();
  const query = `insert into curso (rut, nombre, curso, nivel) values ('${rut}', '${nombre}', '${curso}', '${nivel}') RETURNING *;`;
  await client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Alumno ingresado");
    client.end();
  });
};

let consulta = async (client) => {
  client.connect();
  const query = `select * from curso;`;
  await client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Alumnos: ", res.rows);
    client.end();
  });
};

let editarEstudiante = async (client, nombre, rut, curso, nivel) => {
  client.connect();
  const query = `update curso set nombre = '${nombre}', curso = '${curso}',  nivel = '${nivel}' where rut = '${rut}' RETURNING *;`;
  await client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Alumno modificado");
    client.end();
  });
};

let consultaRut = async (client, rut) => {
  client.connect();
  const query = `select * from curso where rut = '${rut}'`;
  await client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Alumnos: ", res.rows);
    client.end();
  });
};

let borrarEstudiante = async (client, rut) => {
  client.connect();
  const query = `delete from curso where rut = '${rut}' RETURNING *;`;
  await client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Alumno eliminado");
    client.end();
  });
};

switch (tipoQuery) {
  case "nuevo":
    let nombreIngreso = String(argumentos[1]);
    let rutIngreso = String(argumentos[2]);
    let cursoIngreso = String(argumentos[3]);
    let nivelIngreso = String(argumentos[4]);
    nuevoEstudiante(
      client,
      nombreIngreso,
      rutIngreso,
      cursoIngreso,
      nivelIngreso
    );
    break;
  case "consulta":
    consulta(client);
    break;
  case "editar":
    let nombreEditar = String(argumentos[1]);
    let rutEditar = String(argumentos[2]);
    let cursoEditar = String(argumentos[3]);
    let nivelEditar = String(argumentos[4]);
    editarEstudiante(client, nombreEditar, rutEditar, cursoEditar, nivelEditar);
    break;
  case "rut":
    let rutConsulta = String(argumentos[1]);
    consultaRut(client, rutConsulta);
    break;
  case "eliminar":
    let rutBorrar = String(argumentos[1]);
    borrarEstudiante(client, rutBorrar);
    break;
  default:
    console.log("parametro no aceptado");
}
