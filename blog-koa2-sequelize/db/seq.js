const sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')

const ENV = process.env.NODE_ENV

const conf = {
  host: MYSQL_CONF.host,
  dialect: 'mysql', // 指定当前数据库使用 mysql
}

if (ENV === 'production') {
  // 线上环境，使用连接池
  conf.pool = {
    max: 5, // 连接池中最大的连接数量
    min: 0, // 最小
    idle: 10 * 1000, // 如果一个连接池 10 s 之内没有被使用，则释放
  }
}

// 创建 sequelize 实例
const seq = new sequelize(
  MYSQL_CONF.database_seq, // 数据库名称
  MYSQL_CONF.user, // 用户名
  MYSQL_CONF.password, // 密码
  conf
)

// 测试连接
seq
  .authenticate()
  .then(() => {
    console.log('sequelize connect success')
  })
  .catch(() => {
    console.log('sequelize connect error')
  })

module.exports = seq
