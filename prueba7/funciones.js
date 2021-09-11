const { Pool } = require("pg");

const config = {
  user: "postgres",
  host: "localhost",
  password: "7261",
  database: "bancosolar",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000,
};

const pool = new Pool(config);

const consultarUsuarios = async () => {
  try {
    const result = await pool.query("SELECT * FROM usuarios");
    return result.rows;
  } catch (error) {
    console.log(error.code);
    return error;
  }
};

const consultarTransferencias = async () => {
  try {
    const consulta = {
      rowMode: "array",
      text: "SELECT (select nombre from usuarios where id = emisor) as emisor, (select nombre from usuarios where id = receptor) as receptor, monto, fecha FROM transferencias"
    }
    const result = await pool.query(consulta);
    return result.rows;
  } catch (error) {
    console.log(error);
    return error;
  }
};

let agregarUsuario = (usuario) => {
  pool.connect(async (error_conexion, client) => {
    try {
      const res = await client.query(
        `insert into usuarios (nombre, balance) values ('${usuario[0]}', ${usuario[1]}) returning *`
      );
      console.log("Usuario agregado: ", res.rows);
    } catch (error) {
      console.log(error);
    }
  });
};

let editarUsuario = (editar) => {
  pool.connect(async (error_conexion, client) => {
    try {
      const res = await client.query(
        `update usuarios set nombre = '${editar[0]}', balance = ${editar[1]} where id = ${editar[2]} returning *`
      );
      console.log("Usuario editado: ", res.rows);
    } catch (error) {
      console.log(error);
    }
  });
};

let borrarUsuario = (id) => {
  pool.connect(async (error_conexion, client) => {
    try {
      const res = await client.query(
        `delete from usuarios where id = ${id} returning *`
      );
      console.log("Usuario eliminado: ", res.rows);
    } catch (error) {
      console.log(error);
    }
  });
};

let realizarTransferencia = (datos) => {
  pool.connect(async (error_conexion, client) => {
    try {
      await client.query("BEGIN");
      const anadirReceptor = `update usuarios set balance = balance + ${datos[2]} where nombre = '${datos[1]}'`;
      await client.query(anadirReceptor);
      const descontarEmisor = `update usuarios set balance = balance - ${datos[2]} where nombre = '${datos[0]}'`;
      await client.query(descontarEmisor);
      const insertarTransferencia = `insert into transferencias (emisor, receptor, monto, fecha) values ((select id from usuarios where nombre = '${datos[0]}'), (select id from usuarios where nombre = '${datos[1]}'), ${datos[2]}, now())`;
      await client.query(insertarTransferencia);
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      console.log(error);
    }
  });
};

module.exports = {
  consultarUsuarios,
  consultarTransferencias,
  agregarUsuario,
  editarUsuario,
  borrarUsuario,
  realizarTransferencia,
};
