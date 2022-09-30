//require express
const express = require("express");
//require dotenv config
require("dotenv").config();
//require workout routes
const workoutRoutes = require("./routes/workouts");
//initialize express app
const app = express();
//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/workouts", workoutRoutes);
//check req body and bind with req
app.use(express.json());
//routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome Node" });
});
//server start at port 4000
app.listen(process.env.PORT, () => {
  console.log("listening at port ", process.env.PORT);
});
