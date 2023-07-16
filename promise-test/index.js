const fs = require('fs');
const path = require('path');

// const getFileContent = (fileName, callback) => {
//   const fullFileName = path.resolve(__dirname, 'file', fileName);
//   fs.readFile(fullFileName, (err, data) => {
//     if (err) {
//       return console.error(err);
//     }
//     callback(JSON.parse(data.toString()));
//   })
// }

// 测试 callback-hell
// getFileContent('a.json', aData => {
//   console.log('a data', aData);
//   getFileContent(aData.next, bData => {
//     console.log('b data', bData);
//     getFileContent(bData.next, cData => {
//       console.log('c data', cData);
//     })
//   })
// })

// 用 promise 获取文件内容
const getFileContentPromise = (fileName) => {
  return new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'file', fileName);
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(console.error(err));
      }
      resolve(JSON.parse(data.toString()));
    })
  })
}

// getFileContentPromise('a.json').then(aData => {
//   console.log('a data', aData);
//   return getFileContentPromise(aData.next)
// }).then(bData => {
//   console.log('b data', bData);
//   return getFileContentPromise(bData.next)
// }).then(cData => {
//   console.log('c data', cData);
// })

// 用 async await 获取文件内容
const getFileContentAsync = async (fileName) => {
  const aData = await getFileContentPromise(fileName);
  console.log('a data', aData);
  const bData = await getFileContentPromise(aData.next);
  console.log('b data', bData);
  const cData = await getFileContentPromise(bData.next);
  console.log('c data', cData);
}

getFileContentAsync('a.json');