//---------------------Require
const express = require("express")
const cors = require("cors")
const db = require("./db")

//Routes
const articlesRouter = require("./services/articles")
const storiesRouter = require("./services/stories")

//---------------------Instances
const server = express()

//-----------------------Use

server.use(cors())
server.use(express.json())
server.use("/articles", articlesRouter)
server.use("/stories", storiesRouter)

//---------------------Listen
db.sequelize.sync({ force: false }).then((result) => {
  const port = process.env.PORT || 3005
  server.listen(port, () => console.log("server created on port", port))
})
