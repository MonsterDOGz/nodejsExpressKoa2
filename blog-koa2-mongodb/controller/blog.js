// const { exec } = require('../db/mysql')
const xss = require('xss')
const Blog = require('../db/models/Blog')

const getList = async (author, keyword) => {
  // let sql = 'select * from blogs where 1=1'
  // if (author) {
  //   sql += ` and author='${author}'`
  // }
  // if (keyword) {
  //   sql += ` and title like '%${keyword}%'`
  // }
  // sql += ' order by createtime desc;'

  // // 返回 promise
  // return await exec(sql)

  const whereOpt = {}
  if (author) whereOpt.author = author
  if (keyword) whereOpt.keyword = new RegExp(keyword)

  const list = await Blog.find(whereOpt).sort({ _id: -1 })
  return list
}

const getDetail = async (id) => {
  // let sql = `select * from blogs where id=${id}`
  // const rows = await exec(sql)
  // return rows[0]
  const blog = await Blog.findById(id)
  return blog
}

const newBlog = async (blogData = {}, id) => {
  // const { title, content, author } = blogData
  // const sql = `insert into blogs (title, content, createtime, author) values ('${xss(title)}', '${xss(content)}', ${Date.now()}, '${author}');`
  // const insertData = await exec(sql)
  // return {
  //   id: insertData.insertId
  // }

  const title = xss(blogData.title)
  const content = xss(blogData.content)
  const author = blogData.author

  const blog = await Blog.create({
    title,
    content,
    author
  })

  return {
    id: blog._id
  }
}

const updateBlog = async (id, blogData = {}) => {
  // id 就是要更新博客的 id
  // const { title, content } = blogData
  // const sql = `update blogs set title='${xss(title)}', content='${xss(content)}' where id=${id};`
  // const updateData = await exec(sql)
  // if (updateData.affectedRows > 0) {
  //   return true
  // }
  // return false

  const title = xss(blogData.title)
  const content = xss(blogData.content)

  const blog = await Blog.findOneAndUpdate(
    {
      _id: id
    },
    {
      title,
      content
    },
    {
      new: true
    }
  )

  if (blog === null) return false
  return true
}

const delBlog = async (id, author) => {
  // const sql = `delete from blogs where id=${id} and author='${author}';`
  // const delData = await exec(sql)
  // if (delData.affectedRows > 0) {
  //   return true
  // }
  // return false

  const blog = await Blog.findOneAndDelete({
    _id: id,
    author
  })

  if (blog === null) return false
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
