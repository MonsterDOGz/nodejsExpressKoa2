const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'myblog';

const client = new MongoClient(url);


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('blogs');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(err => console.error('mongodb connect error', err))
  .finally(() => client.close());

