const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  // date: {
  //   type: Date,
  //   required: true,
  // },
  // time: {
  //   type: Timestamp,
  //   required: true,
  // },
});

module.exports = mongoose.model("Task", taskSchema);
