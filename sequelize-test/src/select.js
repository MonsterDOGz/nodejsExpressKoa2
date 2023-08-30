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

  // 查询特定的列
  // const zhangsanName = await User.findOne({
  //   attributes: ['username', 'nickname'],
  //   where: {
  //     username: 'zhangsan',
  //   }
  // })
  // console.log('zhangsanName', zhangsanName.dataValues)

  // 查询多条数据，博客列表
  // const blogList = await Blog.findAll({
  //   // 查询条件
  //   where: {
  //     userId: 1,
  //     // title: {
  //     //   [Sequelize.Op.like]: '%标题%' // 模糊查询，和 sql 语句 like 一样
  //     // }
  //   },
  //   // 排序
  //   order: [
  //     ['id', 'desc'] // sql 语句：order by id desc
  //   ]
  // })
  // console.log('blogList', blogList.map(blog => blog.dataValues))
  // 如果查询没有数据，则返回空数组 []

  // 分页
  // const blogPageList = await Blog.findAll({
  //   limit: 2, // 限制本次查询 2 条
  //   offset: 0, // 跳过多少条
  //   order: [
  //     ['id', 'desc']
  //   ]
  // })
  // console.log('blogPageList', blogPageList.map(blog => blog.dataValues))

  // 查询总数
  // const blogListAndCount = await Blog.findAndCountAll({
  //   limit: 2, // 限制本次查询 2 条
  //   offset: 0, // 跳过多少条
  //   order: [
  //     ['id', 'desc']
  //   ]
  // })
  // console.log('blogListAndCount', blogListAndCount.count, blogListAndCount.rows.map(blog => blog.dataValues))

  // 连表查询1
  // const blogListWithUser = await Blog.findAndCountAll({
  //   order: [
  //     ['id', 'desc']
  //   ],
  //   include: [
  //     {
  //       model: User,
  //       attributes: ['userName', 'nickName'],
  //       where: {
  //         userName: 'zhangsan'
  //       }
  //     }
  //   ]
  // })
  // console.log(
  //   'blogListWithUser',
  //   blogListWithUser.count,
  //   blogListWithUser.rows.map(blog =>
  //     {
  //       const blogVal = blog.dataValues
  //       blogVal.user = blogVal.user.dataValues
  //       return blogVal
  //     }
  // ))

  // 连表查询2
  const userListWithBlog = await User.findAndCountAll({
    attributes: ['userName', 'nickName'],
    include: [
      {
        model: Blog,
      }
    ]
  })
  console.log(
    'userListWithBlog',
    userListWithBlog.count,
    userListWithBlog.rows.map(user => {
      const userVal = user.dataValues
      userVal.blogs = userVal.blogs.map(blog => {
        return blog.dataValues
      })
      return userVal
    })
  )

})()
