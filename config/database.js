const {
  PGHOST = "localhost",
  PGPORT = "5432",
  PGUSER = "postgres",
  PGPASSWORD = "fendys",
  PGDATABASE = "fortunate-coffee",

  RPGHOST = "viaduct.proxy.rlwy.net",
  RPGPORT = "54940",
  RPGUSER = "postgres",
  RPGPASSWORD = "HhYtTjHIxVqDQsGbLAwmkLJXQDnTKdDA",
  RPGDATABASE = "railway"
} = process.env;

module.exports = {
  development: {
    username: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres"
  },
  test: {
    username: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres"
  },
  production: {
    username: RPGUSER,
    password: RPGPASSWORD,
    database: RPGDATABASE,
    host: RPGHOST,
    port: RPGPORT,
    dialect: "postgres",
  }
}