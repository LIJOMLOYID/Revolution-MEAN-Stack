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
  console.log("Todo Post Route");
  const obj = {
    task_name: req.body.task_name,
    date: new Date(),
  };
  console.log(obj);
  res.json({ success: true, msg: "Post Route" });
});

module.exports = router;
