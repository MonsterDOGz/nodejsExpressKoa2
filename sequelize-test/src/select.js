const Sequelize = require('sequelize')
const {User, Blog} = require('./model')

!(async function () {

  // 登录，查询一条数据
  // const zhangsan = await User.findOne({
  //   // 查询条件
  //   where: {
  //     username: 'zhangsan',
  //     password: '123'
  //   }
  // })
  // if (zhangsan) {
  //   console.log('zhangsan', zhangsan.dataValues)
  // } else {
  //   console.log(zhangsan) // null
  // }

  // 查询多条数据，博客列表
  const blogList = await Blog.findAll({
    // 查询条件
    where: {
      author: 'zhangsan',
      title: {
        [Sequelize.Op.like]: '%标题%' // 模糊查询，和 sql 语句 like 一样
      }
    },
    // 排序
    order: [
      ['id', 'desc'] // sql 语句：order by id desc
    ]
  })
  console.log('blogList', blogList.map(blog => blog.dataValues))
  // 如果查询没有数据，则返回空数组 []

})()
