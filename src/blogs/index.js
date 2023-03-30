import express from "express"
import BlogsModel from "./model.js"

const blogsRouter = express.Router()

blogsRouter.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

blogsRouter.get("/", async (req, res, next) => {
  try {
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
