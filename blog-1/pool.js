const mysql = require('mysql')
const pool = mysql.createPool({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '123zhoujie123',
  database: 'nodejs_blog1',
  connectionLimit: 20
})

// 导出连接池对象
module.exports = pool
