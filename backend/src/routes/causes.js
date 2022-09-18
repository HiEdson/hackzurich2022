const express = require("express");
const { userSkills, problemSkills, getUsersFromSkills } = require("../algolia");
const { getCollection, addDoc, getDocs } = require("../firebase");
const { fromProblem } = require("../openai");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { title, description, email, name } = req.body;
  const causesCollection = getCollection("causes");
  const skills = await fromProblem(description);
  let users = [];
  try {
    const ref = await addDoc(causesCollection, {
      title,
      description,
      email,
      name,
      skills,
      createdAt: new Date().getTime(),
    });
    await problemSkills(ref.id, skills);
    users = await getUsersFromSkills(skills);
  } catch (e) {
    console.log("error occured", e);
    return res.json({ status: "error", users: [] });
  }
  return res.json({ status: "done", users });
});

router.post("/list", async (req, res) => {
  const causesCollection = getCollection("causes");
  const causes = [];
  try {
    const docs = await getDocs(causesCollection);
    docs.forEach((doc) => causes.push(doc.data()));
  } catch (e) {
    console.log("error occured", e);
    return res.json({ status: "error" });
  }
  return res.json({ status: "done", causes });
});

module.exports = router;
