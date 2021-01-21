const express = require("express")
const Article = require("../../db")

const router = express.Router()

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Article.findAll()
      res.send(data)
    } catch (err) {
      console.log(err)
      next(err)
    }
  })
  .post(async (req, res, next) => {
    try {
      const newElement = await Article.create(req.body)
      res.send(newElement)
    } catch (err) {
      console.log(err)
      next(err)
    }
  })

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
    } catch (err) {
      console.log(err)
      next(err)
    }
  })
  .put(async (req, res, next) => {
    try {
    } catch (err) {
      console.log(err)
      next(err)
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (err) {
      console.log(err)
      next(err)
    }
  })

module.exports = router
