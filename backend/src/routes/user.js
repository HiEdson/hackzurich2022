const express = require("express");
const { createHash } = require("crypto");
const { getCollection, addDoc, query, getDocs, where } = require("../firebase");
const { userSkills, getCausesFromSkills } = require("../algolia");
const { fromSummary } = require("../openai");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { name, email, password, description } = req.body;
  const hash = createHash("sha256").update(password).digest("hex");
  const skills = await fromSummary(description);
  let causes = [];
  const usersCollection = getCollection("users");
  try {
    const ref = await addDoc(usersCollection, {
      name,
      email,
      password: hash,
      skills,
      description,
    });
    await userSkills(ref.id, skills);
    causes = await getCausesFromSkills(skills);
  } catch (e) {
    console.log("error occured", e);
    return res.json({ status: "error", causes: [] });
  }
  return res.json({ status: "done", causes });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const hash = createHash("sha256").update(password).digest("hex");
  const usersCollection = getCollection("users");
  const q = query(usersCollection, where("email", "==", email));
  const snapshot = await getDocs(q);
  // snapshot.docs.forEach((doc) => console.log("doc", doc.data()));
  const user = snapshot.docs?.[0]?.data();

  if (!user) return res.json({ status: "error" });
  if (user.password != hash) return res.json({ status: "error" });
  return res.json({ status: "done", user: user });
});

module.exports = router;
