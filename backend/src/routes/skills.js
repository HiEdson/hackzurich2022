const express = require("express");
const { getCollection } = require("../utils");
const { createHash } = require("crypto");
const { makePrompt, fromSummary, fromProblem } = require("../openai");

const router = express.Router();

router.post("/fromsummary", async (req, res) => {
  const { summary } = req.body;
  const skills = await fromSummary(summary);
  return res.json({ status: "done", skills: skills });
});

router.post("/fromproblem", async (req, res) => {
  const { problem } = req.body;
  const skills = await fromProblem(problem);
  return res.json({ status: "done", skills: skills });
});

module.exports = router;
