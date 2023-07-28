const seq = require('./seq')

// 需要同步的模型
require('./model/Blog')
require('./model/User')

// 测试连接
seq
  .authenticate()
  .then(() => {
    console.log('sequelize connect success')
  })
  .catch(() => {
    console.log('sequelize connect error')
  })

// 同步数据
seq.sync({ force: true }).then(() => {
  console.log('sync success')
  process.exit() // 退出进程
})