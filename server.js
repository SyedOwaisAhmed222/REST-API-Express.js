const express = require("express");
const Joi = require("joi");
const app = express();
const coursesRoute=require('./routes/coursesRoute')
app.use(express.json());
const PORT = 4000;

app.listen(PORT, () => console.log(`IT'S RUNNING ON HTTP://LOCALHOST:${PORT}`));


app.use('/api/courses', coursesRoute)
app.get("/", (req, res) => {
  res.send("hello world");
});

