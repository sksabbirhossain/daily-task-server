const { ObjectId } = require("mongodb");
const { taskCollection } = require("../database/database");

//get my completed task
const getCompletedTask = async (req, res) => {
  try {
    const { userid } = req.query;
    const completedTask = await taskCollection
      .find({ userId: userid, status: true })
      .toArray();
    res.send({
      success: true,
      data: completedTask,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
};

//not completed task
const notCompletedTask = async (req, res) => {
    const id = req.params.id;
  try {
    const task = await taskCollection.updateOne(
      { _id: ObjectId(id) },
      { $set: { status: false } }
    );
    if (task.matchedCount) {
      res.send({
        success: true,
        message: "task not completed",
      });
    } else {
      res.send({
        success: false,
        message: "something went worng!!",
      });
    }
  } catch {
    res.send({
      success: false,
      message: "something went worng!",
    });
  }
};

module.exports = {
  getCompletedTask,
  notCompletedTask,
};
