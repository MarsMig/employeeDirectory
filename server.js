// TODO: this file :)
const express = require("express");
const app = express();
const employees = require("./employees");

const init = async () => {
  app.listen(3000, () => console.log("I am listening on port 3000"));
};

app.get("/", async (req, res) => {
  res.status(200).send("Hello employees!");
});

app.get("/employees", async (req, res) => {
  res.status(200).json(employees);
});

app.get("/employees/random", async (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.status(200).json(randomEmployee);
});

app.get("/employees/:id", async (req, res) => {
  const id = Number(req.params.id);
  const filteredArray = employees.filter(
    (element) => Number(id) === element.id
  );
  // If no employee is found, return a 404 error
  if (filteredArray.length === 0) {
    return res.status(404).json("Employee not found");
  }
  res.status(200).json(filteredArray[0]);
});

init();
