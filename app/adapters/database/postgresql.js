const { Pool } = require("pg");

const pool = new Pool({
  user: "patika",
  password: "lizaliza",
  database: "patika_nodejs_bootcamp",
  host: "postgres"
});

try {
  pool.connect();
  console.log("::> PostgreSQL Server is Ready");
} catch (err) {
  console.log(err.stack);
}

module.exports = pool;
