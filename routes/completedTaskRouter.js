const express = require("express");
const { getCompletedTask, notCompletedTask } = require("../controller/completedTaskController");

const router = express.Router();

router.get("/completed-task", getCompletedTask);
router.patch("/completed-task/not-completed/:id", notCompletedTask);

module.exports = router;
