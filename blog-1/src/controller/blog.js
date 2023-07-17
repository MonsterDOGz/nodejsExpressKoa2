const pool = require('../../pool')

// ？？？？？？？？？？？？？？如何实现模糊搜素，以及多表联查
const getList = (author, keyword) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM nodejs_blog1_blog'
    pool.query(sql, [], (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })
}

const getDetail = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM nodejs_blog1_blog WHERE bid=?'
    pool.query(sql, [id], (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })
}

// ？？？？？？？？？？？？？？如何实现当前用户 id 获取
const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title content 属性
  return {
    id: 3 // 表示新建博客，插入到数据表里面的 id
  }
}

const updateBlog = (id, blogData = {}) => {
  // id 就是要更新博客的 id
  return true
}

// ？？？？？？？？？？？？？？如何实现虚拟删除
const delBlog = (id) => {
  // id 就是要删除博客的 id
  return false
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
