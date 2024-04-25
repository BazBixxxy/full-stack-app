const TaskModel = require("../models/task.model");

module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
};

module.exports.saveTasks = (req, res) => {
  const { task } = req.body;

  TaskModel.create({ task })
    .then((data) => {
      console.log("Saved successfullly.");
      res.status(201).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send({ error: error, message: "Something went wrong" });
    });
};

module.exports.updateTasks = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  TaskModel.findByIdAndUpdate(id, { task })
    .then((data) => {
      console.log("Updated successfullly.");
      res.status(201).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send({ error: error, message: "Something went wrong" });
    });
};

module.exports.deleteTasks = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  TaskModel.findByIdAndDelete(id)
    .then((data) => {
      console.log("Deleted successfullly.");
      res.status(201).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send({ error: error, message: "Something went wrong" });
    });
};
