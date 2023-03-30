import { DataTypes } from "sequelize"
import sequelize from "../db.js"
import UsersModel from "../users/model.js"

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

// 1 to many relationship
UsersModel.hasMany(BlogsModel, { foreignKey: { name: "userId", allowNull: false } })
BlogsModel.belongsTo(UsersModel, { foreignKey: { name: "userId", allowNull: false } })

export default BlogsModel
