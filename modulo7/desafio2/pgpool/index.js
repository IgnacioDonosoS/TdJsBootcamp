const { Pool } = require("pg");
const argumentos = process.argv.slice(2);
let tipoQuery = String(argumentos[0]);

const config = {
  user: "postgres",
  host: "localhost",
  password: "7261",
  database: "desafio2",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000,
};
const pool = new Pool(config);

let anadirEstudiante = (pool, jsonAnadir) => {
  pool.connect(async (error_conexion, client, release) => {
    const SQLQuery = {
      name: "fetch-user",
      rowMode: "array",
      text: jsonAnadir.text,
      values: jsonAnadir.values,
    };
    try {
      const res = await client.query(SQLQuery);
      console.log("Cauro Agregado: ", res.rows);
    } catch (error) {
      console.log(error.code);
    }
    release();
    pool.end();
  });
};

let listarXRut = (pool, jsonSelectxRut) => {
  pool.connect(async (error_conexion, client, release) => {
    const SQLQuery = {
      name: "fetch-user",
      rowMode: "array",
      text: jsonSelectxRut.text,
      values: jsonSelectxRut.values,
    };
    try {
      const res = await client.query(SQLQuery);
      console.log("Lista de un cauro: ", res.rows);
    } catch (error) {
      console.log(error);
    }
    release();
    pool.end();
  });
};

let listarTodos = (pool, jsonSelect) => {
  pool.connect(async (error_conexion, client, release) => {
    const SQLQuery = {
      name: "fetch-user",
      rowMode: "array",
      text: jsonSelect.text,
    };
    try {
      const res = await client.query(SQLQuery);
      console.log("Listar todos los cauros: ", res.rows);
    } catch (error) {
      console.log(error.code);
    }
    release();
    pool.end();
  });
};

let editarXRut = (pool, jsonEdit) => {
  pool.connect(async (error_conexion, client, release) => {
    const SQLQuery = {
      name: "fetch-user",
      rowMode: "array",
      text: jsonEdit.text,
      values: jsonEdit.values,
    };
    try {
      const res = await client.query(SQLQuery);
      console.log("Cauro editado: ", res.rows);
    } catch (error) {
      console.log(error.code);
    }
    release();
    pool.end();
  });
};

let borrarXRut = (pool, jsonBorrar) => {
  pool.connect(async (error_conexion, client, release) => {
    const SQLQuery = {
      name: "fetch-user",
      rowMode: "array",
      text: jsonBorrar.text,
      values: jsonBorrar.values,
    };
    try {
      const res = await client.query(SQLQuery);
      console.log("Cauro eliminado: ", res.rows);
    } catch (error) {
      console.log(error.code);
    }
    release();
    pool.end();
  });
};

switch (tipoQuery) {
  case "listar":
    let jsonSelect = {
      text: "select * from curso;",
      values: [],
    };
    listarTodos(pool, jsonSelect);
    break;

  case "añadir":
    let añadirNombre = String(argumentos[1]);
    let añadirRut = String(argumentos[2]);
    let añadirCurso = String(argumentos[3]);
    let añadirNivel = String(argumentos[4]);
    let jsonAnadir = {
      text: `insert into curso (nombre, rut, curso, nivel) values ($1, $2, $3, $4) RETURNING *`,
      values: [añadirNombre, añadirRut, añadirCurso, añadirNivel],
    };
    anadirEstudiante(pool, jsonAnadir);
    break;

  case "rut":
    let buscarRut = String(argumentos[1]);
    console.log(buscarRut)
    let jsonSelectxRut = {
      text: "select * from curso where rut = $1",
      values: [buscarRut],
    };
    listarXRut(pool, jsonSelectxRut);
    break;

  case "borrar":
    let borrarRut = String(argumentos[1]);
    let jsonBorrar = {
      text: `delete from curso where rut = $1 RETURNING *`,
      values: [borrarRut],
    };
    borrarXRut(pool, jsonBorrar);
    break;

  case "editar":
    let editarNombre = String(argumentos[1]);
    let editarRut = String(argumentos[2]);
    let editarCurso = String(argumentos[3]);
    let editarNivel = String(argumentos[4]);
    let jsonEdit = {
      text: `update curso set nombre = $1, curso = $2,  nivel = $3 where rut = $4 RETURNING *`,
      values: [editarNombre, editarCurso, editarNivel, editarRut],
    };
    editarXRut(pool, jsonEdit);
    break;
  default:
    console.log("Parametro Inválido");
}
