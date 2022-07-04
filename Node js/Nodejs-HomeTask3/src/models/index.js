const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");
const { error, successful } = require("../constants/app.const.js");

const sequelize = new Sequelize(dbConfig.DB_URL, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

try {
  sequelize.authenticate();
  console.log(successful.connection);
} catch (error) {
  console.error(error.connection_failure, error);
}
sequelize
  .sync()
  .then(() => {
    console.log(successful.table);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = sequelize;
