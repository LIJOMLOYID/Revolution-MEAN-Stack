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
  let name = req.body.name;
  console.log("Todo Post Route");
  //console.log("Name: ", name);
  console.log(req.body);
  res.json({ success: true, msg: "Post Route" });
});

module.exports = router;
