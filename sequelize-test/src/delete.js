const { Blog, User } = require('./model')

!(async function () {

  const res = await Blog.destroy(
    // 条件
    {
      where: {
        id: 3
      }
    }
  )
  console.log('res', res > 0)

  const res2 = await User.destroy(
    // 条件
    {
      where: {
        id: 2
      }
    }
  )
  console.log('res2', res2 > 0)

})()