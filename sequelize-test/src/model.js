const Sequelize = require('sequelize')
const seq = require('./db')

// 创建 User 模型，数据表的名字是 users（自动加 s， 英语复数）
const User = seq.define('user', {
  // id 会自动创建，并设为主键、自增

  username: {
    type: Sequelize.STRING, // varchar(255)
    allowNull: false, // 不允许为空
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  realname: {
    type: Sequelize.STRING,
  },
})

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

module.exports = {
  User,
  Blog
}