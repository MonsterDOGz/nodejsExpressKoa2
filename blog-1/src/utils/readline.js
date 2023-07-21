const fs = require('fs')
const path = require('path')
const readline = require('readline')

// 文件名
const fileName = path.resolve(__dirname, '../', '../', 'logs', 'access.log')
// 创建 read stream
const readStream = fs.createReadStream(fileName)

// 创建 readline 对象
const rl = readline.createInterface({
  input: readStream
})

let edgeNum = 0
let sum = 0

// 逐行读取
rl.on('line', (lineData) => {
  if (!lineData) {
    return
  }
  // 记录总行数
  sum++

  const arr = lineData.split(' -- ')
  if (arr[2] && arr[2].indexOf('Edg') > 0) {
    // 累加 edge 的数量
    edgeNum++
  }
})

// 监听读取完成
rl.on('close', () => {
  console.log('edge 占比：' + edgeNum / sum)
})


