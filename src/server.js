//---------------------Require
const express = require("express")
const cors = require("cors")
const sequelize = require("./db")

//---------------------Instances
const server = express()

//-----------------------Use

server.use(cors())
server.use(express.json())

//---------------------Listen
const port = process.env.PORT || 3005
server.listen(port, () => console.log("server created on port", port))
