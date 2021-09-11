const { Pool } = require("pg");

const config = {
  user: "postgres",
  host: "localhost",
  password: "7261",
  database: "repertorio",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000,
};
const pool = new Pool(config);

let agregarCancion = (pool, cancion) => {
  pool.connect(async (error_conexion, client) => {
    const SQLQuery = {
      rowMode: "array",
      text: "insert into repertorio (cancion, artista, tono) values ($1, $2, $3) RETURNING *",
      values: cancion,
    };
    try {
      const res = await client.query(SQLQuery);
      console.log("Canción agregada: ", res.rows);
    } catch (error) {
      console.log(error.code);
    }
  });
};

const consultarCanciones = async () => {
  try {
    const result = await pool.query("SELECT * FROM repertorio");
    return result.rows;
  } catch (error) {
    console.log(error.code);
    return error;
  }
};

let editarCancion = (pool, editar) => {
  pool.connect(async (error_conexion, client) => {
    const SQLQuery = {
      rowMode: "array",
      text: "update repertorio set cancion = $1, artista = $2, tono = $3 where id = $4 RETURNING *",
      values: editar,
    };
    try {
      const res = await client.query(SQLQuery);
      console.log("Canción editada: ", res.rows);
    } catch (error) {
      console.log(error.code);
    }
  });
};

let borrarCancion = (pool, id) => {
  pool.connect(async (error_conexion, client) => {
    try {
      const res = await client.query(`delete from repertorio where id = ${id}`);
      console.log("Canción eliminada: ", res.rows);
    } catch (error) {
      console.log(error.code);
    }
  });
};

module.exports = { agregarCancion, consultarCanciones, editarCancion, borrarCancion };
