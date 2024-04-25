const { Router } = require("express");

const {
  getTasks,
  saveTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/TaskControllers");

const router = Router();

router.get("/get", getTasks);
router.post("/post", saveTasks);
router.put("/put/:id", updateTasks);
router.delete("/delete/:id", deleteTasks);

module.exports = router;
