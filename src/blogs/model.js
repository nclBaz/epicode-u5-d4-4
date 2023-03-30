import { DataTypes } from "sequelize"
import sequelize from "../db.js"

const BlogsModel = sequelize.define("blog", {
  blogId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
})

export default BlogsModel
