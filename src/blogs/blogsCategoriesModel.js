import { DataTypes } from "sequelize"
import sequelize from "../db.js"

const BlogsCategoriesModel = sequelize.define("blogCategory", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
})

export default BlogsCategoriesModel
