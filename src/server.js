//---------------------Require
const express = require("express")
const cors = require("cors")
const db = require("./db")

//Routes
const articlesRouter = require("./services/articles")

//---------------------Instances
const server = express()

//-----------------------Use

server.use(cors())
server.use(express.json())
server.use("/articles", articlesRouter)

//---------------------Listen
db.sequelize.sync({ force: true }).then((result) => {
  const port = process.env.PORT || 3005
  server.listen(port, () => console.log("server created on port", port))
})
