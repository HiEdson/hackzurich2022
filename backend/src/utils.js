const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
let init = false;

const dbName = "hackZurich2022";

async function getCollection(name) {
  if (!init) {
    await initializeDb();
    init = true;
  }
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(name);

  return collection;
}

async function initializeDb() {
  const users = await getCollection("users");
  users.createIndex({ email: 1 }, { unique: true });
  users.createIndex({ skills: 1 });

  const skills = await getCollection("skills");
  skills.createIndex({ userid: 1 });
  skills.createIndex({ userid: 1, name: 1 }, { unique: true });
}

module.exports = { getCollection };

// users schema
// user = {
//     id,
//     firstName,
//     lastName,
//     email,
//     password,
//     skills: [skill1, skill2, ...]
// }

// skills schema
// skill = {
//     id,
//     userid,
//     name,
//     score: 100 as default
// }
