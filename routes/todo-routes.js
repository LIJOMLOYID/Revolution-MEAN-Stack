// Create tasks: Post
// Delete tasks: Delete
// Mark task as completed: Patch
// Get all tasks: Get

const express = require("express");
const router = express.Router();

const TaskModel = require("../models/todo");
const Task = require("../controllers/todo-controller");

router.get("/", (req, res) => {
  console.log("Todo Get Route");
  res.json({ success: true, msg: "Todo Get Route" });
});

router.post("/", (req, res) => {
  // Creating a task
  const obj = new TaskModel({
    //id: req.body._id,
    name: req.body.task_name,
    date: new Date(),
    completed: false,
  });
  //console.log(obj);

  // Database Logic
  Task.getTaskByTaskName(obj.name, (err, task) => {
    if (err) throw err;
    if (task) return res.json({ success: false, msg: "Task already exists." });
    Task.addNewTask(obj, (err, added) => {
      if (err) throw err;
      console.log(added);
      res.json({ success: true, msg: "Task Added" });
    });
  });
});

router.patch("/", (req, res) => {
  console.log("Todo Patch Route");

  const obj = {
    id: req.body._id,
    task_name: req.body.task_name,
    completed: true,
  };
  console.log(obj);

  res.json({ success: true, msg: "Task Completed" });
});

router.delete("/", (req, res) => {
  console.log("Todo Delete Route");
  const obj = {
    id: req.body._id,
  };
  console.log(obj);
  res.json({ success: true, msg: "Task Deleted" });
});

module.exports = router;
