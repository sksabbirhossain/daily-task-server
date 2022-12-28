const express = require("express");
const { addtask } = require("../controller/taskController");

const router = express.Router();

router.post("/add-task", addtask);

module.exports = router;
