const express = require("express");
const { getCollection } = require("../utils");
const { createHash } = require("crypto");

const router = express.Router();

router.post("/fromsummary", async (req, res) => {
  const { summary } = req.body;
  return res.json({ status: "done", skills: [] });
});

router.post("/fromproblem", async (req, res) => {
  const { problem } = req.body;
  return res.json({ status: "done", skills: [] });
});

module.exports = router;
