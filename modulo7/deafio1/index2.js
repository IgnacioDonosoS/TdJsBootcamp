const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "desafio2",
  password: "7261",
  port: 5432,
});

let añadirEstudiante = async (nombre, rut, curso, nivel, client) => {
  client.connect();
  const query = `insert into curso (nombre, rut, curso, nivel) values ('${nombre}', '${rut}','${curso}', ${nivel})`;
  await client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("alumno insertado con exito");
    client.end();
  });
};

let listarEstudiantes = async (client) => {
  client.connect();
  const query = `select * from curso`;
  await client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Existen los siguientes estudiantes: ", res.rows);
    client.end();
  });
};

let listarEstudianteRut = async (client, rut) => {
    client.connect();
    const query = `select * from curso where rut = '${rut}'`;
    await client.query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("El rut corresponde al pelotudo/a: ", res.rows);
      client.end();
    });
  };
  listarEstudianteRut(client, "16308761-8")

  const query = `update curso set nombre = '${nombre}', curso = '${curso}',  nivel = '${nivel}' where rut = '${rut}'*;`;
