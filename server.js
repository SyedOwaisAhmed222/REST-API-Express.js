const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());
const PORT = 4000;
app.listen(PORT, () => console.log(`IT'S RUNNING ON HTTP://LOCALHOST:${PORT}`));
const courses = [
  { id: 1, name: "DSA" },
  { id: 2, name: "OOP" },
  { id: 3, name: "DAA" },
];
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/api/courses", (req, res) => {
  res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id == req.params.id);
  if (!course) return res.status(404).send("invalid course id");
  res.send(course);
});
let uid = 4;
app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const course = {
    id: uid,
    name: req.body.name,
  };
  courses.push(course);
  uid += 1;
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id == req.params.id);
  if (!course) res.status(404).send("invalid course id");
  const { error } = validateCourse(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  course.name = req.body.name;
  res.send(course);
});
app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id == req.params.id);
  console.log(course)
  if (!course) return res.status(404).send("invalid course id");
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});
function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}
