const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let students = [
  {
    id: 1,
    name: "Sajal",
    course: "BTech"
  }
];

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Student API Running Successfully"
  });
});

// GET Students
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// POST Student
app.post("/students", (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      success: false,
      message: "Name and Course are required"
    });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    course
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student Added Successfully",
    data: newStudent
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});