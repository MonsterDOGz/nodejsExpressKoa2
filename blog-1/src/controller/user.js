const pool = require('../../pool')

const loginCheck = (uname, upwd) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM nodejs_blog1_user WHERE uname=? AND upwd=?'
    pool.query(sql, [uname, upwd], (err, result) => {
      if (err) reject(err)
      if (result.length > 0) {
        resolve({ val: true, result })
      } else {
        resolve({ val: false })
      }
    })
  })
}

module.exports = {
  loginCheck
}