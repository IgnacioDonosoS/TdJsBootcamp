const { Pool } = require("pg");
/*Requerimientos
1. Realizar la conexión con PostgreSQL, utilizando la clase Pool y definiendo un
máximo de 20 clientes, 5 segundos como tiempo máximo de inactividad de un
cliente y 2 segundos de espera de un nuevo cliente.
2. Hacer todas las consultas con un JSON como argumento definiendo la propiedad
name para el Prepared Statement.
3. Hacer las consultas con texto parametrizado.
4. Liberar a un cliente al concluir su consulta.
5. Capturar los posibles errores en todas las consultas.
6. Retornar por consola un mensaje de error en caso de haber problemas de conexión.
7. Obtener el registro de los estudiantes registrados en formato de arreglos.*/

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

const queryJson = {
    agregar: true,
    consultar: true,
    consultarRut: true,
    actualizar: true,
    eliminar: true, 
}

const queryJson = {
    agregar: true,
    consultar: true,
    consultarRut: true,
    actualizar: true,
    eliminar: true, 
}
const queryJson = {
    agregar: true,
    consultar: true,
    consultarRut: true,
    actualizar: true,
    eliminar: true, 
}

pool.connect(async (error_conexion, client, release) => {
    const SQLQuery = {
        rowMode: "array",
        text: "insert into usuarios (id, nombre, telefono) values ($1, $2, $3) RETURNING *;",
        values: [5, "Jonathan", "87654321"],
    };
    try {
        const res = await client.query(SQLQuery);
        console.log("Ultimo registro agregado: ", res.rows);
    } catch (error) {
        console.log(error.code);
    }
    release();
    pool.end();
});