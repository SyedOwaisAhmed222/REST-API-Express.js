"use strict";
const Joi = require("joi");
const express = require("express");
let router = express.Router();
let uid = 4;
const courses = [
    { id: 1, name: "DSA" },
    { id: 2, name: "OOP" },
    { id: 3, name: "DAA" },
  ];

router
  .route("/courses")
  .get((req, res) => {
    res.send(courses);
  })

  .post((req, res) => {
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

router
  .route("/courses/:id")
  .get((req, res) => {
    const course = courses.find((c) => c.id == req.params.id);
    if (!course) return res.status(404).send("invalid course id");
    res.send(course);
  })
  .put((req, res) => {
    const course = courses.find((c) => c.id == req.params.id);
    if (!course) res.status(404).send("invalid course id");
    const { error } = validateCourse(req.body);

    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    course.name = req.body.name;
    res.send(course);
  })
  .delete((req, res) => {
    const course = courses.find((c) => c.id == req.params.id);
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
module.exports=router
