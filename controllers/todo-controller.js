// Database functions

const TaskSchema = require("../models/todo");

module.exports.addNewTask = (obj, callback) => {
  obj.save(callback);
};

module.exports.getTaskByTaskName = (name, callback) => {
  TaskSchema.findOne({ name: name }, callback);
};
