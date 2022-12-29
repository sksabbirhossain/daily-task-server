const express = require("express");
const {
  addtask,
  myTask,
  deleteTask,
  getUpdateTask,
  updateTask,
  completeTask,
} = require("../controller/taskController");

const router = express.Router();

router.get("/my-task", myTask);
router.post("/add-task", addtask);
router.get("/my-task/update/:id", getUpdateTask);
router.patch("/my-task/update/:id", updateTask);
router.patch("/my-task/complete/:id", completeTask);
router.delete("/my-task/:id", deleteTask);

module.exports = router;
