const redis = require('redis');

!(async function () {
  // 创建客户端
  const redisClient = redis.createClient(6379, '127.0.0.1')

  // 连接
  await redisClient.connect().then(() => console.log('redis connect success!')).catch(err => console.log('redis connect fail!', err))

  // 设置值
  await redisClient.set('myname', 'zhangsan', redis.print)

  // 获取值
  const myname = await redisClient.get('myname')
  console.log('myname', myname)

  // 退出
  redisClient.quit()
})()
