const Blog = require('../models/Blog')

!(async () => {

  // 新建博客
  // const blog1 = await Blog.create({
  //   title: '博客1',
  //   content: '博客1内容',
  //   author: 'zhangsan'
  // })
  // console.log('blog1', blog1)

  // 获取列表
  // const list = await Blog.find({
  //   // author: 'zhangsan'
  //   title: /2/ // 正则表达式，模糊查询
  // }).sort({ _id: -1 })
  // console.log('list', list)

  // 根据 id 获取单个博客
  // const blog = await Blog.findById('64d2f82a2371920e6532fac1')
  // console.log('blog', blog)

  // 更新博客
  // const res = await Blog.findOneAndUpdate(
  //   { _id: '64d2f82a2371920e6532fac1' },
  //   {
  //     content: '内容222222'
  //   },
  //   {
  //     new: true // 返回修改之后的最新的内筒，默认为false
  //   }
  // )
  // console.log('res', res)

  // 删除博客
  const res = await Blog.findOneAndDelete({
    _id: '64d2f82a2371920e6532fac1',
    author: 'zhangsan' // 验证一下作者，增加安全性，防止误删
  })
  console.log('res', res)

})()