const { MongoClient } = require("mongodb");
const mongoIP = "mongo";
const uri = `mongodb://patika:lizaliza@${mongoIP}:27017/?maxPoolSize=20`;
// const uri = mongodb://username:password@host:port/databasename
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("::> MongoDB Server is Ready");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

module.exports = client;

/* CREATE COLLECTION EXAMPLE
const db = mongo_client.db('kisi');
db.createCollection('kisiler', (err, result) => {
    if (err) throw err;
    console.log('Koleksiyon oluşturuldu.');
    mongo_client.close();
});*/
