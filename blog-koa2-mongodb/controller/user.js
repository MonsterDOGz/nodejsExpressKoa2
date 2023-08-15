// const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/crpy')
const User = require('../db/models/User')

const login = async (username, password) => {
  // username = escape(username)

  // // 生成加密密码
  // password = genPassword(password)
  // password = escape(password)

  // const sql = `select username, realname from users where username=${username} and password=${password}`
  // const result = await exec(sql)
  // return result[0] || {}

  // 生成加密密码
  password = genPassword(password)

  const userList = await User.find({
    username,
    password
  })
  if (userList.length === 0) return {}
  return userList[0]
}

module.exports = {
  login
}