const express = require("express")
const { Op } = require("sequelize")

const router = express.Router()

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const categories = await Category.findAll({})
      res.send(categories)
    } catch (err) {
      console.log(err)
      next(err)
    }
  })
  .post(async (req, res, next) => {
    try {
      const newCategory = await Category.create(req.body)
      res.send(newCategory)
    } catch (err) {
      console.log(err)
      next(err)
    }
  })

router
  .route("/:categoryId")
  .put(async (req, res, next) => {
    try {
      //TODO
    } catch (err) {
      console.log(err)
      next(err)
    }
  })
  .delete(async (req, res, next) => {
    try {
      //TODO
    } catch (err) {
      console.log(err)
      next(err)
    }
  })

module.exports = router
