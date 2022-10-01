//require express
const express = require("express");
//require mongoose
const mongoose = require("mongoose");
//require dotenv config
require("dotenv").config();
//require workout routes
const workoutRoutes = require("./routes/workouts");
//initialize express app
const app = express();
//check req body and bind with req
app.use(express.json());
//global middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/workouts", workoutRoutes);

//connect to mongo atlas database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //server start at port 4000
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening at port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("connection error", error);
  });
