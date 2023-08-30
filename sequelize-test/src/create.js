const {User, Blog} = require('./model')

// await 语法，外部要有一个自执行 async 函数
// ! 号用来分割代码块，因为上一行代码没有分号结尾，所以这里需要加上 ! 号
!(async function () {

  // 创建 user
  const zhangsan = await User.create({
    userName: 'zhangsan',
    password: '123',
    nickName: '张三'
  })
  console.log('zhangsan', zhangsan.dataValues)
  const lisi = await User.create({
    userName: 'lisi',
    password: '123',
    nickName: '李四'
  })
  console.log('lisi', lisi.dataValues)

  // 创建博客
  const blog1 = await Blog.create({
    title: '标题1',
    content: '内容1',
    userId: zhangsan.dataValues.id,
  })
  const blog2 = await Blog.create({
    title: '标题2',
    content: '内容2',
    userId: zhangsan.dataValues.id,
  })
  const blog3 = await Blog.create({
    title: '标题3',
    content: '内容3',
    userId: zhangsan.dataValues.id,
  })
  const blog4 = await Blog.create({
    title: '标题4',
    content: '内容4',
    userId: lisi.dataValues.id,
  })
})()