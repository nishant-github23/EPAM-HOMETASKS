module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "nishant",
  DB: "userdb",
  DB_URL: "postgres://postgres:postgress@localhost:5432/userdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
