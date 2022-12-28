const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./database/database");
const taskRouter = require("./routes/taskRouter");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

//port
const port = process.env.PORT || 5000;

//database setup
dbConnect();

//route setup
app.use("/api", taskRouter)

//start server
app.listen(port, () => {
  console.log(`listening port ${port}`);
});
