const { Pool } = require("pg");
const Cursor = require("pg-cursor");
const argumentos = process.argv.slice(2);
let tipoQuery = String(argumentos[0]);

const config = {
  user: "postgres",
  host: "localhost",
  password: "7261",
  database: "Banco",
  port: 5432,
};

const pool = new Pool(config);

let addTransaccion = (pool, descripcion, fecha, monto, cuenta) => {
  pool.connect(async (error_conexion, client, release) => {
    await client.query("BEGIN");
    try {
      const agregar = `insert into transacciones (descripcion, fecha, monto, cuenta) 
      values ('${descripcion}', '${fecha}', ${monto}, ${cuenta})`;
      await client.query(agregar);;
      const asdf = `update cuentas set saldo = saldo - ${monto} where id = ${cuenta}`;
      await client.query(asdf);
      await client.query("COMMIT");
    } catch (e) {
      await client.query("ROLLBACK");
      console.log("Error código: " + e);
      console.log("Detalle del error: " + e);
      console.log("Tabla originaria del error: " + e);
      console.log("Restricción violada en el campo: " + e);
    }
    release();
    pool.end();
  });
};

let consulta10Transaccion = (pool) => {
  pool.connect(async (error_conexion, client, release) => {
    const consulta = new Cursor("select * from transacciones");
    const cursor = await client.query(consulta);
    cursor.read(10, (err, rows) => {
      console.log(rows);
      cursor.close();
      release();
      pool.end();
    });
  });
};

let consultaXCuenta = (pool, cuenta) => {
  pool.connect(async (error_conexion, client, release) => {
    const consulta = new Cursor(
      `select saldo from cuentas where id = ${cuenta}`
    );
    const cursor = await client.query(consulta);
    cursor.read(1, (err, rows) => {
      if (err) {
        console.log(err);
      }
      console.log(rows);
      cursor.close();
      release();
      pool.end();
    });
  });
};

switch (tipoQuery) {
    case "addTransaccion": {
        let descripcionAgregar = String(argumentos[1]); 
        let fechaAgregar = String(argumentos[2]);
        let montoAgregar = String(argumentos[3]);
        let cuentaAgregar = String(argumentos[4]);
        addTransaccion(pool, descripcionAgregar, fechaAgregar, montoAgregar, cuentaAgregar)
        break;
    }
    case "listar10Transaccion": {
        consulta10Transaccion(pool)
        break;
    }
    case "saldoCuenta":{
        let cuentaConsulta = String(argumentos[1]);
        consultaXCuenta(pool, cuentaConsulta)
        break;
    }
    default: {
        console.log("Parametro no válido")
        break;
    }

}


