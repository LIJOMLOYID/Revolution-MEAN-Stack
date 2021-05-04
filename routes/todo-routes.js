// Create tasks: Post
// Delete tasks: Delete
// Mark task as completed: Patch
// Get all tasks: Get

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Todo Get Route");
  res.json({ success: true, msg: "Todo Get Route" });
});

router.post("/", (req, res) => {
  const obj = {
    id: req.body._id,
    task_name: req.body.task_name,
    date: new Date(),
    completed: false,
  };
  //console.log(obj);

  // Data Processed: Date, Input Validation
  // Database Logic
  // Check if task already exists or not.

  res.json({ success: true, msg: "Task successfully added" });
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
