const { Pool } = require("pg");
const Cursor = require("pg-cursor");
const argumentos = process.argv.slice(2);
let tipoQuery = String(argumentos[0]);

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "7261",
  database: "Banco",
  port: 5432,
});

const añadirTransaccion = (pool, descripcion, fecha, monto, cuenta) => {
  pool.connect(async (error_conexion, client, release) => {
    await client.query("BEGIN");
    try {
      const listarUltimo = `insert into transacciones (descripcion, fecha, monto, cuenta) values ('${descripcion}','${fecha}',${monto},${cuenta})`;
      await client.query(listarUltimo);
      await client.query("COMMIT");
    } catch (e) {
      await client.query("ROLLBACK");
      console.log("Error código: " + e.code);
      console.log("Detalle del error: " + e.detail);
      console.log("Tabla originaria del error: " + e.table);
      console.log("Restricción violada en el campo: " + e.constraint);
    }
    release();
    pool.end();
  });
};

let select10Tranacciones = (pool, cuenta) => {
  pool.connect((error_conexion, client, release) => {
    const consulta = new Cursor(
      `select * from transacciones where cuenta = ${cuenta}`
    );
    const cursor = client.query(consulta);
    cursor.read(10, (err, rows) => {
      console.log(rows);
      cursor.close();
      release();
      pool.end();
    });
  });
};

let selectSaldo = (pool, cuenta) => {
  pool.connect((error_conexion, client, release) => {
    const consulta = new Cursor(
      `select saldo from cuentas where id = ${cuenta}`
    );
    const cursor = client.query(consulta);
    cursor.read(1, (err, rows) => {
      console.log(rows);
      cursor.close();
      release();
      pool.end();
    });
  });
};

switch(tipoQuery){
    case "añadirT":
        let descripcionAnadir = String(argumentos[1]);
        let fechaAnadir = String(argumentos[2]);
        let montoAnadir = String(argumentos[3]);
        let cuentaAnadir = String(argumentos[4]);
        añadirTransaccion(pool, descripcionAnadir, fechaAnadir, montoAnadir, cuentaAnadir)
        break;
    case "listar10":
        let cuentaListar10 = String(argumentos[1]);
        select10Tranacciones(pool, cuentaListar10)
        break;
    case "verSaldo":
        let cuentaSaldo = String(argumentos[1]);
        selectSaldo(pool, cuentaSaldo)
        break;
    default:
        console.log("parametro no aceptado")        
}