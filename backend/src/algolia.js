require("dotenv").config();
const { algoliasearch } = require("algoliasearch");

const client = algoliasearch(process.env.ALGOLIA_APP, process.env.ALGOLIA_KEY);

async function userSkills(userid, skills) {
  await client.saveObject({
    indexName: "users_skills",
    body: { objectID: userid, skills: skills.join(" ") },
  });
}

async function problemSkills(problemid, skills) {
  await client.saveObject({
    indexName: "problems_skills",
    body: { objectID: problemid, skills: skills.join(" ") },
  });
}

// (async () => {
//   await problemSkills("prob1", ["cleaning services", "laundry"]);
//   //   await client.saveObject({
//   //     indexName: "skills_index",
//   //     body: { objectID: "emma", skills: ["programming", "programmer"] },
//   //   });
// })();

module.exports = { userSkills, problemSkills };
