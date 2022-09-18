require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({ apiKey: process.env.OPENAI_KEY });
const openai = new OpenAIApi(config);

// (async () => {
//   const key = process.env;
//   let prompt = `"I am an experienced fullstack programmer with experience in building distributed systems". From the above professional summary make a list of jobs that candidate can take up`;
//   let d = await makePrompt(prompt);
//   let skills = d.split("-");
//   for (let skill of skills) console.log(skill);
//   //   console.log(d);
// })();

async function makePrompt(prompt, max_tokens = 100) {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt,
    temperature: 0.7,
    max_tokens,
  });
  const choices = response.data.choices;
  let text = "";
  if (choices?.[0]?.text) text = choices?.[0]?.text;
  return text
    .replace(/[^\w- ]/g, "")
    .replace(/\s+/g, " ")
    .replace(/\d/g, "")
    .toLowerCase();
}

async function fromSummary(summary) {
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
  return skills;
}

async function fromProblem(problem) {
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
  return skills;
}

module.exports = { makePrompt, fromSummary, fromProblem };
