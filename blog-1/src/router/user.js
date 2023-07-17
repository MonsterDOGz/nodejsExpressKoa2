const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = async (req, res) => {
  const method = req.method

  // 登录
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    const result = await loginCheck(username, password)
    if (result.val) {
      return new SuccessModel(result.result, '登录成功')
    }
    return new ErrorModel('登录失败')
  }
}

module.exports = handleUserRouter