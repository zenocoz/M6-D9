const express = require("express")
const Article = require("../../db").Article
const Author = require("../../db").Author
const Review = require("../../db").Review
const { Op } = require("sequelize")

const router = express.Router()

router.route("/:articleId").get(async (req, res, next) => {
  try {
    const reviews = await Review.findAll({ include: [Article, Author] })
    res.send(reviews)
  } catch (err) {
    console.log(err)
    next(err)
  }
})

// router.route("/:authorId").get(async (req, res, next) => {
//   try {
//     const story = await Story.findAll({
//       include: [Article, Author],
//       where: { authorId: req.params.authorId },
//     })
//     res.send(story)
//   } catch (err) {
//     console.log(err)
//     next(err)
//   }
// })

router
  .route("/:articleId/:authorId")
  .post(async (req, res, next) => {
    try {
      const newReview = await Review.create({
        authorId: req.params.authorId,
        articleId: req.params.articleId,
      })
      res.send(newReview)
    } catch (err) {
      console.log(err)
      next(err)
    }
  })
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
