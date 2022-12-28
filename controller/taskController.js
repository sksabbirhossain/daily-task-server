const { taskCollection } = require("../database/database");

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

module.exports = {
  addtask,
};
