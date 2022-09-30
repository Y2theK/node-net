//require express
const express = require("express");
//require dotenv config
require("dotenv").config();
//initialize express app
const app = express();
//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome Node" });
});
//server start at port 4000
app.listen(process.env.PORT, () => {
  console.log("listening at port ", process.env.PORT);
});
