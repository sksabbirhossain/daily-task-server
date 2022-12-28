const { MongoClient } = require("mongodb");

const url = `mongodb://localhost:27017`;
const clint = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function dbConnect() {
  try {
    await clint.connect();
    console.log("Database connection successfull");
  } catch (error) {
    console.log("something worng!!!");
  }
}
// dbConnect().catch((err) => console.log(err));

// create collections
const taskCollection = clint.db("dailyTask").collection("tasks");

module.exports = {
  dbConnect,
  taskCollection,
};
