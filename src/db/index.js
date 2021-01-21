const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  { host: process.env.PGHOST, dialect: "postgres" }
)

sequelize
  .authenticate()
  .then(() => {
    console.log("connection established")
  })
  .catch(() => {
    console.log("connection faikled", e)
  })

module.exports = sequelize
