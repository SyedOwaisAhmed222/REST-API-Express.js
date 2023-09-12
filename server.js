const express = require("express");
const Joi = require("joi");
const app = express();
const api=require('./routes/api')
app.use(express.json());
const PORT = 4000;

app.listen(PORT, () => console.log(`IT'S RUNNING ON HTTP://LOCALHOST:${PORT}`));


app.use('/api', api)
app.get("/", (req, res) => {
  res.send("hello world");
});

