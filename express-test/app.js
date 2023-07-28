const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('开始处理请求');
  next();
})

app.use((req, res, next) => {
  console.log('处理cookie');
  req.cookie = {
    userId: 'abc123'
  }
  next();
})

app.use((req, res, next) => {
  setTimeout(() => {
    console.log('处理body');
    req.body = {
      a: 100,
      b: 200
    }
    next();
  })
})

app.use('/api', (req, res, next) => {
  console.log('处理api路由');
  next();
})

app.get('/api/get-cookie', (req, res, next) => {
  console.log('get /api/get-cookie');
  res.json({
    errno: 0,
    data: req.cookie
  })
})

app.post('/api/get-post-data', (req, res, next) => {
  console.log('post /api/get-post-data');
  res.json({
    errno: 0,
    data: req.body
  })
})

app.use((req, res, next) => {
  console.log('处理404');
  res.json({
    errno: -1,
    msg: '404 not found'
  })
})

app.listen(3333)

