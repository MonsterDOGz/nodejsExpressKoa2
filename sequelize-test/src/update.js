const { Blog } = require('./model')

!(async function () {

  const res = await Blog.update(
    // 要修改的内容
    {
      title: '标题update',
      content: '内容update'
    },
    // 条件
    {
      where: {
        id: 200
      }
    }
  )
  console.log('res', res[0] > 0)

})()