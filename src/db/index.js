const { Sequelize, DataTypes } = require("sequelize")
const Article = require("./article.js")
const Author = require("./author.js")
const Category = require("./category.js")
const Review = require("./review.js")
const Story = require("./story.js")

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  { host: process.env.PGHOST, dialect: "postgres" }
)

const models = {
  Article: Article(sequelize, DataTypes),
  Category: Category(sequelize, DataTypes),
  Author: Author(sequelize, DataTypes),
  Story: Story(sequelize, DataTypes),
  Review: Review(sequelize, DataTypes),
}

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) models[modelName].associate(models)
})

models.sequelize = sequelize
models.Sequelize = Sequelize

sequelize
  .authenticate()
  .then(() => {
    console.log("connection established")
  })
  .catch(() => {
    console.log("connection failed", e)
  })

module.exports = models
