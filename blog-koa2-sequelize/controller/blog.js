const Sequelize = require('sequelize')
const Blog = require('../db/model/Blog')
const xss = require('xss')

async function getList(author = '', keyword = '') {
  const whereOpt = {}
  if (author) whereOpt.author = author
  if (keyword) whereOpt.title = {
    [Sequelize.Op.like]: `%${keyword}%`
  }

  const list = await Blog.findAll({
    // 条件
    where: whereOpt,
    // 排序
    order: [
      ['id', 'desc']
    ]
  })

  return list.map(item => item.dataValues)
}

async function getDetail(id) {
  const blog = await Blog.findOne({
    where: {
      id
    }
  })
  if (blog === null) return null
  return blog.dataValues
}

async function newBlog(blogData = {}) {
  const title = xss(blogData.title)
  const content = xss(blogData.content)
  const author = blogData.author

  const blog = await Blog.create({
    title,
    content,
    author
  })

  return {
    id: blog.dataValues.id
  }
}

async function updateBlog(id, blogData = {}) {
  const title = xss(blogData.title)
  const content = xss(blogData.content)

  res = await Blog.update(
    {
      title,
      content
    },
    {
      where: {
        id
      }
    }
  )

  if (res[0] >= 1) {
    return true
  }
  return false
}

async function delBlog(id, author) {
  const res = await Blog.destroy({
    where: {
      id,
      author
    }
  })

  if (res >= 1) {
    return true
  }
  return false
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
