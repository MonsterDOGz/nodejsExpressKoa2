const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = async (req, res) => {
  const method = req.method
  const id = req.query.id || ''

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author= req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = await getList(author, keyword)
    return new SuccessModel(listData)
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const data = await getDetail(id)
    return new SuccessModel(data)
  }

  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    const data = await newBlog(req.body)
    return new SuccessModel(data)
  }

  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = await updateBlog(id, req.body)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('更新博客失败')
    }
  }

  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const result = await delBlog(id)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('删除博客失败')
    }
  }
}

module.exports = handleBlogRouter