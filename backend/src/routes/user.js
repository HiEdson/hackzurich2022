const express = require("express");
const { createHash } = require("crypto");
const { getCollection, addDoc, query, getDocs, where } = require("../firebase");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, skills } = req.body;
  const hash = createHash("sha256").update(password).digest("hex");
  const usersCollection = getCollection("users");
  try {
    await addDoc(usersCollection, {
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
