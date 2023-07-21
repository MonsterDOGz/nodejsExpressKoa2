const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

!(async function () {

  // 连接
  await redisClient.connect()
    .then(() => console.log('redis connect success!'))
    .catch(err => console.log('redis connect fail!', err))

})()


// 设置值
async function set(key, val) {
  let objVal
  if (typeof val === 'object') {
    objVal = JSON.stringify(val)
  } else {
    objVal = val
  }
  await redisClient.set(key, objVal, redis.print)
}

// 获取值
async function get(key) {
  try {
    let val = await redisClient.get(key)

    if (val === null)  return null

    try {
      val = JSON.parse(val) // 尝试转换成 js 对象
    } catch (err) {
    }
    return val

  } catch (err) {
    throw err
  }
}

module.exports = {
  set,
  get
}
