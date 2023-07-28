const {User, Blog} = require('./model')

// await 语法，外部要有一个自执行 async 函数
// ! 号用来分割代码块，因为上一行代码没有分号结尾，所以这里需要加上 ! 号
!(async function () {

  // 创建 user
  const zhangsan = await User.create({
    username: 'zhangsan',
    password: '123',
    realname: '张三'
  })
  console.log('zhangsan', zhangsan.dataValues)

  // 创建博客
  const blog = await Blog.create({
    title: '标题222',
    content: '内容222',
    author: 'zhangsan',
  })
  console.log('blog', blog.dataValues)
})()