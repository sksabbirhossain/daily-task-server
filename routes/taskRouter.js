const express = require("express");
const { addtask, myTask, deleteTask } = require("../controller/taskController");

const router = express.Router();

router.get("/my-task", myTask);
router.post("/add-task", addtask);
router.delete("/my-task/:id", deleteTask)

module.exports = router;
