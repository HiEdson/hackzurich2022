require("dotenv").config();

const express = require("express");
const usersRoute = require("./routes/user");
const skillsRoute = require("./routes/skills");

const app = express();

app.use(express.json());

app.use("/users", usersRoute);
app.use("/skills", skillsRoute);

app.listen(5000, () => {
  console.log("started listening at 5000");
});
