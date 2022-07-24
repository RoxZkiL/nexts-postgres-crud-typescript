import { Pool } from "pg";

let connection: any;

if(!connection) {

    connection = new Pool({
        user: "postgres",
        password: "2216179",
        host: "localhost",
        port: 5432,
        database: "tasksdb"
    });
}

export { connection };

