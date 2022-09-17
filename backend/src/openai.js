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
    .replace(/\s+/, " ")
    .replace(/\d/, "")
    .toLowerCase();
}

module.exports = { makePrompt };
