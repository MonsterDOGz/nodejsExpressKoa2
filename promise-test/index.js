// const fs = require('fs')
const fsPromise = require('fs').promises
const path = require('path')

// const getFileContent = (fileName, callback) => {
//   const fullFileName = path.resolve(__dirname, 'file', fileName)
//   fs.readFile(fullFileName, (err, data) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     callback(JSON.parse(data.toString()))
//   })
// }

// getFileContent('a.json', aData => {
//   console.log('a data', aData)
//   getFileContent(aData.next, bData => {
//     console.log('b data', bData)
//     getFileContent(bData.next, cData => {
//       console.log('c data', cData)
//     })
//   })
// })

const getFileContentPromise = (fileName) => {
  return new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'file', fileName)
    // fs.readFile(fullFileName, (err, data) => {
    //   if (err) {
    //     reject(err)
    //   }
    //   resolve(JSON.parse(data.toString()))
    // })
    fsPromise.readFile(fullFileName).then(data => {
      resolve(JSON.parse(data.toString()))
    }).catch(err => {
      reject(err)
    })
  })
}

// getFileContentPromise('a.json').then(aData => {
//   console.log('a data', aData)
//   return getFileContentPromise(aData.next)
// }).then(bData => {
//   console.log('b data', bData)
//   return getFileContentPromise(bData.next)
// }).then(cData => {
//   console.log('c data', cData)
// })

const getFileContentAsync = async (fileName) => {
  const aData = await getFileContentPromise(fileName)
  console.log('a data', aData)
  const bData = await getFileContentPromise(aData.next)
  console.log('b data', bData)
  const cData = await getFileContentPromise(bData.next)
  console.log('c data', cData)
}
getFileContentAsync('a.json')




















