const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    password: "2^P458QE6@Q#^gx6EXA3",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;