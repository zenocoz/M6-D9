const { Sequelize, DataTypes } = require("sequelize")
const Article = require("./article.js")

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  { host: process.env.PGHOST, dialect: "postgres" }
)

const models = {
  Artice: Article(sequelize, DataTypes),
}

models.sequelize = sequelize
models.Sequelize = Sequelize

sequelize
  .authenticate()
  .then(() => {
    console.log("connection established")
  })
  .catch(() => {
    console.log("connection faikled", e)
  })

module.exports = models
