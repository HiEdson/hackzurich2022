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
  const users_id = {};
  const requests = skills.map((skill) => ({
    indexName: "users_skills",
    query: skill,
  }));
  const results = await client.search({ requests });
  for (let result of results.results)
    for (let hit of result.hits) {
      let count = users_id[hit.objectID] || 0;
      users_id[hit.objectID] = count + 1;
    }
  let _users = Object.keys(users_id);
  _users.sort((x, y) => {
    if (users_id[x] > users_id[y]) return -1;
    if (users_id[x] < users_id[y]) return -1;
    return 0;
  });
  const users = await getUsersFromId(_users, users_id);
  return users;
}

async function getCausesFromSkills(skills) {
  const causes_id = {};
  const requests = skills.map((skill) => ({
    indexName: "problems_skills",
    query: skill,
  }));
  const results = await client.search({ requests });
  for (let result of results.results)
    for (let hit of result.hits) {
      let count = causes_id[hit.objectID] || 0;
      causes_id[hit.objectID] = count + 1;
    }
  let _causes = Object.keys(causes_id);
  // console.log(causes_id);
  _causes.sort((x, y) => {
    if (causes_id[x] > causes_id[y]) return -1;
    if (causes_id[x] < causes_id[y]) return -1;
    return 0;
  });
  const causes = await getCausesFromId(_causes, causes_id);
  return causes;
}

(async () => {
  // let d = await getCausesFromSkills(["software"]);
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
