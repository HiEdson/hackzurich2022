const express = require("express");
const { getCollection } = require("../utils");
const { createHash } = require("crypto");
const { makePrompt } = require("../openai");

const router = express.Router();

router.post("/fromsummary", async (req, res) => {
  const { summary } = req.body;
  const _jobs = await makePrompt(
    `As a career consultant make a list of jobs you would recommend to a student with the following summary on their resume: "${summary}":`
  );
  const _skills = await makePrompt(
    `As a career consultant make a list of skills you think a student with the following summary possess: "${summary}":`
  );
  const skills = [];
  for (let skill of _jobs.split("-")) {
    skill = skill.trim();
    if (skill.length >= 4) skills.push(skill.toLowerCase());
  }
  for (let skill of _skills.split("-")) {
    skill = skill.trim();
    if (skill.length >= 4) skills.push(skill.toLowerCase());
  }
  return res.json({ status: "done", skills: skills });
});

router.post("/fromproblem", async (req, res) => {
  const { problem } = req.body;
  const _skills = await makePrompt(
    `"${problem}" In order for me to be able to solve the above problem make a bulleted list of skills i shoud have:`
  );
  const _jobs = await makePrompt(
    `"${problem}" Make a bulleted list of professionals who can solve the above problem:`
  );
  const skills = [];
  for (let skill of _jobs.split("-")) {
    skill = skill.trim();
    if (skill.length >= 4) skills.push(skill.toLowerCase());
  }
  for (let skill of _skills.split("-")) {
    skill = skill.trim();
    if (skill.length >= 4) skills.push(skill.toLowerCase());
  }
  return res.json({ status: "done", skills: skills });
});

module.exports = router;
