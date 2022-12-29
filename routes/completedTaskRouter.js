const express = require("express");
const {
  getCompletedTask,
  notCompletedTask,
  commentTask,
  getComment,
} = require("../controller/completedTaskController");

const router = express.Router();

router.get("/completed-task", getCompletedTask);
router.patch("/completed-task/not-completed/:id", notCompletedTask);
router.post("/completed-task/comment", commentTask);
router.get("/completed-task/comment/:id", getComment);

module.exports = router;
