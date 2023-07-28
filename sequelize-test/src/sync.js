const seq = require('./db')

// 需要同步的模型
require('./model')

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