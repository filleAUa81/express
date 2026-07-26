global.crypto = require('crypto');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://2401340071sg_db_user:Fumi2026Mongo@fumi.xa4rdaq.mongodb.net/?retryWrites=true&w=majority&appName=Fumi";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("接続成功！");
  } finally {
    await client.close();
  }
}

run().catch(console.error);