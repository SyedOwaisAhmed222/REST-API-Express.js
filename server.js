const express = require("express");
const Joi = require("joi");
const app = express();
const coursesRoute=require('./routes/coursesRoute')
const studentsRoute=require('./routes/studentsRoute')

app.use(express.json());
const PORT = 4000;

app.listen(PORT, () => console.log(`IT'S RUNNING ON HTTP://LOCALHOST:${PORT}`));


app.use('/api/courses', coursesRoute)
app.use('/api/students', studentsRoute)
app.get("/", (req, res) => {
  res.send("hello world");
});

