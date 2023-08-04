const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'myblog';

const client = new MongoClient(url);


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');

  // 新增
  // const result = await collection.insertOne({
  //   username: 'zhoujie',
  //   password: '123'
  // });
  // console.log('result', result)

  // 修改
  // const result = await collection.updateOne(
  //   { username: 'zhoujie' },
  //   { $set: { realname: '周杰' } }
  // );
  // console.log('result', result)

  // 删除
  // const result = await collection.deleteOne({ username: 'zhoujie' });
  // console.log('result', result)

  // 查询
  const result = await collection.find(
    // {
    //   username: 'zhangsan',
    //   password: '123'
    // }
  ).toArray();
  console.log('result', result);

  return 'done.';
}

main()
  .then(console.log)
  .catch(err => console.error('mongodb connect error', err))
  .finally(() => client.close());

