const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
let init = false;

const dbName = "hackZurich2022";

export async function getCollection(name) {
  if (!init) {
    await initializeDb();
    init = true;
  }
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(name);

  return collection;
}

async function initializeDb() {}
