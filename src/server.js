import Express from "express"
import cors from "cors"
import listEndpoints from "express-list-endpoints"
import { pgConnect } from "./db.js"
import usersRouter from "./users/index.js"
import blogsRouter from "./blogs/index.js"
import categoriesRouter from "./categories/index.js"
import { badRequestErrorHandler, genericErrorHandler, notFoundErrorHandler } from "./errorHandlers.js"

const server = Express()
const port = process.env.PORT || 3001

// **************************** MIDDLEWARES *******************************
server.use(cors())
server.use(Express.json())

// ****************************** ENDPOINTS *******************************
server.use("/users", usersRouter)
server.use("/blogs", blogsRouter)
server.use("/categories", categoriesRouter)

// *************************** ERROR HANDLERS *****************************
server.use(badRequestErrorHandler)
server.use(notFoundErrorHandler)
server.use(genericErrorHandler)

await pgConnect()

server.listen(port, () => {
  console.table(listEndpoints(server))
  console.log(`Server is running on port ${port}`)
})
