const { MongoClient } = require("mongodb");

// const url = `mongodb://localhost:27017`;
const url = `mongodb+srv://admin:RAwSdZl9apdrNHif@cluster0.g6yzpsg.mongodb.net/?retryWrites=true&w=majority`;
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
const commentCollection = clint.db("dailyTask").collection("comments");

module.exports = {
  dbConnect,
  taskCollection,
  commentCollection,
};
