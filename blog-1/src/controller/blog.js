const { exec } = require('../db/mysql')
const xss = require('xss')

const getList = (author, keyword) => {
  let sql = 'select * from blogs where 1=1'
  if (author) {
    sql += ` and author='${author}'`
  }
  if (keyword) {
    sql += ` and title like '%${keyword}%'`
  }
  sql += ' order by createtime desc;'

  // 返回 promise
  return exec(sql)
}

const getDetail = (id) => {
  let sql = `select * from blogs where id=${id}`
  return exec(sql).then(rows => {
    return rows[0]
  })
}

const newBlog = (blogData = {}, id) => {
  const { title, content, author } = blogData
  const sql = `insert into blogs (title, content, createtime, author) values ('${xss(title)}', '${xss(content)}', ${Date.now()}, '${author}');`
  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId
    }
  })
}

const updateBlog = (id, blogData = {}) => {
  // id 就是要更新博客的 id
  const { title, content } = blogData
  const sql = `update blogs set title='${xss(title)}', content='${xss(content)}' where id=${id};`
  return exec(sql).then(updateData => {
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

const delBlog = (id, author) => {
  const sql = `delete from blogs where id=${id} and author='${author}';`
  return exec(sql).then(delData => {
    if (delData.affectedRows > 0) {
      return true
    }
    return false
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
