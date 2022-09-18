require("dotenv").config();
const { algoliasearch } = require("algoliasearch");
const { getUsersFromId, getCausesFromId } = require("./firebase");

const client = algoliasearch(process.env.ALGOLIA_APP, process.env.ALGOLIA_KEY);

async function userSkills(userid, skills) {
  const { taskID } = await client.saveObject({
    indexName: "users_skills",
    body: { objectID: userid, skills: skills.join(" ") },
  });
  await client.waitForTask({ indexName: "users_skills", taskID });
}

async function problemSkills(problemid, skills) {
  const { taskID } = await client.saveObject({
    indexName: "problems_skills",
    body: { objectID: problemid, skills: skills.join(" ") },
  });
  await client.waitForTask({ indexName: "problems_skills", taskID });
}

async function getUsersFromSkills(skills) {
  const users_id = new Set();
  const requests = skills.map((skill) => ({
    indexName: "users_skills",
    query: skill,
  }));
  const results = await client.search({ requests });
  for (let result of results.results)
    for (let hit of result.hits) users_id.add(hit.objectID);
  const users = await getUsersFromId(Array.from(users_id), skills);
  return users;
}

async function getCausesFromSkills(skills) {
  const causes_id = new Set();
  const requests = skills.map((skill) => ({
    indexName: "problems_skills",
    query: skill,
  }));
  const results = await client.search({ requests });
  for (let result of results.results)
    for (let hit of result.hits) causes_id.add(hit.objectID);
  const causes = await getCausesFromId(Array.from(causes_id), skills);
  return causes;
}

(async () => {
  // let d = await getCausesFromSkills(["teacher"]);
  // let d = await getUsersFromId(["cleaner", "TTNsmGCtCgKNeMIrrOqX"]);
  // console.log(d);
  // for (let i of d.results) console.log(i.hits);
  // await problemSkills("prob1", ["cleaning services", "laundry"]);
  //   await client.saveObject({
  //     indexName: "skills_index",
  //     body: { objectID: "emma", skills: ["programming", "programmer"] },
  //   });
})();

module.exports = {
  userSkills,
  problemSkills,
  getUsersFromSkills,
  getCausesFromSkills,
};
