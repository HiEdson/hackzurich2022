require("dotenv").config();

const express = require("express");
const usersRoute = require("./routes/user");
const skillsRoute = require("./routes/skills");
const causesRoute = require("./routes/causes");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRoute);
app.use("/skills", skillsRoute);
app.use("/causes", causesRoute);

app.listen(5000, () => {
  console.log("started listening at 5000");
});
