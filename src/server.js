//---------------------Require
const express = require("express")
const cors = require("cors")
const db = require("./db")

//Routes
const articlesRouter = require("./services/articles")
const storiesRouter = require("./services/stories")
const reviewsRouter = require("./services/reviews")
const categoriesRouter = require("./services/categories")

//---------------------Instances
const server = express()

//-----------------------Use

server.use(cors())
server.use(express.json())
server.use("/articles", articlesRouter)
server.use("/stories", storiesRouter)
server.use("/reviews", reviewsRouter)
server.use("/categories", categoriesRouter)

//---------------------Listen
db.sequelize.sync({ force: true }).then((result) => {
  const port = process.env.PORT || 3005
  server.listen(port, () => console.log("server created on port", port))
})
