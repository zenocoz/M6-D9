const express = require("express")
const Article = require("../../db").Article
const Story = require("../../db").Story
const Author = require("../../db").Author
const { Op } = require("sequelize")

const router = express.Router()

router.route("/").get(async (req, res, next) => {
  try {
    const stories = await Story.findAll({ include: [Article, Author] })
    res.send(stories)
  } catch (err) {
    console.log(err)
    next(err)
  }
})

router.route("/:authorId").get(async (req, res, next) => {
  try {
    const story = await Story.findAll({
      include: [Article, Author],
      where: { authorId: req.params.authorId },
    })
    res.send(story)
  } catch (err) {
    console.log(err)
    next(err)
  }
})

router
  .route("/:authorId/:articleId")
  .post(async (req, res, next) => {
    try {
      const newStory = await Story.create({
        authorId: req.params.authorId,
        articleId: req.params.articleId,
      })
      res.send(newStory)
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
