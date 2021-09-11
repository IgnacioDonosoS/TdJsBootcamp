const url = require("url");
const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "7261",
  database: "gym",
  port: 5432,
});

const insertar = async (datos) => {
const consulta = {
text: "INSERT INTO ejercicios values($1, $2, $3, $4)",
values: datos,
};
try {
const result = await pool.query(consulta);
return result;
} catch (error) {
console.log(error.code);
return error;
}
};
module.exports = { insertar };
