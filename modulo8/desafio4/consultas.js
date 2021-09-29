const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "7261",
  database: "cursos",
  port: 5432,
});

let nuevoCurso = async (data) => {
  try {
    const result = await pool.query(
      `insert into cursos (nombre, nivel, fecha, duracion) values ('${data.nombre}', ${data.nivelTecnico}, '${data.fechaInicio}', ${data.duracion}) returning *;`
    );
    return result.rows;
  } catch (e) {
    console.log(e);
    return e;
  }
};

let getCursos = async () => {
  try {
    const result = await pool.query(`SELECT * FROM cursos`);
    return result.rows;
  } catch (e) {
    console.log(e);
    return e;
  }
};

async function deleteCurso(id) {
  try {
    const result = await pool.query(`DELETE FROM cursos WHERE id =
    '${id}'`);
    return result.rowCount;
  } catch (e) {
    return e;
  }
}

async function editCurso(data) {
  try {
    const res = await pool.query(
      `UPDATE cursos SET nombre = '${data.nombre}', nivel = ${data.nivelTecnico}, fecha = '${data.fechaInicio}', duracion = ${data.duracion}  WHERE id = '${data.id}'
    RETURNING *`
    );
    return res.rows;
  } catch (e) {
    console.log(e);
    return e;
  }
}

module.exports = {
  nuevoCurso,
  getCursos,
  deleteCurso,
  editCurso,
};
