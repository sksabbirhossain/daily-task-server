const { ObjectId } = require("mongodb");
const { taskCollection } = require("../database/database");

//get task by user id
const myTask = async (req, res) => {
  try {
    const { userid } = req.query;
    const myTasks = await taskCollection.find({ userId: userid }).toArray();
    res.send({
      success: true,
      data: myTasks,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
};

//add task
const addtask = async (req, res) => {
  try {
    const data = req.body;
    const addTask = await taskCollection.insertOne(data);
    res.send({
      success: true,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
};

//delete a task
const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await taskCollection.deleteOne({ _id: ObjectId(id) });
    if (result.deletedCount) {
      res.send({
        success: true,
        message: "User Delete successfull",
      });
    } else {
      res.send({
        success: false,
        message: "user not deleted",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "something worng",
    });
  }
};

module.exports = {
  addtask,
  myTask,
  deleteTask,
};
