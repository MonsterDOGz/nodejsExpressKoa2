const http = require('http')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  req.query = qs.parse(url.split('?')[1])

  res.setHeader('Content-type', 'application/json')

  const resData = {
    method,
    url,
    path,
    query: req.query,
  }

  if (method === 'GET') {
    res.end(JSON.stringify(resData))
  } else if (method === 'POST') {
    let postData = ''
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resData.postData = JSON.parse(postData)
      res.end(JSON.stringify(resData))
    })
  }
})

server.listen(8000)
console.log('OK')