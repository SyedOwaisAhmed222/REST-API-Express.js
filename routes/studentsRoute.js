"use strict";
const Joi = require("joi");
const express = require("express");
let router = express.Router();
const students = [
  { name: "owais", rollNo: "18b-123-cs" },
  { name: "Adeel", rollNo: "17b-033-cs" },
];

router
  .route("/")
  .get((req, res) => {
    res.send(students);
  })
  .post((req, res) => {
    const { error } = validateStudent(req.body);

    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    const student = {
      name: req.body.name,
      rollNo: req.body.rollNo,
    };
    students.push(student);
    res.send(student);
  });

router
  .route("/:rollNo")
  .get((req, res) => {
    const student = students.find((c) => c.rollNo == req.params.rollNo);
    if (!student) return res.status(404).send("invalid student roll number");
    res.send(student);
  })
  .put((req, res) => {
    const student = students.find((c) => c.rollNo == req.params.rollNo);
    if (!student) res.status(404).send("invalid roll num");
    const { error } = validateStudent(req.body);

    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    student.name = req.body.name;
    res.send(student);
  })
  .delete((req, res) => {
    const student = students.find((c) => c.rollNo == req.params.rollNo);
    if (!student) return res.status(404).send("invalid roll num");
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send(student);
  });

function validateStudent(student) {
  const schema = Joi.object({
    name: Joi.string().required(),
    rollNo: Joi.string().required(),
  });

  return schema.validate(student);
}
module.exports = router;
