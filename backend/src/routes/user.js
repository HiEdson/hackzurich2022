const express = require("express");
const { getCollection } = require("../utils");
const { createHash } = require("crypto");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, skills } = req.body;
  const hash = createHash("sha256").update(password).digest("hex");
  const usersCollection = await getCollection("users");
  try {
    await usersCollection.insertOne({
      firstName,
      lastName,
      email,
      password: hash,
      skills,
    });
  } catch (e) {
    console.log("error occured", e);
    return res.json({ status: "error" });
  }
  return res.json({ status: "done" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const hash = createHash("sha256").update(password).digest("hex");
  const usersCollection = await getCollection("users");
  const user = await usersCollection.findOne({ email });

  if (!user) return res.json({ status: "error" });
  if (user.password != hash) return res.json({ status: "error" });
  return res.json({ status: "done", user: user });
});

module.exports = router;
