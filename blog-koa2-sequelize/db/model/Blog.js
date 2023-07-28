const Sequelize = require('sequelize')
const seq = require('../seq')

// 创建 Blog 模型，数据表的名字是 blogs
const Blog = seq.define('blog', {
  // id 会自动创建，并设为主键、自增

  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT, // TEXT 储存大文件
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  // createdAt updatedAt 自动创建
})

module.exports = Blog