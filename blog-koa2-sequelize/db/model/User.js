const Sequelize = require('sequelize')
const seq = require('../seq')

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

module.exports = User