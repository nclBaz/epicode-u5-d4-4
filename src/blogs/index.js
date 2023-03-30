import express from "express"
import BlogsModel from "./model.js"
import UsersModel from "../users/model.js"
import BlogsCategoriesModel from "./blogsCategoriesModel.js"
import CategoriesModel from "../categories/model.js"

const blogsRouter = express.Router()

blogsRouter.post("/", async (req, res, next) => {
  try {
    const { blogId } = await BlogsModel.create(req.body)
    // When I create a new blog post, if that has to be associated with one or more categories I'll have to add one or more rows to the junction table (blogsCategories table), containing blogpostId and corresponding categoryId
    if (req.body.categories) {
      // ["de181145-f7d4-4c07-adf4-69dd01911ff0", "aaeb8a80-8a74-4917-a508-afaa3eea6787"] --> MAP --> [{blogId: blogId, categoryId:"de181145-f7d4-4c07-adf4-69dd01911ff0"}, {blogId: blogId, categoryId: "aaeb8a80-8a74-4917-a508-afaa3eea6787"}]
      await BlogsCategoriesModel.bulkCreate(
        req.body.categories.map(category => {
          return { blogId: blogId, categoryId: category }
        })
      )
    }
    res.status(201).send({ blogId })
  } catch (error) {
    next(error)
  }
})

blogsRouter.get("/", async (req, res, next) => {
  try {
    const blogs = await BlogsModel.findAll({
      attributes: ["title", "content"],
      include: [
        { model: UsersModel, attributes: ["firstName", "lastName"] },
        { model: CategoriesModel, attributes: ["name"], through: { attributes: [] } },
        // to exclude from the results the junction table rows --> through: { attributes: [] }
      ],
    })
    res.send(blogs)
  } catch (error) {
    next(error)
  }
})

blogsRouter.get("/:blogId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

blogsRouter.put("/:blogId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

blogsRouter.delete("/:blogId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

blogsRouter.post("/:blogId/categories", async (req, res, next) => {
  try {
    const { id } = await BlogsCategoriesModel.create({ blogId: req.params.blogId, categoryId: req.body.categoryId })
    res.send({ id })
  } catch (error) {
    next(error)
  }
})

export default blogsRouter
