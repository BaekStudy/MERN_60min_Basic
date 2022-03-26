const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
require("./Config/connectDB")();

app.use(express.json());
app.use(cors());

const UserModel = require("./Models/Users");

app.get("/getUsers", (req, res) => {
  // try catch 로 내 스타일로 바꾸자
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  // try catch 로 내 스타일로 바꾸자
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.listen(
  process.env.PORT,
  console.log(`http://localhost:${process.env.PORT}`)
);

//mongodb+srv://BAEK:tkfkdgody@cluster0.gcfrc.mongodb.net/MERN_60min?retryWrites=true&w=majority
