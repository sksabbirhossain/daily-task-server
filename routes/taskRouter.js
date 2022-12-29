const express = require("express");
const { addtask, myTask, deleteTask, getUpdateTask, updateTask } = require("../controller/taskController");

const router = express.Router();

router.get("/my-task", myTask);
router.post("/add-task", addtask);
router.get("/my-task/update/:id", getUpdateTask)
router.patch("/my-task/update/:id", updateTask)
router.delete("/my-task/:id", deleteTask)

module.exports = router;
