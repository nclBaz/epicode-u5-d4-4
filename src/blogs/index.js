import express from "express"
import BlogsModel from "./model.js"
import UsersModel from "../users/model.js"
import BlogsCategoriesModel from "./blogsCategoriesModel.js"

const blogsRouter = express.Router()

blogsRouter.post("/", async (req, res, next) => {
  try {
    const { blogId } = await BlogsModel.create(req.body)
    // When I create a new blog post, if that has to be associated with one or more categories I'll have to add one or more rows to the junction table (blogsCategories table), containing blogpostId and corresponding categoryId
    if (req.body.categories) {
      // ["de181145-f7d4-4c07-adf4-69dd01911ff0", "aaeb8a80-8a74-4917-a508-afaa3eea6787"] --> MAP --> [{blogsId: blogId, categoryId:"de181145-f7d4-4c07-adf4-69dd01911ff0"}, {blogsId: blogId, categoryId: "aaeb8a80-8a74-4917-a508-afaa3eea6787"}]
      await BlogsCategoriesModel.bulkCreate(
        req.body.categories.map(category => {
          return { blogsId: blogId, categoryCategoryId: category }
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
      include: { model: UsersModel, attributes: ["firstName", "lastName"] },
    })
    res.send(blogs)
  } catch (error) {
    next(error)
  }
})

blogsRouter.get("/:blogsId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

blogsRouter.put("/:blogsId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

blogsRouter.delete("/:blogsId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

export default blogsRouter
