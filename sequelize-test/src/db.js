const sequelize = require('sequelize')

const conf = {
  host: 'localhost',
  dialect: 'mysql', // 指定当前数据库使用 mysql
}

// 线上环境，使用连接池
// conf.pool = {
//   max: 5, // 连接池中最大的连接数量
//   min: 0, // 最小
//   idle: 10 * 1000, // 如果一个连接池 10 s 之内没有被使用，则释放
// }

// 创建 sequelize 实例
const seq = new sequelize(
  'koa2_weibo_db', // 数据库名称
  'root', // 用户名
  '123zhoujie123', // 密码
  conf
)

// 测试连接
// seq
//   .authenticate()
//   .then(() => {
//     console.log('sequelize connect success')
//   })
//   .catch(() => {
//     console.log('sequelize connect error')
//   })

module.exports = seq
