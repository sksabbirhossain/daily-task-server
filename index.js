const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

//port
const port = process.env.PORT || 5000;

//database setup

//route setup
app.get("/", (req, res) => {
  res.send("hello api");
});

//start server
app.listen(port, () => {
  console.log(`listening port ${port}`);
});
