const http = require('http');
const querystring = require('querystring');

const sever = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])

  res.setHeader('Content-type', 'aplication/json')

  const resData = {
    method,
    url,
    path,
    query
  }

  if (method === 'GET') {
    res.end(JSON.stringify(resData))
  } else if (method === 'POST') {
    let postData = ''
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resData.postData = postData
      res.end(JSON.stringify(resData))
    })
  }
});

sever.listen(3000);
console.log('OK');
