const express = require("express");
const { userSkills, problemSkills } = require("../algolia");
const { getCollection, addDoc, getDocs } = require("../firebase");
const { fromProblem } = require("../openai");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { title, description, email, name } = req.body;
  const causesCollection = getCollection("causes");
  const skills = await fromProblem(description);
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
  } catch (e) {
    console.log("error occured", e);
    return res.json({ status: "error" });
  }
  return res.json({ status: "done" });
});

router.post("/list", async (req, res) => {
  const { title, description, email, name, skills } = req.body;
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
