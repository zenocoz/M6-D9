const express = require("express")
const Article = require("../../db").Article
const Category = require("../../db").Category
const { Op } = require("sequelize")

const router = express.Router()

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Article.findAll({
        include: {
          model: Category,
          where: req.query.category
            ? { c_name: { [Op.iLike]: "%" + req.query.category + "%" } }
            : {},
        },
        where: req.query.headline
          ? { headline: { [Op.iLike]: "%" + req.query.headline + "%" } }
          : {},
        offset: pareseInt(req.query.offset) | 0,
        limit: pareseInt(req.query.limit) | 10,
      })
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
      const data = await Article.findByPk(req.params.id, { include: Category })
      res.send(data)
    } catch (err) {
      console.log(err)
      next(err)
    }
  })
  .put(async (req, res, next) => {
    try {
      const updatedData = await Article.update(req.body, {
        returning: true,
        plain: true,
        where: { id: req.params.id },
      })
      res.send(updatedData[1])
    } catch (err) {
      console.log(err)
      next(err)
    }
  })
  .delete(async (req, res, next) => {
    try {
      Article.destroy({ where: { id: req.params.id } }).then((rowsDeleted) => {
        if (rowsDeleted > 0) {
          res.send("Deleted")
        } else {
          res.send("no match")
        }
      })
    } catch (err) {
      console.log(err)
      next(err)
    }
  })

module.exports = router
